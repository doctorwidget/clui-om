******************
Colored Tiles
******************

This is the first demo I did that wasn't highly derivative of someone else's
tutorial or demonstration. Note that these notes and the link on the main page
are both titled *Colored Tiles*, but the the ClojureScript code for the host
page is the ``page_alpha.cljs``. That's because our usual pattern is to define a
dedicated host page app which leans heavily on encapsulated, sharable helper
namespaces. In this case, the host page app is the ``clui-om.page-alpha``
namespace, and the sharable helper namespaces are in the
``clui-om.widgets.palettes`` and ``clui-om.misc.tiles`` namespaces.


The Usual Patterns
=======================

These notes will *not* be a comprehensive review of the entire app structure,
because it follows the exact same pattern we've seen several times already: 

#. define an app state at the top of the file
#. define helper methods
#. define ``Om`` components
#. create and *^export* a ``(main)`` method 

The ``(main)`` method is responsible for instantiating the top level ``Om``
component, thus launching the app. The host HTML page must call that method.

That's the basic design pattern for all ``Om`` apps. If it is still puzzling to
you, you should go back and review some of the earlier tutorials! Here I will
just pull out some details that I find interesting or new about the code for
this *specific* page.


Top: State And Helpers
--------------------------------

As always, we start by defining a global ``app-state`` symbol up top. We also
always have references to our top-level DOM node where we will have ``Om``
instantiate the app: in this case that's ``ALPHA-ROOT``.


.. code-block:: clojure

    (def app-state (atom {:most-recent-activity (str  "Using palette " p/DEFAULT-PALETTE)
                          :tiles (get-tiles p/DEFAULT-PALETTE)
                          :palette p/DEFAULT-PALETTE
                          :poll-interval 500}))

    (def ALPHA-ROOT (.getElementById js/document "alpha-div"))



Finally, helper methods (``get-tiles``, ``shuffle-colors`` etc) also live in
this top area. In this case one helper precedes the app state because it's used
when defining the app state: ``get-tiles``. 

.. code-block:: clojure

    (defn get-tiles [palette]
      (let [colors (vals palette)]  
        (vec (take 360 (repeatedly #(hash-map :settings t/DEFAULTS
                                              :color (nth colors (rand-int (count colors)))))))))

    (defn shuffle-colors [cursor]
      (om/update! cursor [:tiles] (get-tiles (:palette @cursor))))

That ``palette`` argument will ultimately come from inside the ``palettes`` helper
namespace. Palettes will always be simple maps containing keyword color names
with HTML string values. 



Middle: Components
-----------------------

For a tiny application I would define the components right here inline with the
rest of the file. But in any non-trivial application, it's better to make
everything as modular and re-usable as possible, and just *import and use* from
other namespaces. So in this case, the only component defined on this page is
the ``top-level-widget`` component. 


the ``palettes`` namespace
---------------------------------

As mentioned earlier, this is its own dedicated namespace. It provides both
palette definitions and ``Om`` components to act as colored tiles and colored
tile *collections*. 


palette maps
.................

The different color palettes are implemented as hard-coded maps. They could
easily be replaced by some kind of database call, or reorganized into external
JSON files. They are ultimately *just data*.

.. code-block:: clojure

   ; a sample palette definition

   (def PROTOGENIE {:slate "#BBCCDD"
                      :navy "#003366"
                      :haze "#EEEFFF"
                      :gold "#FFCC00"
                      :tan "#EEBB66"})

Keywords are awesome inside Clojure code, but they are not as friendly to the
end-user as a capitalized name (e.g. ``Gold`` instead of ``:gold``). Later on,
we will use basic string manipulation to convert keywords to capitalized regular
strings for display purposes, rather than explicitly maintaining some kind of
separate ``:title`` property for each color. This way nothing is ever repeated.
*One* key plus *one* value is the heart of the data; everything else is just
formatting. 


palette chooser
...................

