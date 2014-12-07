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







