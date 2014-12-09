***************
SVG Graphics
***************

There are currently many different graphics libraries available for JavaScript.
One of the ones that seemed to have a lot of buzz for many years was `Raphael`_,
which supports browers all the way back to IE 6 (!). This is the first one I
ever remember hearing about (I had not been investigating the topic in any
serious way, and yet I heard about it anyway).

However, rather than continuing to pay the MicroSoft tax forever, at some point
everyone needs to move on and let older versions of IE die off. The original
author of ``Raphael`` has also created the `snap.svg`_ library, which only works
on IE 9+ (and real browsers like Chrome and Firefox, of course), but adds
numerous new features like grouping, animation, and better support for reading
external ``*.svg`` files. Another modern SVG-only library is `svg.js`_, but it
looks to be significantly less popular on github. 

Another library you'll often hear about is `Paper.js`_, which is actually a
*canvas* based library, which is to say it works via bitmaps under the hood. It
provides a facade whose intent is to feel very object-oriented, like SVG, but
everything is ultimately drawn on an HTML ``<canvas>`` element. There's also
`Processing`_ and `Fabric`_, both of which are fully-dedicated to painting
bitmaps on ``<canvas>`` elements, without trying to be particularly
object-oriented about it. In any case, the title of *this* article is ``SVG
Graphics``, so we obviously aren't going to talk about any of these any further.

Then there are *graphing* libraries, which are focused on making interactive
charts and graphs. The big gun here is `d3`_, and there is also a pure
ClojureScript competitor called `c2`_. These are both straight up SVG, not
bitmap/canvas-based. Both of them provide strong *interactive* elements: they
are intended to make charts that bounce and wiggle and expand when clicked on,
not just static graphs. However, they are strongly focused on those charts and
graphs, not on creating animated shapes for use with a general-purpose UI or a
not-too-twitchy game.


.. _`Raphael`: http://raphaeljs.com/

.. _`snap.svg`: http://snapsvg.io/

.. _`svg.js`: http://svgjs.com/

.. _`Paper.js`: http://paperjs.org/

.. _`Processing`: http://processingjs.org/

.. _`Fabric`: http://fabricjs.com/

.. _`d3`: http://d3js.org/

.. _`c2`: https://keminglabs.com/c2/


All of these might be the perfect tool depending on your needs, but as I've
said, I'm interested in a general-purpose SVG library. A few years ago,
``Raphael`` probably would have been the obvious choice, so now that I feel safe
kicking IE 8 to the curb, the obvious choice for a general-purpose SVG library
seems to be ``snap.svg``. Not only is it developed by the author of ``Raphael``,
it is currently supported by Adobe, which seems like a good omen for its future
development.

The first part of the document will be mostly a straight-up translation of the
official Snap `mini-tutorial`_, translated from JavaScript into ClojureScript.
After that we'll move on and do some integration with ``Om``.

.. _`mini-tutorial`: http://snapsvg.io/start/



Snap Drawing Surfaces
============================

Just as there is an official ``<canvas>`` element in the HTML spec, so there is
an official ``<svg>`` element. ``Snap`` wants such an ``<svg>`` element as its
main entry point. See the Mozilla `snap element docs`_ for more info. 

.. _`snap element docs`: https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg

In our demo we've created an ``<svg>`` element with an id of ``snapNode``.

.. code-block:: html

   <svg id="snapNode" width="480" height="320"></svg>


A Basic Circle
=================

Then inside ClojureScript, we write a function that initializes that node and
saves a reference to it. As with all ClojureScript apps, there's a ``(main)``
method that is called by the host page, which will not duplicate here. 

.. code-block:: clojure

    (defn snap-raw []
      (let [s (js/Snap snap-node)
            circA (.circle s 150 150 100)
             _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})]))

It's worth pausing to appreciate how *un-idiomatic* this code is. I am literally
translating the original JavaScript into ClojureScript. As a result, this code
is full of *mutability*, and is entirely *imperative*, neither of which is
idiomatic Clojure. To add insult to injury, we even have a ``(let)`` block with
no expressions after the bindings! We will try to do better once we move on to
``Om`` integration. 