There's also a dedicated ``Om`` component that uses all of the defined palettes
to draw an HTML chooser (i.e. a ``<select>`` element): ``palette-chooser``. This
component also encapsulates the entire event-handling process, so that the user
doesn't have to micromanage anything. 


.. code-block:: clojure

    (defn palette-chooser
      [cursor owner {:keys [callback]}]
      (reify
        om/IRender
        (render [_]
          (apply odom/select #js {:onChange #(parse-choice % callback)}
                 (map #(odom/option (clj->js {:value (name %)})
                                    (s/capitalize (name %)))  
                      (keys palettes))))))  


chooser event handling
.............................

Note that the ``palette-chooser`` function takes advantage of the third argument
after ``cursor`` and ``owner``. This third argument is optional, and most of the
time we have left it unused up until now. We deconstruct it in place, seeking
out a callback function under the ``:callback`` key of that options map.
Whenever the HTML chooser changes, the ``palette-chooser`` calls a helper method
with two arguments: the Event and the callback.

The helper is ``parse-choice``. All it does is extract the choice from the
chooser using standard JavaScript property access (``.-target`` and ``.-value``
and so on). It then converts the selected value (which is a vanilla string) back
into a Clojure keyword, and uses that keyword to look up the correct palette map
from the main collection of palettes. 


.. code-block:: clojure

    (defn parse-choice [e callback]
      (let [target (.-target e)
            selected (.-value target)
            kw (keyword selected)
            palette (palettes kw)]
        (callback palette)))


When all is said and done, ``parse-choice`` ends by calling the callback
function with the palette map. Up until now, that callback function has just
been luggage, carried around with the intent that we would use it eventually.
When the time finally comes, we call with a nice pure Clojure map. Thus, the
*user* of the ``palette-chooser`` can define a callback function that accepts
pure Clojure maps, without worrying about any HTML or JavaScript property access
issues. This is *A Very Good Thing*.

I bring this all up because this whole pattern of *user* plus *chooser
component* plus *chooser helper* should be re-usable in many circumstances. It's
common to give users ``<select>`` elements as part of the UI, and it's very nice
to be able to completely encapsulate the messy ``<option>`` and ``.-value``
internals inside a helper.


the ``tiles`` namespace
-----------------------------

This namespace defines the ``color-tile`` component that gets used on the main
page. This is a relatively complicated component compared to what we've seen
before. 

.. code-block:: clojure

    (defn color-tile [cursor owner opts]
      (reify
        om/IInitState
        (init-state [_]
          {:paused false
           :saved-color (first (vals p/DEFAULT-PALETTE))})
        om/IRenderState
        (render-state [_ state]
          (let [settings (:settings cursor)
                paused (:paused state)
                border-width (if paused 4 1)
                cell-size (:cell-size settings)
                tile-size (:tile-size settings)
                gap (if paused
                      (- cell-size tile-size (* 2 border-width))
                      (- cell-size tile-size))
                color (if paused
                        (:saved-color state)
                        (:color cursor))] 
            (odom/div (clj->js {:style
                                 (clj->js 
                                  (merge (square-div cell-size)
                                         {:border-style "solid"
                                          :border-width (str border-width "px")
                                          :border-color (if paused "#000000" "#EEEEEE")
                                          :display "inline-block"
                                          :position "relative"}))})
                (odom/div (clj->js 
                           {:onClick #(toggle-pause % cursor owner state)
                            :style
                            (clj->js (merge (square-div tile-size)
                                            {:backgroundColor color
                                             :position "absolute"
                                             :left (/ gap 2)
                                             :top (/ gap 2)}))})))))))


The component uses an internal ``state`` to keep track of whether or not it is
*paused*. A *paused* tile will be immune to random color changes. The user
should be able to toggle the *paused* state of a tile just by clicking on it. 

Hence we have an ``IInitState`` method, since we need to keep track of both the
``:paused`` value and the most-recently used color. And if you plan to access
that state at render time, you must implement ``IRenderState`` instead of plain
old ``IRender``. 

