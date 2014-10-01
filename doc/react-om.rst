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
some significant anomalies and did not work out of the box originally. For
example, there is some obsolete syntax from very early ``Om`` releases, some
confusion over when to use ``om/update!`` versus ``om/transact!``, and some
unecessary imports (i.e. the ``secretary`` library is imported but never used).
Fortunately, it turns out that poring over the error messages and the ``Om``
source code to clean up those anomalies was a worthwhile learning experience.

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
-------------

As always in ClojureScript, we start with a namespace definition. Honestly,
access to sane namespacing and module management is one of the killer features
of ClojureScript over JavaScript. Other native JavaScript package-management
systems exist (e.g. ``require.js`` or the native system in ``Angular``) but none
of them feel anywhere near as clean and powerful as the Clojure one. Yay!


Global State
----------------------

The first thing we do is define a couple of pieces of global state. As always,
there is an ``app-state`` atom, which in this case is very simple. If you have a
big, rich UI, you will invariably end up with a bigger, more-complex
``app-state`` atom. However, there's no reason that atom ever has to be contain
anything other than a single (ever-bigger) Clojure map.

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




Helper Function Definitions
--------------------------------------

Next, we define a bunch of helper functions. These functions are by and large,
pure ClojureScript, rather than ``Om``-specific code. If this weren't a toy
tutorial, these functions would surely be better off living in their own
namespace, where they could more cleanly be tested and re-used.

One thing that's worth noting is the use of the ``cljs.core.asyc`` library,
which shows the use of Clojure async event handling. This is going to be a
useful thing to be familiar with going forward. TODO: fill in some details. 

Another thing to note is how you pull apart an HTTP response from a server.
TODO: fill in some details. 



Component Function Definitions
-----------------------------------

After that, we have the actual ``Om`` component definitions. TODO: fill in some
details. 



Instantiation
-------------------

Finally, we have to actually *instantiate* at least one component for this to be
a true ``React`` or ``Om`` application. We do this in our ``(main)``
function, although you will often see tutorials do this inside a naked
imperative call at the end of the file. That approach (a global call) seems very
short-sighted to me: it works in a toy demo, but would never scale for any
larger application. 

Instead, I would want to separate out my component definition functions into
their own dedicated namespaces, which would contain no imperative code
whatsoever. Those functions can then be shared and tested in splendid isolation.
Then I prefer to have one ``(main)`` function for each page, which Does
The Right Thing *for that page and that page alone*.