Note that the example above doesn't actually *need* any expressions (imperative
or otherwise) in the body of the ``(let)``. This code is full of side effects,
and the only purpose of the entire function is to generate those side effects.


Fancier Tricks: Grouping And Masking
======================================

For now, we'll continue with this amazingly un-Clojurrific code style, just so
we can keep everything as close to the original tutorial as possible. Next up,
we will create two smaller circles and *group* them so we can change their
attributes both at the same time. Then we will tell the original circle to use
those disks as a *mask*, meaning we'll only get a peek at the original circle
through the smaller ones, as though they were viewports.

.. code-block:: clojure

   (defn snap-raw []
      (let [s (js/Snap snap-node)
         circA (.circle s 150 150 100)
         _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})
         diskA (.circle s 100 150 70)
         diskB (.circle s 200 150 70)
         disks (.group s diskA diskB)
         _ (.attr disks #js {:fill "#fff"})
         _ (.attr circA #js {:mask disks})] 
     ))


Neither grouping nor masking were supported in ``Raphael``. This is exhibit A
for why everyone should give up on IE, the sooner the better.

Also note that the value of the ``s`` reference is an instance of the ``Paper``
class. Both ``Raphael`` and ``Snap`` use this term of art for the drawing
surface; a ``Paper`` instance to them is as the ``canvas`` element is to bitmap
painting APIs.  So in the official docs, you can see that ``.circle`` is
technically a method of the ``Paper`` class, along with all of the other shape
primitives. 


Animations
=================

All properties of ``snap`` SVG objects can be animated. You just provide a new
object with the new properties, along with an integer for the total time that
the animation should take. Any changed properties will smoothly transition from
their current values to the newly-specified values over the course of that
duration.

.. code-block:: clojure

    (defn snap-raw []
      (let [s (js/Snap snap-node)
            circA (.circle s 150 150 100)
            _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})
            diskA (.circle s 100 150 70)
            diskB (.circle s 200 150 70)
            disks (.group s diskA diskB)
            _ (.attr disks #js {:fill "#fff"})
            _ (.attr circA #js {:mask disks})
            _ (.animate diskA #js {:r 40} 2000)] 
        ))

All we added here was a call to the ``.animate`` method of ``diskA``. We
supplied the *new* radius (standardized in ``Snap`` as ``r`` per the docs), and
a 2000 millisecond duration for the animation. ``Snap`` takes care of the rest. 

Note that we could only do this because we maintained a reference to the
``diskA`` circle. The fact that you can define references to these SVG objects,
which you can then manipulate at will later on, makes ``snap`` *very* friendly
to use as part of a larger program. You aren't just painting stuff and leaving
it there; you are creating *objects* which you can then manipulate at will.
Obviously we will want to write this kind of code in a much more Clojurrific way
when we integrate with ``Om``, but the point here is that ``Snap`` provides a
solid programming basis for us to work with when the time comes.


CSS Selections
==================

Even if we hadn't saved an explicit reference to ``diskA``, we could still grab
a reference to it on the fly via *css selectors*. This works because unlike
Canvas bitmaps, SVG graphics are entirely represented as XML-style *elements* on
the page. That means you can grab them via CSS selection just like you would any
other HTML element. *Whoah*. 

.. code-block:: clojure

    (defn snap-raw []
      (let [s (js/Snap snap-node)
            circA (.circle s 150 150 100)
            _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})
            diskA (.circle s 100 150 70)
            diskB (.circle s 200 150 70)
            disks (.group s diskA diskB)
            _ (.attr disks #js {:fill "#fff"})
            _ (.attr circA #js {:mask disks})
            _ (.animate diskA #js {:r 40} 2000)
            _ (.animate (.select disks "circle:nth-child(2)") #js {:r 40} 2000)] 
        ))

Now obviously it's clearer to save references if you can. But sometimes you will
be creating dynamic instances on the fly, and having an explicit named reference
for each one will not be practical. Allowing you to use regular old CSS
selectors to grab your SVG elements is a kind of awesome safety valve for this
issue. 

Also note that the ``(.select)`` method is called on the ``disks`` *group*. That
means you can search only within a specific area, rather than spending time
searching through the entire document. This is also a huge win.


Shapes
============

Mozilla has good documentation about using SVG `shapes`_. In general, whenever
there is a core SVG shape in the specs, ``Snap`` lets you create an instance of
that shape via a method of the same name, taking a JavaScript object with the
correct properties as an argument. The method call is made to a core ``Paper``
instance (i.e. on our ``s`` var). 

.. _`shapes`: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes 

This is the origin of the very-terse parameters used as object attributes.
``Snap`` did not invent them; it just uses the exact attribute names that are
part of the W3C spec. So ``cx`` and ``cy`` are always the attribute name for the
x and y coordinates of the center of a circle, and so on. Don't blame ``Snap``
for these names!

Paths
=========

`Paths`_ are covered briefly on the documentation for Shapes up above, but they are
both important and powerful, and worth further discussion. The Mozilla docs on
paths (like all of the Mozilla articles) covers the markup used to create them
as explicit XHTML. As always, ``Snap`` implements them as a method of
the same name on a ``Paper`` instance.  

.. _`paths`: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths


Patterns
============

`Patterns`_ are a first-class SVG element that can be used to fill shapes or
lines in liu of using a solid color. You can create them on the fly via
calls to a ``Paper`` instance, just like you do to create Shapes.

.. _`patterns`: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Patterns 


.. code-block:: clojure

    (defn snap-raw
      []
      (.log js/console (str "Instantiating Snap on node id: " snap-node))
      (let [s (js/Snap snap-node)
            circA (.circle s 150 150 100)
            _ (.attr circA #js {:fill "#bada55" :stroke "#000" :strokeWidth 5})
            diskA (.circle s 100 150 70)
            diskB (.circle s 200 150 70)
            disks (.group s diskA diskB)
            _ (.attr disks #js {:fill "#fff"})
            _ (.attr circA #js {:mask disks})
            _ (.animate diskA #js {:r 40} 2000)
            _ (.animate (.select disks "circle:nth-child(2)") #js {:r 40} 2000)
            path1 (.path s "M10-5-10,15M15,0,0,15M0-5-20,15")
            _ (.attr path1 #js {:fill "none",
                                :stroke "#bada55",
                                :strokeWidth 5})
            pattern1 (.pattern path1 0 0 10 10)
            _ (.attr diskA #js {:fill pattern1})] 
        ))   

Notice that paths are defined using a rather obscure string syntax,
which is basically extra-terse dialect of turtle graphics: *move* (**M**) to
these coordinates, then *move* (**M**) to those coordinates, then *line* (**L**)
to those coordinates, etcetera. Even a series of *moves* without lines still
generates a shape as long as a ``:fill`` is specified. Also note that **M** and
**L** are hardly the only keywords available: you can also create cubic segments
with **C**, beziers with **B**, and so on.

In the above example we instantiate a ``path`` instance using a path string,
then set some attributes on it. Then we instantiate a ``pattern`` instance based
on that path. Finally, we set the *fill* of one of the disks to be the new
pattern. 


Other Pattern Approaches
--------------------------

This is not the only way to define patterns! You can also define them on the
page as markup with an ``#id`` property, and then select them via a CSS
selector, like so:

.. code-block:: html

     <!-- somewhere in a <defs> element, which is in turn inside a <svg> element --> 
     <pattern id="patternAlpha" patternUnits="userSpaceOnUse" 
                x="0" y="0" width="10" height="10" viewBox="0 0 10 10">
        <path d="M-5,0,10,15M0-5,15,10" stroke="white" stroke-width="5"></path>
     </pattern>

Note that we're combining a path and a pattern directly in markup. Also note
that the above markup should be nested inside a ``<defs>`` element which in turn
lives inside an ``<svg>`` element. 

Once you have that available on the page, using it in ``Snap`` is just a matter
of finding it via standard CSS selector syntax. 

.. code-block:: clojure

   ; inside the snap-raw function
   (let [ ; other side-effect inducors elided
         _ (.attr diskB #js {:fill (js/Snap "#patternAlpha")})])


Gradients
============

`Gradients`_ can be used instead of patterns or solid colors, with the same
basic pattern that we've seen above. There is syntax for creating this with
explicit markup, and then ``Snap`` applies their usual pattern for implementing
it inside JavaScript code instead:

.. code-block:: clojure

    ; inside the snap-raw function
    (let [ ; elided
           _ (.attr disks #js {:fill "R(150, 150, 100)#fff-#000"})])

Again, there is a whole mini-language for defining the gradients themselves. See
the Mozilla docs for more info. It's very helpful that ``Snap`` just re-uses
this official W3C mini-language without altering it or trying to augment it,
IMHO.


Using SVG Data
===========================

``Snap`` gives you all of the tools you need to create arbitrarily-complex SVG
graphics from scratch inside your JavaScript or ClojureScript. But for any
non-trivial project, you will **not** want to instantiate all of your complex
art assets on the fly at runtime... that way lies madness!

Instead, you will want to create images in a dedicated tool such as `Inkscape`_
or `Adobe Illustrator`_, and then export them as SVG files. So means you need a
way to *use* existing SVG markup on your page. There are several different ways
to do this.

.. _`Inkscape`: https://inkscape.org/en/

.. _`Adobe Illustrator`: http://www.adobe.com/products/illustrator.html

 
Inline Markup
--------------------

One of the most interesting aspects of SVG is that it is fundamentally an XHTML
dialect, which means the source code for images looks just like plain old HTML
with some unual tags. And *that*, in turn, means that we can define SVG graphics
inline as part of the HTML. We did that up above for a ``pattern`` instance.
Here another example, showing a visible circle along with some plain text.

.. code-block:: html
   
    <svg width="100" height="100" style="float:right;">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="blue" />
        <text x="0" y="15" fill="red" transform="rotate(30 20,40)">I love SVG</text>
    </svg>

Note that we can use all of regular CSS tricks on the outermost SVG element!
Here we've given it a ``float:right;`` style, to make better use of the
whitespace on our page.  

You'll find many tutorials online that use this as their primary method for
dealing with SVG graphics. They literally copy and paste this HTML-esque text
from an external SVG file into a ``<svg>`` block somewhere on their page. As we
mentioned above, you can then size and style the overall ``<svg>`` block via
CSS, just as if it were any other HTML element. The fact that SVG plays nicely
with the rest of the HTML5 stack is one of its more important strengths.

This approach is fine for trivial one-off graphics, but it has serious drabacks
when you try to scale up. Specifically, there's no good way to *reuse* that
markup. True, you can use SVG ``<defs>`` and ``<use>`` within a single page, but
that doesn't let you re-use a graphic on multiple different pages. For that, we
need to have the SVG in a separate file.


Image Source
------------------------

Another possibility is to load the external SVG file as the *source* for an
``IMG`` element. This is shown in this next example:


.. code-block:: html

     <img src="images/ant1.svg" width="50" height="50" style="float:right;">

This works fine for images that you won't need to interact with: plain old
icons and logos. But if you plan to do any *programming* related to the SVG
graphic, this is not the best method, because it means you can't interact with
separate sub-shapes and sub-paths within the image.  For example, you can't grab
(say) the path that makes up the head of the ant and give it a different stroke
and fill from the paths that make up the body of the ant. 


Via Script
-------------

Finally, you can load SVG image files directly via ``Snap``, as though they were
any other remote asset. When you do this, you will *eventually* end up with a
fragment of SVG code that is not actually placed on the page yet. It's only
there *eventually* because this is an asynchronous call just like loading any
other asset. Fortunately, we're now familiar with how you deal with that in JS:
you just provide a callback handler that takes over *after* the load is
finished. That handler is where the SVG fragment is actually appended to an SVG
element on the page somewhere.

Our first ``(snap-raw)`` function is already big and unwieldy enough as it is,
so let's add a second SVG node (with ``id=snapNodeB``), and add a new function
(``snap-raw-beta``), which will then be called from inside the ``(main)``
function. The next code block shows ``(snap-raw-beta)``, but not the extra
one-liner inside ``(main)``. 

.. code-block:: clojure

    (def snap-beta "#snapNodeB")

    (defn snap-raw-beta
      []
      (let [paper (js/Snap snap-beta)
            handler (fn [frag]
                      (let [group (.select frag "g")
                            _ (.append paper group)]))]
        (.load js/Snap "images/gears3.svg" handler)))    

Here we define a symbol called ``paper`` (per the idiom of ``Snap``), which
takes over the ``<svg id=snapNodeB">`` node on the host page. 

Then we define our handler. The handler receives the SVG fragment, which we
refer to as ``frag``. This is a standard SVG element, so we can use the
``(.select)`` method on it to select the main ``<g>`` within the fragment. If
the external file had multiple ``<g>`` elements we would have to rethink this
part, so be sure to inspect the SVG file! The last thing the handler does is
append the new group to the ``paper`` element. Again, I apologize for the
un-clojurrific use of ``(let)``. 

Finally, there is one imperative, asynchronous call to round out the function:
we tell ``Snap`` to load the external file, providing the string path to the
target and the handler as arguments. When the file is loaded, the handler will
be called with the fragment as the argument, and we should see our image. 

However, note that this will load the SVG image at its *absolute* dimensions,
rather than making it fill up the ``<svg>`` element. If you inspect the HTML for
``#snapNodeB`` on the host page, you'll see that it has dimensions of 300x200.
But if you inspect the external SVG file, you'll see that it is only 26x29! 

If this were an image file, the loaded image would automatically scale to fill
the dimensions of the outer element. But SVGs do *not* work that way: you get a
tiny little 26x29 image on the huge 300x200 canvas! Obviously that's not
acceptable, and we'll look at two different strategies for dealing with this.


scaling via transformation
..................................

The first way we can manage this is by applying a *transformation* to the image.
There is a standard syntax for transformations in SVG, and Mozilla has a
`transformation tutorial`_ available online. In addition, ``Snap`` has a
dedicated transformation syntax which is much like their ``path`` syntax: a
more-terse, more-magical version of the longer official syntax. 

.. _`transformation tutorial`: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations


Let's make two changes to our newly-loaded image from above. We'll throw these
changes into the handler, because obviously they can't be applied until *after*
the fragment is loaded! That makes our handler look like this:

.. code-block:: clojure

    (defn snap-raw-beta
      []
      (let [paper (js/Snap snap-beta)
            handler (fn [frag]
                      (let [group (.select frag "g")
                            _ (.append paper group)
                            _ (.attr group #js {:fill "skyblue"
                                                :transform "T50,50s2,2"})
                            _ (.drag group)]))]
        (.load js/Snap "images/gears3.svg" handler)))

All of the actul takes place in the ``(.attr)`` call. We change the fill of the
``group`` element, rather than changing the ``frag`` directly. We also apply our
``:transform`` right there in the same call to ``(.attr)``. Here we see the
special ``Snap`` syntax: ``T50,50`` means *translate the image to X=50, y=50*,
and ``s2,2`` means  *scale the image to 200% horizontally and 200% vertically*.
Scaling is always applied from the center, so if you scale without translating,
you end up cropping the top and left of the image! 

Finally, we added a call to ``(.drag)`` at the end of the handler just to show
how easy ``Snap`` makes it to make SVG elements draggable. This is exactly the
sort of thing we couldn't easily do if we had used the ``<img src=foo``
technique described earlier. 


scaling via viewboxes
..........................

The transformation method works, but it is a bit fugly IMHO. It doesn't actually
let us *fill* anything up, and it feels like it's working backwards. I don't
want to have to *multiply* the original dimensions by some factor; I want to say
*do what is necessary to fill a box of width X and height Y*. Also, the need for
the translation in addition to the scaling bugs me. Both scaling and
translation are *very* cool and they will obviously have *many* applications in
programming UIs and games, but they seem like overkill for loading a simple
image for use as an icon! 


viewboxes
,,,,,,,,,,,,,,,,

Fortunately, there is another way, and that is to use a nested ``<svg>``
element. Because SVG is an HTML dialect, it fully supports nesting of elements
within elements. We're going to use that fact, along with the ``viewbox``
attribute, to let our loaded image fill up a rect of our desired dimensions. 

When you define an ``<svg>`` element, you can provide it with a width and height
just like any other absolutely-positioned element, such as an image. This
defines the width and height of the drawing area as it relates to the rest of
the page. 

You can *also* specify a ``viewbox`` attribute on any ``<svg>`` element. This
defines a *virtual coordinate system*. You provide four integers to this
attribute: a ``min-x``, a ``min-y``, a ``width``, and a ``height``. Those four
numbers determine the dimensions of the virtual coordinate system. 

You can think of the SVG *width* and *height* as being **absolute** values,
whereas the ``viewbox`` coordinates define **relative** values. So it's your
choice as to how you categorize these things: as real values vs virtual values,
or as absolute values versus relative values, or as something else that floats
your boat. The outer SVG values are always (*real* or *absolute*), and the
viewbox values are (*virtual* or *relative*).

Let's say the outer SVG had a width of 150 and a height of 150, but it also had
``viewbox=0,0,50,50`` as an attribute, i.e.:

.. code-block:: html

   <svg id="foo" width="150" height="150" viewbox="0,0,50,50"></svg>

What this means is that whenever you draw on the ``#foo`` SVG, you are
effectively drawing on a canvas that is only 50X50, not 100x100! You have 50
visible pixels in each direction to draw on, and whatever you draw will be
scaled by 300% to fit into the actual ``<svg>`` element as it appears on the
page. In effect, this SVG will *magnify* anything drawn inside it. 

In effect, *when the viewbox is smaller than the SVG, everything you draw in the
SVG will be magnified*. And similarly, *when the viewbox is larger than the SVG,
everything you draw in the SVG will be minified*. In other words, we end up with
an *automatic* transformation of the content of the SVG whenever the viewbox and
SVG do not match.

Consider another example. In this case the SVG is still 150 x 150, but the
viewbox is much much larger, and also offset:

.. code-block:: html

   <svg id="spam" width="150" height="150" viewbox="100,100,300,300"></svg> 

In this case, everything drawn in the ``#spam`` SVG element will be smaller than
you'd think at first, and anything drawn before the starting X and Y values (100
each) will just be cut off entirely. So this SVG will *minify* and *crop*
anything drawn inside it. 

So in essence, you can use the ``viewbox`` attribute as a second, parallel
method for cropping and scaling your SVG images. You can end up with the exact
same effects that we saw with the ``transform`` attribute in the earlier
example, but you can define the behavior at the level of the SVG container,
rather than applying it to individual elements inside the SVG. Obviously there
will be some times where you prefer one method, and other times where you prefer
the other. 

In addition, the SVG can use a `preserveAspectRatio`_ attribute to define how to
deal with content that is too large or too small for the viewbox. The Mozilla
docs linked above are well worth reading, as is `this blog post`_ on the
subject. 

.. _`preserveAspectRatio`: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio

.. _`this blog post`: http://www.justinmccandless.com/blog/Making+Sense+of+SVG+viewBox%27s+Madness 


a viewbox example
,,,,,,,,,,,,,,,,,,,,,

So that's enough theory; let's see this solution in action. We create the first
``<svg>`` element just as we did before, by targetting a pre-existing node on
the page. But then we created a *nested* SVG element via the ``.svg()`` method
of the main ``<svg>`` element. Now we have *two* elements, one under the
``paper`` reference and the other under the ``nested`` reference. In the HTML
code, both of them will be full-fledged ``<svg>`` elements.

.. code-block:: clojure

    (defn snap-raw-gamma
      []
      (let [paper (js/Snap snap-gamma)
            nested (.svg paper 0 0 80 80 0 0 200 200)
            handler (fn [frag]
                      (let [group (.select frag "g")]
                        (.append nested group)))]
        (.load js/Snap "images/bear18.svg" handler)))  

Note that the ``paper`` SVG wasn't created with any kind of ``viewbox``
attribute. Looking over the ``snap`` docs, there doesn't seem to be any way to
do that. Of course, we could always put that in the markup directly, since we're
targeting a pre-existing node on the host page. 

Also note that the call to ``(.svg paper...)`` takes eight (8!) parameters. The
first four are the (absolute | real) dimensions of the SVG relative to its
parent. The next four all all ``viewbox`` values (relative | virtual) for the
nested SVG. In both cases, the four numbers represent the origin X, origin Y,
width and height. 

So after we've created ``nested``, we have two ``<svg>`` elements, one inside
the other. When we are *outside looking in* (i.e. as the viewer of the page),
the nested SVG will appear to be 80x80. But anything *inside the SVG looking out*
(i.e. anything being drawn inside the SVG) thinks the nested SVG is 200x200. 
Thus, to the outside viewer, stuff drawn inside the nested SVG appears minified
compared to the original source file. 

Then, just as before, we create our handler, and load the external file. The
handler won't be executed until the load is finished, at which point ``frag``
will contain the fragment of SVG markup loaded from the file. Having inspected
the file, we see that there is one and only one ``<g>`` element, which we first
``.select`` and then ``.append`` to the ``nested`` SVG. When you load the
altered page, we now see an image of a teddy bear that is precisely 80 x 80
across on our page.

So the ``viewbox`` dimensions of 200x200 are an implementation detail
that the user does not see directly. How did we know to use those? The answer is
that we had to inspect the file and see that this teddy bear picture was defined
*in the source file* on an SVG canvas that is 200x200 across. If you inspect the
earlier image ``gears3.svg``, you can see that file has a source size of 26x29.

So there's really no way around the fact that we need to inspect our source
files and see how big the original image was. It would be nice if there was some
simple attribute that we could use that just said "fill this SVG element with
another SVG element, and make the inner one stretch or shrink to fit". But alas,
the only way to do that is to use the ``<img src=...`` method described above.

So why not just use that ``<img src=...`` method all the time then?
Automatically size-to-fit is pretty awesome. The answer, as already mentioned
above, is that using ``<img src=...`` prevents us from ever doing any
more-complicated effects which are based on the individual sub-components of the
SVG. If you want to do complicated programming effects, you must inspect your
source files, because you must know what dimensions the original image file
*thinks* it should have before you can decide how to transmogrify it to your
liking. 

Let's see some of those effects in action. We will modify ``snap-raw-gamma`` so
that it 

#. Is draggable. 
#. Has a hover effect which changes different *pieces* of the image differently.


dragging with a nested svg
,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

``Snap`` provides a handy-dandy ``(.drag)`` method which we already used above.
But sadly, it only works on individual elements within an SVG, and not on
``<svg>`` elements themselves, *even if the SVG is nested in another SVG, as
ours is*. So there's no simple one-liner to make an SVG element draggable, the
way there is for a plain old element. Fortunately, there is an easy workaround.
We will create a background rect and then create a ``<group>`` element
containing the rect and the nested SVG. Then we can call ``(.drag)`` on the new
``<group>``, and everything works as expected.

.. code-block:: clojure

    (defn snap-raw-gamma
      []
      (let [paper (js/Snap snap-gamma)
            bg (.rect paper 0 0 80 80)
            _ (.attr bg #js {:fill "rgba(0,0,0,0)"})
            nested (.svg paper 0 0 80 80 0 0 200 200)
            wrapper (.group paper bg nested)
            handler (fn [frag]
                      (let [group (.select frag "g")]
                        (.append nested group)
                        (.drag wrapper)))]
        (.load js/Snap "images/bear18.svg" handler)))

Note that we add the new ``bg`` rect to the overall SVG, with no stroke and a
transparent fill. That's an important point; it would suck if we had to (say)
give it a white background, because transparency is awesome. Fortunately, a
transparent background still works great for event handling. 

Then we define our ``<group>`` under the name ``wrapper``. The ``(.group)``
method is always available on any SVG element. You can either create and then
repeatedly call ``(.append)`` on it, or supply all of the members of the group
up front, as we have done here.

Finally, we make the entire ``wrapper`` draggable by a call to ``(.drag)``. As
mentioned earlier, nested SVGs can be dragged just like anything else: the only
stumbling block is that they themselves don't have a ``(.drag)`` method. So this
is analgous to creating an outer div just for some CSS trick, which we've done
many times before.

Technically we don't even need the ``bg`` rectangle; we could just create the
``wrapper`` and assign only one single element to it! But when you do that,
you'll see that the only *mouse-sensitive* parts of the teddy bear are the
individual lines, which makes it *very* fiddly to try to drag around. So the
purpose of the ``bg`` rectangle is just to provide a drag handle: when the
``bg`` rectangle is included in the group, the entire wrapper detects
mouseovers, clicks, and drags wherever there is either rectangle or teddy bear.
This provides a much smoother user experience than hunting and pecking for
individual lines within the teddy bear.


svgs and subcomponents
,,,,,,,,,,,,,,,,,,,,,,,,,,

Finally, let's show what we mean when we say that this kind of loading allows us
to "fiddle with the subcomponents of the SVG". We will add a ``.hover`` handler to
the ``bg`` rect; this is another one of the ``Snap`` sugar methods; it takes a
target element and two functions, one to run when hovering turns on and the
other to run when hovering turns off. 

.. code-block:: clojure

    ; final form for snap-raw-gamma
    (defn snap-raw-gamma
      []
      (let [paper (js/Snap snap-gamma)
            bg (.rect paper 0 0 80 80)
            _ (.attr bg #js {:fill "rgba(0,0,0,0)"})
            nested (.svg paper 0 0 80 80 0 0 200 200)
            wrapper (.group paper bg nested)
            handler (fn [frag]
                      (let [group (.select frag "g")
                            paths (.selectAll group "path")]
                        (.append nested group)
                        (.attr paths #js {:fill "magenta"})
                        (.hover bg (fn []
                                     (.animate paths #js {:fill "lime"} 500)
                                     (.animate bg #js {:fill "#CCCCCC"} 500))
                                (fn []
                                  (.animate paths #js {:fill "magenta"} 500)
                                  (.animate bg #js {:fill "#FFFFFF"} 500)))
                        (.drag wrapper)))]
        (.load js/Snap "images/bear18.svg" handler)))

First, note that we grab and save a reference to the ``paths`` within the loaded
fragment. This is what we mean when we keep harping on about selecting
individual sub-components: these are the individual line segments that make up
the teddy bear. Had we loaded the SVG via ``<img src=...`` we would not be able
to get a reference to those lines! Since we do have a reference to them, we can
use the ``(.attr)`` method to change them all from their default black to a
much-more-attractive magenta color. This is done via the **fill** attribute
rather than the **stroke** attribute because this particular SVG creates a
hand-drawn look by actually creating thick and skinny ovals that have fills,
rather than plain lines per se. 

Other than that, the only new code here is the call to ``(.hover)``. The first
handler (called when hovering *starts*) turns all of the lines to lime green and
also changes the ``bg`` rect to have a gray background. Pretty! The second
handler (called when hovering ends) returns us to our original values. 


Summary
===========

That wraps up our whirlwind introduction to SVG graphics. We didn't actually
show any ``Om`` code, because this particular document is long enough as it is.
It seems clear that we would want to create some kind of wrapper namespace for
``Snap`` to make using it from inside ClojureScript feel less verbose. 