Paused tiles have a much thicker border than unpaused ones, which means their
spacing requirements change. Hence ``IRenderState`` starts with a length ``let``
block to get all of our measurement ducks in a row. 

Drawing the actual tile is a two-step process: an outer ``<div>`` with the
border and some conditional coloration, and an inner div with some absolute
positioning based on those ducks. 

Finally, note that both the outer and inner divs use the same ``(square-div)``
function, along with the constant ``DEFAULTS`` map, to keep everything DRY.

.. code-block:: clojure

    (def DEFAULTS {:cell-size 40
                   :tile-size 24})

    (defn square-div [size]
      {:width size
       :min-width size
       :max-width size
       :min-height size
       :max-height size})



the top-level widget
------------------------

Back in the page-alpha namespace, the ``top-level-widget`` is a big div with a
few sub-areas:

#. A paragraph for showing output text (feedback, events, etc)
#. An instance of the ``palette-chooser`` component 
#. An collection of ``N`` colored tiles, based on the ``app-state``. 


.. code-block:: clojure

    (defn top-level-widget [app owner opts]
      (let [echo #(report % app)] 
        (reify
          om/IWillMount
          (will-mount [_]
            (let [poll-interval (@app-state :poll-interval)] 
              (go (while true
                    ;(.log js/console "Inside IWillMount infinite loop (" poll-interval ")")
                    (shuffle-colors app)
                    (<! (timeout poll-interval))))))
          om/IRender
          (render [_]
            (odom/div #js {:className "outerbox"}
                      (odom/p #js {:className "alert alert-info"} (:most-recent-activity app))
                      (om/build p/palette-chooser app {:opts {:callback #(color-choice % app)}})
                      (apply odom/div nil
                             (om/build-all t/color-tile (:tiles app))))))))

Remember that the palette chooser took a callback function: here we see how it
is passed down into the component from the user. The third argument when
instantiating any ``Om`` instance is a map of options. The ``:opts`` keyword is
the sub-map that gets passed down to the component. Think about that for a
second because it has tripped me up before: the entire map is colloquially
called the *"options map"*, but only value of the specific, explicit ``:opts``
keyword is actually sent to the component as its own third argument. Other
keywords of the *options map* control other aspects of how the component is
instantiated, but the values for those keys will *not* be available to the inner
component: only values inside the one-and-only ``:opts`` key will be. 

In this case, the callback just calls yet another helper: ``(color-choice)``.
Here we get the payoff for all of our encapsulation and isolation: this function
receives a nice clean Clojure map, which can then be used by other helpers and
components in this outer namespace. 

.. code-block:: clojure

    (defn color-choice [palette cursor]
      (let [msg (str "User chose palette: " palette)] 
           (om/update! cursor [:palette] palette)
           (om/update! cursor [:most-recent-activity] msg)
           (om/update! cursor [:tiles] (get-tiles palette))))   

Finally, note that the top-level widget runs an infinite background loop,
changing colors every ``:poll-interval`` milliseconds, where ``:poll-interval``
is (of course!) part of the ``app-state``. This demonstrates how you can use
``core.async.timeout`` instead of calling the JavaScript ``setInterval()``. By
encapsulating everything in an async channel like this, we open up the
possibility of leveraging the whole ``core.async`` toolkit: multi-channels,
broadcasting, etcetera. In this case we've kept it simple; we just shuffle the
colors once per cycle. 

.. code-block:: clojure

    (defn shuffle-colors [cursor]
      (om/update! cursor [:tiles] (get-tiles (:palette @cursor))))    


the ``(main)``
------------------

Finally, as always, we end with the ``(main)`` function, which must have the
``^:export`` metadata flag if you want to call it from the host HTML page. We
absolutely *do* want to do that, so we include the flag.

.. code-block:: clojure

    (defn ^:export main
      "Initialize the bootstrap demo page"
      []
      (let [msg "main():: initializing page-alpha.cljs"]
        (.log js/console msg)
        (om/root top-level-widget app-state {:target ALPHA-ROOT})))




