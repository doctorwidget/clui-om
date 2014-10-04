***********************************
React Tutorial, Redone In Om
***********************************

The page at */react-om-tut/* demonstrates the official **React.js** tutorial
converted to ClojureScript. Nothing has been added to the original, except for
the core ``Om`` library itself. However, the original tutorial
used two vanilla JavaScript libraries that have been changed to their
ClojureScript equivalents: ``markdown-clj`` instead of
``Showdown`` and ``cljs-http`` instead of ``jQuery``.

I used **jalehman's** `Om version of the React tutorial`, as the basis for this
page. However, the version online is old and unmaintained, and so it contains
some **significant** anomalies and did not work out of the box originally.
Specifically, the online version contains:

#. some obsolete syntax from very early ``Om`` releases
#. confusion over when to use ``om/update!`` versus ``om/transact!``
#. confusion over the proper use of the ``korks`` argument to ``om/transact!``
#. unused and spurious imports (i.e. the ``secretary`` library). 

Fortunately, it turns out that poring over the error messages and the ``Om``
source code to clean up those anomalies was a very worthwhile learning
experience. It is absolutely essential to have a firm grasp on the nitty-gritty
details of ``om/update!`` and ``om/transact!`` if you wish to use ``Om``
properly.

.. _`Om version of the React tutorial`: https://github.com/jalehman/react-tutorial-om">react-tutorial-om

The final, cleaned up version of the ClojureScript code can be found at
``src/cljs/clui_om/react_om_tut.cljs``. There is also some special server-side
helper code (which basically just sets up a server-side atom to act as mock
database which resets on every server restart) at
``src/clj/clui_oum/react_om_tut.clj``. Note that the server-side code is
optional; it makes for a nicer user experience than the raw React tutorial,
because newly-posted comments persist until the server restarts, rather than
vanishing the next time the code reads the static ``comments.json`` file.


Overall Structure
======================

The overall structure of the ClojureScript code is not unusual. It's a fairly
standard pattern of definitions followed by a single imperative function (which
I usually name ``(main)`` or ``(initialize)``) that kicks off the whole process.
The page that uses this code needs to invoke the ``(main)`` function explicitly,
or else this file is just passive definitions. That's a **feature**, not a bug!

I'll assume that you're looking at the ``react_om_tut.cljs`` file as you go
through this.


Namespace
=================

As always in ClojureScript, we start with a namespace definition. Honestly,
access to sane namespacing and module management is one of the killer features
of ClojureScript over JavaScript. Other native JavaScript package-management
systems exist (e.g. ``require.js`` or the native system in ``Angular``) but none
of them feel anywhere near as clean and powerful as the Clojure one. Yay!


Global State
==================

The first thing we do is define a couple of pieces of global state. As always,
there is an ``app-state`` atom, which in this case is very simple. If you have a
big, rich UI, you will invariably end up with a bigger, more-complex
``app-state`` atom. However, there's no reason that atom ever has to be contain
anything other than a single (ever-more-deeply nested) Clojure map.

The other thing this section defines is the ``APP-ROOT``. This is not standard;
most ``Om`` tutorials set this reference manually when they instantiate the root
component much lower down. But it seems to me that this is the sort of thing
that you really will want to have clearly marked out on a per-page basis. Also,
I can imagine pages with more than one React root, all of them sharing the same
page-wide ``app-state`` atom and just using different pieces of it. The concept
of multiple roots on one page is perfectly normal in React, but if you're going
to do that, surely you want to be clear about it up front.

.. code-block:: clojure

    (def app-state (atom {:comments []}))

    (def APP-ROOT (.getElementById js/document "app-main-div"))




Helper Functions
=================================

Next, we define a bunch of helper functions. Even though these functions are not
contained inside ``Om`` components, they do interact with **cursors**,
which are one of the most important abstractions in ``Om``. 


Digression: Cursors
---------------------------------

A cursor is a light wrapper around a Clojure atom, which keeps track of its
location inside the overall app state. This allows components and sub-components
to work only with a small piece of the overall application state, without
requiring you to write any functions that explicitly pass state from parent to
child or vice versa. So a cursor is a blob of state -- generally a map -- which
might represent the entire application state, or it might represent a sub-map or
a sub-sub-map within the entire application state. 

One key thing to remember is that inside of the ``render`` or ``render-state``
functions, accessing a sub-map within a cursor returns a brand new sub-cursor,
which is exactly what you expect and want. But when you're *outside* of those
phases (as you will be in a helper function), you don't automatically end up
with a new sub-cursor when you access a higher-level one! Instead, you end up
with a plain old dereferenced data structure, which does not participate in the
whole ``React`` / ``Om`` rendering cycle. If you update that plain old data
structure, the change does not ripple out to the application state atom!

That's where the ``om/transact!`` function comes in: when you use this outside
of one of the privileged phases, the second argument (called ``korks``) lets you
drill down into the main cursor, the same way you would with a call to
``(get-in)`` for a vanilla Clojure map. The sub-structures pulled out via the
``korks`` keyword *are* true cursors, and if you update them, they *will* update
the global state automagically.

.. code-block:: clojure

   ;; ANTIPATTERN:
   ;; om/transact! called with just (cursor f) as arguments.
   ;; The fn receives the entire cursor as the argument. 
   ;; We try to deconstruct a ``comments`` sub-map from that cursor, but
   ;; that will not work! The comments sub-map is a brand new binding,
   ;; that is not wrapped as an Om cursor. Updating it has no effect,
   ;; even though we wrapped the whole thing inside om/transact!
   (om/transact! cursor 
                (fn [{:keys [comments]}]
                    (conj comments {:name "foo" :text "bar"})))

   ;; CORRECT pattern
   ;; om/transact! called with (cursor korks f) as arguments.
   ;; The fn receives (cursor :comments) as its argument, correctly wrapped
   ;; up as a brand new sub-cursor. Updating it **will** change the overall 
   ;; state as expected.
   (om/transact! cursor
                :comments
                (fn [original-comments]
                   (conj original-comments {:name "foo" :text "bar"})))

We can sum this lesson up as follows: **use the korks, Luke**.



Digression: Async
----------------------

Note that several of the helper functions uses the ``cljs.core.asyc`` library,
which is worth reviewing. For example, the ``cljs-http`` library uses it three
times, for slightly different reasons each time. 

First, inside ``(fetch-comments)``, the function that makes an HTTP GET request to the server.
The ``cljs-http`` request methods all return full-fledged async channels, just
as through you had created your own channel from scratch with ``(chan)``. The
response from the server is always converted by ``cljs-http`` into a standard
Clojure map, but you have to get it by pulling it off of that channel using the
special ``<!`` macro:

.. code-block:: clojure

    (defn- fetch-comments
        [cursor {:keys [url]}]
        (go (let [{:keys [status body headers] :as all} (<! (http/get url))
                 ;; remainder of function omitted for clarity
                 ])))

Put into (much longer!) plain English, the ``(let)`` block here says:

.. note::

   Make an HTTP GET request, which resolves to a channel. Pull something off of
   that channel when it's ready (that's the ``<!``). We expect that something to
   be a map, which we will then deconstruct based on the assumption that it
   contains ``:status``, ``:body``, and ``:headers`` keys.

The final magic word in the ``core.async`` story is that you can only push or
pull to or from a channel when you are inside a ``go`` block, as shown above.
The rest of the time, the channel is a perfectly valid target for symbols, and
it can be passed around, stored in collections etcetera. But you can only
perform asynchronous magic via ``<!`` and ``!>`` if you're inside of a ``go`` or a
``go-loop``. 


The second example is inside the ``(save-comment!)`` function, and the format is
again similar. Again, the relevant code is inside a ``(let)`` which is wrapped
inside a ``(go)``. 

.. code-block:: clojure

   (defn save-comment!
       ;; most of function omitted for clarity; see source!
       (go (let [res (<! (http/post url {:json-params comment}))]
                (.log js/console (:message res)))))

This shows the same underlying pattern as before: ``cljs-http`` requests return
a channel, exactly as through you had created one manually with
``(core.async/chan)``. You pull a *thing* off the channel *eventually*: the
whole point of ``core.async`` is that you can write the code as through it was a
synchronous operation, even though you know the *thing* won't be available right
away. That *thing* is the HTTP response, which is again massaged by
``cljs-http`` into an easy-to-use map. 

The final example shows the use of ``(core.async/timeout)`` as a replacement for
the native JavaScript ``setTimeout()`` function. Inside the ``(comment-box)``
component, we want to run the ``(fetch-comments)`` helper over and over on a
timer. So we create an infinite loop via ``(while true ...)``, and place a
``(timeout)`` channel inside it. This function creates an async channel that has
a limited lifespan. The loop will block until the timeout channel times out, at
which point the loop does one more cycle, until it creates another timeout
channel and blocks again... and so on.

.. code-block:: clojure

    (defn comment-box
        ;; most of component omitted for clarity
        om/IWillMount
        (will-mount [this]
            (go (while true
                   (fetch-comments cursor opts)
                   (<! (timeout poll-interval))))))

Note that this happens inside the ``om/IWillMount`` function, instead of inside
the ``om/IRender`` or ``om/IRenderState`` functions. This is a very important
point to keep in mind: both flavors of ``render`` are called many times over the
lifetime of the component, whereas ``om/IWillMount`` is only called *once per
lifecycle*. You don't want to define persistent resources over and over, by
definition: therefore, you should avoid placing that kind of code inside a
``render``.



Digression: Http Responses
---------------------------------

Finally, note the section that shows how you pull apart an HTTP response from a
server. We already showed this when we discussed the ``(fetch-comments)``
function up above, but it's worth repeating: the ``cljs-http`` library gives you
your HTTP responses as a map, and you pull info out of that map via three
fundamental keys: ``:status``, ``:headers``, and ``:body``. 

.. code-block:: clojure

    (defn- fetch-comments
        [cursor {:keys [url]}]
        (go (let [{:keys [status body headers] :as all} (<! (http/get url))
                 ;; remainder of function omitted for clarity
                 ])))

What you do with that information from there is up to you; the only remotely
tricky bit is the initial destructuring.


Component Functions
=================================

After that, we have the actual ``Om`` component definitions. These definitions
are plain old ClojureScript functions which obey some conventions. Keep in mind
that you will rarely call these functions yourself; instead you will provide
them as an argument to one othe ``Om`` builder macros: ``om/root``, ``om/build``
or ``om/build-all``. Let's repeat that: your component definitions will be
fodder for one of those ``Om`` builder macros: you don't call them yourself!

When ``Om`` calls one of your component functions, it will do so with up to
three arguments, conventionally labelled ``cursor``, ``owner``, and ``opts``. 

``cursor``
----------------------

The first argument is always a *cursor*, which we have already discussed up
above. A cursor is a blob of state. Most of the time you are free to interact
with it as if it were a vanilla Clojure data structure (usually an ordinary
map), but technically it is not a plain vanilla data structure. ``Om`` has
lightly layered on a few extra features on top of a vanilla data structure, the
most important of which is the ability to see *up* and have an opinion about
where this structure sits *inside* a larger structure. 

That's a very important point. Vanilla Clojure data structures can only see
*down* into their contents, and never *up*, because that's an important
foundation to letting values be shared among many symbols. ``Om`` cursors are
different: they have an knowledge that they exist at one and only one position
in a larger data structure. Of course, this doesn't prevent the underlying
vanilla data structure (which is only wrapped by the cursor, but is still a
perfectly valid vanilla Clojure data structure in and of itself) from being
shared! 

So just remember that an ``Om`` cursor is *like* a vanilla Clojure data
structure, without actually *being* a vanilla Clojure data structure. A good
analogy might be the difference between a vanilla Clojure map and an instance
created by ``(defrecord)`` : in many instances, the two things are the same, but
there are scenarios where they two are simply not interchangeable. 

The *name* for this argument is not always *"cursor"*: sometimes you'll see it given
the name for a data type: so in a todo list application, the component that
encapsulates one todo item might have the arguments ``[item owner opts]``,
rather than ``[cursor owner opts]``. Or if the component expects to receive the
entire application state (a perfectly reasonable expectation), it might name the
arguments ``[app owner opts]``. Even in the latter case, where the function
receives the entire app state, it still recieves it as true ``Om`` cursor,
albeit one which happens to start at the very top tier.


``owner``
----------------------

This is a reference to the actual React component. This is a JavaScript object
of some kind, not a DOM node! Of course, since we're inside ``Om``, it's
actually a reference to some kind of ``Om`` wrapper around an underlying
``React`` Javascript object.

This isn't used very often, and you may even see code that disses it by naming
it ``_`` instead of ``owner``. But it's important to know what it is. And if you
**do** need to use true local state, ``Om`` will need a reference to this
argument, the ``owner``, not the ``cursor``!

``opts``
----------------------

Finally, the third argument is entirely optional, and consists of *options*. 
This argument will only be supplied to your component functions if *you*
go out of your way to place it there as part of the initial ``Om`` builder
macro. This is simply a map where you can place your own arbitrary data under
your own keys: it's the essential safety valve that lets you pass around any
custom information that doesn't belong in the global application state.


A Component Example
=================================

So with that in mind, here's a very simple component function that renders one
single comment in a list of comments:

.. code-block:: clojure

    (defn comment
      [{:keys [author text] :as cursor} owner opts]
      (om/component
        (let [raw-markup (md/mdToHtml (or text "blank comment!"))
              color "red"]
              (odom/div #js {:className "comment"}
                (odom/h3 #js {:className "commentAuthor"} author)
                (odom/span #js {:dangerouslySetInnerHTML #js {:__html raw-markup}} )))))

Note that this very-simple example does not even refer to any of the lifecycle
protocols! If you're doing a short and sweet little component, that's perfectly
normal. By calling ``om/component``, you are basically saying *let this
component extend a bog-standard React component*. You then return some
``om.dom`` content, which is interpreted by ``Om`` as a request to paint those
nodes during the rendering lifecycle phase.

Note that in this example, we don't refer to the cursor as either ``cursor`` or
``comment``, either of which would be perfectly reasonable. Instead, we just
jump straight to the keys that we're interested in via ordinary Clojure
destructuring. This is fine for read-only access, but as mentioned above, it's
something we would have to be **very** careful about if our goal was to *change*
anything inside the cursor.


Painting DOM Nodes
----------------------

The actual creation of DOM nodes is obviously very reminiscent of ``Hiccup``.
The function name itself defines the outermost node type. So ``odom/div`` is
going to make a ``<div>`` node: no surprises there. 

The first argument to the ``om.dom`` function is always a *JavaScript literal*
(i.e. a map preceded by the ``#js`` reader macro). Everything in this map will
end up as *attributes* of the final DOM node on the page. This is analagous to
the pure React ``props`` object. Anything you would normally put into an
attribute goes here: styles, titles, placeholders, alt values, etc. Oddly, to
set the ``class`` attribute you have to use the keyword ``:className``... go
figure.

After the Javascript literal props object, you can either have a primitive
string (which will end up as the text content for the node), or, optionally one
or more additional ``om.dom`` nodes. Each such node can in turn have its own
Javascript literals and its own child nodes, and so on and so forth *ad
infinitum*. This is where you have the freedom to create vast amounts of HTML
inside your Clojure code, for good or ill. Remember that with great power comes
great responsibility.

So in the example above:

.. code-block:: clojure

    ; rest of code omitted
    (odom/h3 #js {:className "commentAuthor"} author)    

That creates an ``<h3>`` node, with ``class='commentAuthor'``, and a text body
of the ``author`` value, which was deconstructed from the input cursor, as
discussed above. 


Another Component Example
=================================

The more powerful way to define your components is to use ``(reify)``. Unlike
``(om/component)``, which only allows you to define the ``(render)`` function,
and gives you default behavior for everything else, ``(reify)`` lets you write
custom functions for each and every lifecycle function as you see fit. You
*must* provide a ``render`` (either ``om/IRender`` or ``om/IRenderState``, but
not both), and you *may* provide as many others as you like. Any missing
functions will just have the default behavior for that phase. 

The beginning of a component function looks the same either way: you still start
with ``[cursor owner opts]``, where ``cursor`` might instead have the name of
the specific data blob you expect. Here's an example from this project:

.. code-block:: clojure

    (defn comment-form
      [app owner opts]
       (reify
        om/IRender
        (render [this]
          (odom/form
            #js {:className "commentForm" :onSubmit #(handle-submit % app owner opts)}
            (odom/h3 nil "Add Comment")
            (odom/input #js {:type "text" :placeholder "Your Name" :ref "author"})
            (odom/input #js {:type "text" :placeholder "Say something..." :ref "text"})
            (odom/input #js {:type "submit" :value "Post"}))))) 

This example shows the simplest possible case for this latter format: we're only
implementing ``om/IRender``. Note that this form expects to be instantiated with
the entire app state, not some kind of sub-cursor. 


Events
------------

The other thing that's worth noting here is the event handler. The Javascript
literal (aka the React *props object*) is where all event handlers are attached.
Here we've attached an ``:onSubmit`` handler to the form itself. The attached
function is defined as an anonymous function which calls a named function,
inserting the actual React ``SyntheticEvent`` as the first argument via ``%``. 

You can attach multiple event handlers to any ``om.dom`` node, each under its
own key. The React events that trigger those handlers often will not have all of
the important context information that you will might want, but you are free to
pass it along as an argument to an outer function, as we do here.


One Way Data Binding
-------------------------

That brings up a point we've brought up before, but which is worth dwelling on:
that ``React`` and ``Om`` prefer *one way data binding* instead of the *two way*
binding found in most other modern frameworks. Two way data binding
seems like magic the first time you encounter it, but in the long run it adds a
layer of magic that can make it very difficult to truly understand your own
application. By adhering to a strict one way system, ``Om`` keeps everything out
in the open, saving you from becoming the servant of your own framework.

So all of these ``render`` functions and ``cursor`` shenanigans are all intended
to promote the *one way* flow of data, from the application state to the
rendered UI, and never the reverse. When you finally do get data flowing from
the user to the application (which is inevitable in any non-trivial application)
how do you handle it? It's easy enough to say (as we did above) that the event
handler delegates to an external function... but what does *that* function do?

To answer that, let's look at the ``(handle-submit)`` function in some detail:

.. code-block:: clojure

      (defn handle-submit
        "Event handler for user clicks on the comment form button."
        [e cursor owner opts]
        (let [[author author-node] (u/value-from-node owner "author")
              [text text-node]     (u/value-from-node owner "text")]
             (when (and author text)
               (save-comment! {:author author :text text} cursor opts)
               (u/clear-nodes! author-node text-node))
             false))

Now we see the reasoning behind submitting not just the event (``e``), but also
the ``cursor``, the ``owner``, and the ``opts``. The ``e`` is not used directly,
but we can't avoid sending it. The ``cursor`` and ``opts`` are both passed along
as arguments to ``(save-comment!)``, which we discussed at length in an earlier
section. And importantly, the ``owner`` is the required target for getting the
value of the ``author`` and ``text`` form fields. 

You should remember from our discussion of this tutorial in its pure React form
that React uses a special attribute called ``refs`` to enable code to reach
inside a component and pull data out from it. That's exactly what our
``u/value-from-node`` helper function does. That function is defined in a
separate ``utils`` file, but we will reproduce it here in its entirety:

.. code-block:: clojure

    (defn value-from-node
      "Get the text value from a node, trimmed of whitespace.
      Returns a 2-tuple of text and the node itself (in case
      you want to alter the node based on its contents)"
      [owner field]
      (let [n (om/get-node owner field)
            v (-> n .-value clojure.string/trim)]
         (when-not (empty? v)
           [v n])))

This function relies on the core ``om.get-node`` function, which expects a React
component (i.e. the ``owner``!) and a field name. That field name needs to be
one specified as a ``ref``, and if you'll recall, we defined these fields as
``refs`` when we painted the nodes:

.. code-block:: clojure

    ;; inside the IRender function for comment-form
    (odom/input #js {:type "text" :placeholder "Your Name" :ref "author"})
    (odom/input #js {:type "text" :placeholder "Say something..." :ref "text"})

So that brings us full circle. We attached a ``ref`` attribute when we defined
the form. Then we passed the ``owner`` reference out to the event handler. Then
we used a utility function to get the actual user input from the input field,
based on that ``owner`` and the available ``ref`` fields. 

At that point, we have the actual
text input the user, and we are free to evaluate it for validity (in this case
testing that neither the author nor the text fields are blank). Any other
validation that we wanted to do could be done here, and it would be trivial to
define shareable validation functions that could be re-used by different event
handlers. 

Finally, note that regardless of whether or not we submitted a new comment, the
``(handle-submit)`` function returns ``false``. That lets us avoid an explicit call to
``(.preventDefault e)``, because the HTTP standards say that if an ``onSubmit``
handler returns false, the form should not be submitted. In this case, we're
doing everything we want to do (or want *anyone* to do) ourselves, and we don't
want the browser to try to help us by submitting the form again (thus reloading
the page, doh!), thank you very much.


Whither Validators and Formatters?
------------------------------------

In ``Angular``, one of the places where you are allowed to hook into the two-way
data-binding stream is by defining ``validator`` arrays and ``formatter`` arrays
for any particular field. The former has veto power over user input, should it
turn out to be invalid, while the latter converts plain old Javascript to
friendlier human-readable formats, if needed. 

In ``Om``, since there is no two-way data binding going on, there is no need to
"intercept" any changes via these kinds of explicit arrays. Instead, those
responsibilities naturally live in one of two places. You are of course free to
encapsulate them into their own named and re-usable helper functions, but you
don't need to place them in fixed named arrays as you do in Angular. 

So in ``Om``, rather than belonging to a special ``formatters`` array,
formatting logic is an inherent part of the painting the UI. Inside any
flavor of ``render``, you are free to do whatever you would have done with an
Angular ``formatter``. 

Meanwhile, validation still occurs, but it is the responsibility of individual
*event handlers*, rather than being attached to individual *fields*. Inside any
event handler, you are free to use (and re-use, and share) your own
``validator`` functions as you see fit.



Instantiation
=================================

Finally, we have to actually *instantiate* at least one component before this
application can actually *do* anything. We do this in our ``(main)`` function,
although you will often see tutorials do this inside a naked imperative call at
the end of the file. That approach (an imperative call in the global
environment) seems very short-sighted to me: it works fine in toy demos, but would
be difficult to scale for any larger application (i.e. one with multiple pages using
different top-level components, but sharing the same compiled Javascript file).

So in this case, inside our ``(main)`` function, we have this call:

.. code-block:: clojure

    (om/root tutorial-app app-state {:target APP-ROOT})

Note that this is a call to ``om/root``, not ``om/build`` or ``om/build-all``.
The latter macros instantiate individual components (sequences of components in
the case of ``om/build-all``). The former is the only way to instantiate
**top-level** components.

The ``om/root`` macro receives a top-level component function
(``tutorial-app``), the overall application state atom (``app-state``), and an
options map that must have at least the ``:target`` key (which specifies the
HTML element to be taken over by the top-level component).

As a practical matter, it's important to remember that you can have multiple
top-level React components. So there's nothing theoretically wrong with having
multiple calls to ``om/root``. By judicious use of multiple calls to
``om/root``, you can have a source HTML page that contains a significant amount
of hard-coded boilerplate (which would be a nightmare to build up via individual
calls to ``om.dom``), combined with one or more hot spot divs that will be
transmogrified into ``Om`` components. Each such top-level React component will
be independent of all of the others, but if you feed them all the same
``app-state``, they can *de facto* communicate with each other. The result will
be a page that has one overall shared state despite having multiple top-level
components. 




