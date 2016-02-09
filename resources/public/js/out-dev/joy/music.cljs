(ns joy.music)

;; Entirely based on sample code from "Joy of Clojure", 2nd edition, by Fogus

;; See the Clojure (not ClojureScript) file at src/clj/joy/externs-for-cljs.clj
;; For handy code that can automatically analyze ClojureScript code that does
;; interop with an external library and outputs an appropriate externs file. BUT
;; note that I did gave to fine-tune that output to remove a few oddities (e.g.
;; it flagged my use of js/console as requiring a dummy declaration).

;; Also note that the WebAudio API is rapidly evolving, and there are already
;; multiple syntax changes to it since the 2nd edition of "Joy of Clojure" was
;; published. For example, "createGainNode" has been shortened to "createGain",
;; and "start" and "stop" have replaced "noteOn" and "noteOff". Just to mix
;; things up further, some browsers (e.g. Webkit-based browsers) still accept
;; both the older and newer syntax, whereas Firefox is very strict about the
;; latest official API. If you are reviewing this code after October 20, 2014,
;; it is entirely likely that there have been further changes in both the
;; developing API and the implementation in different browsers. That's just life
;; on the bleeding edge.

(defn soft-attack
  "Takes two arguments: a WebAudio AudioContext object (a native JavaScript
  object which is part of the official JavaScript WebAudio API), plus a map of
  settings. Returns a gain node (another WebAudio native JavaScript artifact)
  that goes from silent from T=0 to T=<delay>, up to <volume> 50 milliseconds
  later, followed by a ramp back down to silence after <duration>."
  [ctx {:keys [delay duration volume]}]
  (let [node (.createGain ctx) ;; createGain replaces older "createGainNode"
        ap (.-gain node)] ;;  yields an AudioParam instance; see WebAudio API
    (doto ap  
      ;; now proceed to (doto) on that new sub-object
      (.linearRampToValueAtTime 0 delay)
      ;; note the WebAudio API uses full seconds as time units
      ;; so we have to use decimals to get to milliseconds
      (.linearRampToValueAtTime volume (+ delay 0.05))
      (.linearRampToValueAtTime 0 (+ delay duration)))
    node))

(defn sine-tone
  "Takes a WebAudio AudioContext object plus a map of settings.
   Returns an *oscillator* node that plays a steady note starting at <delay>
   seconds and continuing for <duration> seconds. Agnostic vis-a-vis volume.
   Note that <cent> is a term of art in the WebAudio API: it is the pitch
   of the note on the chromatic scale, where each full note is 100 cents
   away from the next full note (A, B, C etc).
   Oscillator nodes behave differently from gain nodes!"
   [ctx {:keys (cent delay duration)}]
   (let [node (.createOscillator ctx)]
     (set! (-> node .-frequency .-value) 440)
     (set! (-> node .-detune .-value) (- cent 900))
     (.start node delay)    ; noteOn = older syntax, start = newer
     (.stop node (+ delay duration)) ; noteOff = older, stop = newer
     node)) ;; return the oscillator node at the end

(defn connect-to
  "Connects the output of node1 to the input of node2, returning node2.
  This lets nodes cooperate seamlessly!"
  [node1 node2]
  (.connect node1 node2)
  node2)

(defn woo
  "Takes a WebAudio AudioContext object and a map of settings, and then plays a
  single note based on those settings. Results in a 'woo' sound, which is a bit
  like a glass harp. IMPORTANT NOTE: we're seeing the first function that will
  actually result in a single playable output. That output will be based on the
  input note map (which will have a musical key and duration etc), but the
  actual output will be filtered through the two synthesizers above: a gain node
  and an oscillator node. The final note can thus sound very different from
  another note of the same duration and key that passed through other types of
  synthesizer nodes, or through no synthesizer nodes at all. "
  [ctx note]
  (let [linger 1.5
        note (update-in note [:duration] * linger)]
    (-> (sine-tone ctx note)
        (connect-to (soft-attack ctx note))))) ;; returns the final node

