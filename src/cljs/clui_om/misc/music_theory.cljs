(ns clui-om.misc.music-theory)

;; A few utilities and copious comments about music theory.

;; Western music theory is a kaleidoscope of mismatched base numbers. The full
;; range of notes is an "octave" despite the fact that the number eight does not
;; figure in to any part of it anywhere. One octave has twelve (12) notes (not
;; 8!), each of which is sometimes called a "whole note". But the gap between
;; two whole notes is only a *semi* tone, not a whole tone. This implies that
;; there must be six full tones (vs semitones) in an octave, but nobody ever
;; really talks about mixing heptones into their octaves.

;; Then there are cents, which implies that the French might have injected some
;; sensible decimal logic into the system at some point. But no such luck: the
;; gap between two semitones is 100 cents, so it takes 1200 cents to equal an
;; octave. This all makes about as much sense as having 24 semihemifarthings to
;; a quatloo.

;; You know what **does** make sense? Frequencies and wavelengths. Thanks to
;; the Age of Reason, we can in fact describe one octave in terms of actual
;; absolute numbers. So in hertz, one octave is:
(def note-frequencies {:c 261.6 ; middle C
                       :c# 277.18
                       :d 293.66
                       :d# 311.13
                       :e 329.63
                       :f 349.23
                       :f# 369.99
                       :g 391.99
                       :g# 415.31
                       :a 440 ; concert A
                       :a# 466.16
                       :b 493.88
                       })

;; The next note in the scale would be the next full C at 522.3 Hz. The careful
;; reader will observe that this is precisely double the Hz of the first C. And
;; that, perhaps more than anything else, is the take-away message of the
;; chromatic scale: every time you double or halve the frequency, you are right
;; back at the note that you started with, just an octave higher or lower.

;; Meanwhile, the term "cent" is an anachronistic term of art that bypasses the concept of
;; frequencies entirely. If (and **only** if) you already know how to start from
;; a particular initial note, then 100 cents UP is the next whole note (sorry,
;; one semitone). Meanwhile, 100 cents DOWN is the prior whole note (aka one
;; semitone down). By definition, then, 1200 cents UP is one full octave up.
;; Just keep in mind that a cent is a non-scientific term of art and don't get
;; too hung up over weird things like base 1200 numbering. So if we were to redo
;; the above map in cents, it would be:
(def note-cents (into (sorted-map) {:c 0
                                    :c# 100
                                    :d 200
                                    :d# 300
                                    :e 400
                                    :f 500
                                    :f# 600
                                    :g 700
                                    :g# 800
                                    :a 900
                                    :a# 1000
                                    :b 1100}))

;; But a cent is always a **relative** value, unlike a frequency! That's a
;; Very Important Thing To Keep In Mind. That means the above map only
;; makes sense if you **also** know to start the first note (:c) at a
;; frequency of 261.6. If you lack that starting seed, the note-cents map
;; is useless.

;; On the other hand, if you **do** know a starting value (it could be that
;; :c is 261.6, but it could also be that :a is 440Hz), then it might be
;; much simpler to just talk in terms of cents up and cents down. And that's
;; exactly what people do with the WebAudio API: they pick a starting note
;; (it's 440 by default, aka Concert A) for the ``frequency``, and then they
;; assign a **detune** value in terms of cents up or cents down. So in plain
;; old JavaScript, you might say:
;; var myO = new OscillatorNode();  // always 440Hz (concert A) by default
;; myO.detune = -300;    // three whole notes down, aka F#

;; So a lot of code gets written with an assumed 440Hz (concert A) for the
;; frequency, and then detune values are applied in plus or minus 100 cent
;; increments to hit the various notes on the scale. 

;; it's nice to have the note-frequencies map, so we can straight from a
;; note keyword to a frequency, but it's kind of obnoxious that we can't
;; iterate over that map in an ordered way. So here's a sorted version
;; of it:
(def sorted-frequencies
  (into (sorted-map-by (fn [k1 k2]
                         (compare (note-frequencies k1)
                                  (note-frequencies k2))))
        note-frequencies))


;; We want to show minor (# or b) keys differently on the UI, even though
;; mathematically they're just another 100 cents on the scale like any
;; other note. Still, a piano keyboard wouldn't look right without special
;; treatment of the black keys.
(defn minor?
  "Takes a musical note (in keyword form) and returns true if it represents a
  minor key. A `#` suffix indicates sharp, and a `b` suffix indicates flat.
  For example, :C# and :Bb should return true, whereas :C or :B should both
  return false. "
  [note]
  (if (re-seq #".+[#b]+" (name note))
    true
    false))

(def piano-offsets
  "The black and white sequencing of piano keys appears to be completely
  arbitrary. Wtf!"
  [0 0.5 1 1.5 2 3 3.5 4 4.5 5 5.5 6])


(defn build-notes
  "Takes a simple input map of note names and frequencies and returns a vector
  of sub-maps, where each sub-map has its own :note, :freq and :cent keys and
  values. The returned format is much more useful in an Om context than a map
  of primitives would be.y"
  [note-freqs]
  (into []
        (map-indexed
         (fn [i [n f]] {:note n :freq f :cent i :offset (nth piano-offsets i)})
         (seq note-freqs))))

(defn chromatic-scale
  "Get a single octave in the form of a vector of maps. Each map represents
   the name, frequency and cent for one note. The cents start at zero for
   middle C and go up from there. That's worth keeping in mind: this octave
   starts at middle C, not concert A!"
  []
  (build-notes sorted-frequencies))




