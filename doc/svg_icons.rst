******************
SVG-ICONS
******************

Let's make an open source library to facilitate the use of SVG images as icons
within Om. And I don't just mean as ``<img src=...``. That's already super easy
and needs no helper. We're talking about a *more powerful* option, wherein you
get each and every SVG element instantiated inside of ``Om``. That results in
separate DOM elements which can be individually targetted via CSS or event
handlers. If you use ``<img src=...`` you basically have a bitmap as a result.
If you do what I'm talking about, you have a *true SVG* which is fully
integrated with the ``Om`` and ``React`` ecosystem. 


Original Train of Thought
=============================

My first thought was to do this as shown inside ``clui-om.svg.utils`` and
``clui-om.svg.brittle-icons``. The strategy is that the ClojureScript code
references an SVG file just as if it were any other web resource, like a CSS
file or a JPEG file. That SVG file is then loaded via an AJAX call at runtime.
The body of the SVG file is parsed and made available to the Om component. The
Om component has two states: a wait state which applies prior to the time that
the external SVG is loaded (during which it shows a text message like "no SVG
data available"), and then the loaded state, which begins after the SVG file has
been parsed. That pattern *seemed* simple at first, but I eventually came to see
as an antipattern.

There is simply no *good* reason to use the pattern of loading an SVG file via
HTTP at runtime. Those two separate states mentioned above are pure code bloat:
why have extra code to deal with a data-not-yet-loaded state? Why force yourself
to deal with asynchronous loading in the first place? Why not just *inline the
SVG* data during the compilation phase? 

Now obviously, inlining the SVG data as (say) string constants would be brittle
and horrible. But this is Clojure; you have *macros* at your disposal. You have
always told yourself that *macros are code templates*... *you should use macros
to insert dynamic bits of info into a bigger template the way you insert SQL
data into a Django template*. Look at those three instances of customized icons
inside ``clui-om.svg.brittle-icons``. Is it not obvious that they could all be
implemented by inserting SVG file data into an otherwise-shared ClojureScript
template? 

The *seemingly* good reason to load the SVG via HTTP at runtime really boils
down to simple laziness: *writing macros seems hard, whereas loading SVG via
HTTP seems simple*. But the macro approach results in *cleaner*, *simpler*,
*shorter* code for the end-user of the library. And the whole point of writing
an open source library is to do the hard stuff (the writing of macros) for
them, so that they get the benefits (clean, simple, short code) without doing
the work. So loading the SVG via HTTP at runtime is actually an *antipattern*;
it sounds good at first mention, but it gives poorer results in the long run.

So you should keep your current pair of files (``svg.brittle-icons`` plus
``svg.utils``) around for reference, but there's no need to incorporate that
approach into the final library. You knew something was wrong deep in your heart
when you chose a name that included the word *brittle* in it. That was never
meant as a compliment! 

Part of the point of making a sharable library is as something to look good on a
resume. It's at least partially about *selling yourself*, which you have been
woefully lax about until now. You cannot continue to be so lackadaisical, and so
you should *intentionally* take the harder path. Get a good-looking open source
library up and running on Github and you'll be much better set up for job hunts.


deficon
-------------

This should be a macro.
Macros get definied inside *Clojure* files, not *ClojureScript* files. 
They live side by side in the same namespace, in the same directory.

They will be defined like so:

.. code-block:: clojure

    ; inside the savage.icons ns, in a *Clojure* file that's a sibling
    ; of a *ClojureScript* file of the exact same name. 
   
    (defmacro deficon [name pathtofile] ...)


Then the top part of the macro (i.e. an outer let function) will do the heavy
lifting of:

#. loading the file via standard Java IO (see how Kioo does this)
#. parsing the file via Hickory (reuse your own code from ``svg.icons`` here)

Then the bottom part will be the actual macro-quoted return value. This is the
super-function that will be created. Here is where you will get tricksy with the
recursion. Here is where you will use all of the special macro symbols. 

The above code will run **during** ``macroexpansiontime`` (MXT)
Then at ``runtime``, the rest of the code base can *invoke* the named function.
WHen they do that, they will be invoking the super-function created at MXT.

The superfunction is the function that will take an *opts* object.
The ``:attrs`` sub-key will be applied willy-nilly to the <SVG> element.
ID, class, event handlers, etc etc.
Also any ``:viewBox`` or ``:width`` or ``:height`` etc.
In any case, those are definitely applied as args to the final fxn.

so for example:

.. code-block:: clojure

    ; inside the end-users code base
    (ns foo
       (:require savage.icons :as svgi :include-macros true))

    (svgi/deficon my-gear-icon "images/gear3.svg")    

    ; then deep inside another widget
        (om/build my-gear-icon cursor {:opts {:id "spam" 
                                              :class "foo"
                                              :onClick "blah"}})

Now that's what I call simple and yet highly usable. Note that the original call
to ``deficon`` uses the ``svgi`` prefix. That call will *define* a
``my-gear-icon`` function, which will be available after MXT. When you finally
want to create a component on the page, you just invoke it like any other Om
component function. The function produced during MXT lives in the ``foo``
namespace, as part of the users own code. 

When you do it this way, you get all of the advantages of a true SVG on the
page. The CSS file can use child selectors to get highly differentiated styling
within the icon. The event handlers can (with the help of core.async) be used to
handle any effects whatsoever. And all of this happens without *any* of the
asynchronous issues or boilerplate seen in the three ``brittle-icons`` examples.



defsvg
----------

This will be a separate but equal *macro*, intended to assist people who want to
build customized icons along the lines of those seen in ``brittle-icons``. No
matter what you do, there will always be some tight coupling with this approach,
because you're still basing a custom component on an external SVG file, and so
those two things are tightly coupled. BUT we can eliminate the repetitive code
seen three times in the ``IInitState`` and ``IWillMount`` sections, and we can
completely avoid all asynchronous loading issues. So this will still be a
win-win compared to the approach seen inside ``clui-om.svg.brittle-icons``. 

Here again we define a macro in our library:

.. code-block:: clojure

    ; inside the savage.icons ns, in a *Clojure* file
   
    (defmacro defsvg [name pathtofile] ...)

At ``macroexpansiontime`` (MXT), instead of creating an Om component
superfunction, the macro creates the map of prioritized hickory data currently
seen in ``clui-om.svg.utils.parse-body``. After MXT is over, the name will refer
to a Clojure map containing that data. 

So then in the rest of the code, the end-user programmer can just query that map
for information. They will obviously need to have the original SVG file open
side by side with their ClojureScript code, but that's the nature of the beast:
I had to do that when I wrote my ``brittle`` icons; it is inherent to this
approach! But this time around there will be no need for the spurious
``IInitState`` and ``IWillMount`` code, and no issues with asynchronous loading.
Instead, they can make their custom icon like so:

.. code-block:: clojure

    (ns foo
        (:require savage.icons :as s :include-macros true))

    (s/defsvg heartsvg "images/heart.svg")

    ;; then they define their own component
    (defn my-heart-icon
       [app owner opts]
       om/IRender
       (render [_]
          (let [w (get heartsvg :width)
                h (get heartsvg :height)
                e (get heartsvg :elements) 
                ;...
                ])))

This code is thus less *repetitive* than the ``brittle-icons`` examples, and it
will *perform better*, because the SVG data is not loaded asynchronously at
runtime. The end-user programmer can just use ``heartsvg`` as a black box that
contains the SVG data from the file "images/heart.svg", without ever having to
deal with Java IO or HTTP requests at all. The data is just there and available
to them; it's been inlined, and the code that uses it is thus simpler and
clearer. 

Again, there is is still inherent brittleness here, because as soon as you start
querying the contents of ``:elements``, you are tightly coupled to the contents
of that SVG file. But again, that's the price of entry to this approach. The
point is that this is clearer and shorter than the HTTP version, not that it is
any less tightly coupled. If you want no tight coupling, you can just cut and
paste string constants out of the SVG file and into your ClojureScript file!
Congrats; now you no longer have two coupled files; you just have one big one
with fugly string constants. The advantage of the separate files is obviously
that it provides *much* better separation of concerns: Adobe Illustrator or
Inkscape manage the SVG files, and the ClojureScript files just *use* those
files. 
