;;*****************************************************************************
;; Tune-Construction Helpers
;;*****************************************************************************

(defn pair-to-note
  "Returns a note map when given a 2-tuple of tone and duration"
  [[tone duration]]
  {:cent (* 100 tone)
   :duration duration
   :volume 0.4})

(defn consecutive-notes
  "Takes a sequence of note maps that have no :delay, and return them with
   the correct delays so that they plain the order given."
  [notes]
  ;; note the use of the clojure.core/reductions function. This handy variant
  ;; on (reduce) returns a sequence of all of the intermediate values, rather
  ;; than just the single final values. We leverage this by supplying a function
  ;; that takes 2 notes (deconstructing the first on the spot), and giving the
  ;; second note a delay equal to (delay + duration) of the first note. That
  ;; means no change for the first note in the input sequence, but all of the
  ;; others are returned with incrementally ascending delays. Clever Mr. Fogus.
  (reductions (fn [{:keys [delay duration] :as note1} note2]
                (assoc note2 :delay (+ delay duration)))
              notes))

;; BPS (beats per second)... change this constant to change the beat!
(def BPS 6)

(defn notes
  "Returns a sequence of note maps at a moderate tempo when given an
  input sequence of tone pair tuples"
  [tone-pairs]
  (->> tone-pairs
       (map pair-to-note)
       consecutive-notes
       (map #(update-in % [:delay] / BPS))
       (map #(update-in % [:duration] / BPS))))

(defn magical-theme
  "A sequence of notes for a magical theme"
  []
()  (notes
     (vector [11 2] [16 3] [19 1] [18 2] [16 4] [23 2]
             [21 6] [18 6] [16 3] [19 1] [18 2] [14 4] [17 2] [11 10]
             [11 2] [16 3] [19 1] [18 2] [16 4] [23 2]
             [26 4] [25 2] [24 4] [20 2] [24 3] [23 1]
             [22 2] [10 4] [19 2] [16 10])))



;;*****************************************************************************
;;  Player functions
;;*****************************************************************************

;; IFF the browser supports WebAudio, the js/window object will have an
;; AudioContext property. That property will point to a class-like object,
;; which is not used directly, but is rather used to define new instances.
;; This function lets ClojureScript re-use one single instance over and
;; over, rather than creating multiple instances.
(def make-once (memoize (fn [audio-api] (new audio-api))))

(defn play!
  "Kick off playing a sequence of notes. Takes a note-fn and a series of notes
  to play. The notes-fn must be a function of two arguments (an AudioContext
  object, and a map representing one note to play). The note-fn must return an
  AudioNode object that plays that one (now-altered) note."
  [note-fn notes]
  (if-let [audio-api (or (.-AudioContext js/window)
                         (.-webkitAudioContext js/window))]
    (let [ctx (make-once audio-api) ;; and NOW we have an AudioContext instance!
          ;; add a compressor node to protect ears & speakers from feedback
          compressor (.createDynamicsCompressor ctx)]
      (let [now (.-currentTime ctx)]
        (doseq [note notes]
          (-> (note-fn ctx (update-in note [:delay] + now))
              (connect-to compressor)))) ;; all notes now safely protected
      (connect-to compressor (.-destination ctx)))
    (.log js/console "(play!):: This browser does not support the WebAudio API")))


;;*****************************************************************************
;;  Main function -- to be loaded when the page loads
;;*****************************************************************************

(defn ^:export main
  "Main function for the joy.music namespace."
  []
  (let [msg "(main):: inside joy.music namespace..."]
    (.log js/console msg)
    #_(play! woo [{:cent 1100 :duration 1 :delay 0.0 :volume 0.4}
                {:cent 1400 :duration 1 :delay 0.2 :volume 0.4}
                {:cent 1800 :duration 1 :delay 0.4 :volume 0.4}])
    (play! woo (magical-theme))))
