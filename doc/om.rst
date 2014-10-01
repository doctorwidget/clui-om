****************
Om
****************

`Om`_ is a ClojureScript project designed to work with ``React``.
The idea is to provide a solid foundation for building client-side UIs. The
ClojureScript community is all aflutter over this, so it's time we looked into
it.

.. _`Om`: https://github.com/swannodette/om



Why Do Clojure Folks Like React?
-----------------------------------

``React`` is not interested in being a complete MVC framework. It is instead focused
*solely* on the **V** in MVC. In other words, ``React`` is entirely and only about
rendering *views*. This makes it fundamentally different from frameworks like
``Angular`` or ``Ember``, both of which provide classes and abstractions
intended to cover all three stages of MVC (*models*, *views* and *controllers*).

In contrast, ``React`` is only concerned with the UI proper; both rendering it
in the first place, and then managing user input afterwards. You give your React
application one **Single Source of Truth** about the entire application state,
and ``React`` then draws the entire UI based on that ``SSOT``. When the user
interacts with the screen, ``React`` provides hooks for you to detect it, but it's
entirely up to you to decide what to do with those interaction events! This is
absolutely **crucial** to understanding what ``React`` is: *unlike most recent
frameworks, React is completely uninterested in providing two-way data binding*.

At first glance, this seems like a rather quixotic choice; it definitely
sets ``React`` apart as *very* different from the other current alternatives. If
I was only going to be writing vanilla JavaScript, there is no doubt in my mind
that I would prefer a much heavier-weight framework that had strong opinions
about all three letters in MVC (i.e. the aforementioned ``Angular`` or ``Ember``).

But (and this is a very big and very important *but*) this makes ``React`` the
*perfect* library for use with ``ClojureScript`` UI development! Clojure (and
ClojureScript) is *already* strongly committed to a "roll your own" philosophy
of building up applications from smaller pieces rather than relying on an
overarching framework. Having one specialized library among many others is
already par for the course in Clojure development. 

But more importantly, Clojure is already **strongly** committed to using
*immutable data* as the foundation for everything it does. Thus, the ``React`` 
philosophy of looking for application state in one ``SSOT`` is an absolutely
*perfect* match for the foundational philosophy of Clojure. If you didn't know
better, you might think that ``React`` had been designed explicitly for use with
Clojure!

Not only does the ``SSOT`` principle mesh perfectly with Clojure, it also
turns out that Clojure fans don't want or need any special framework for their
**M** odels or **C** ontrollers either. Idiomatic Clojure already eschews the use
of special classes and mini-languages for dealing with model data. Instead,
*naked Clojure code is seen as the best possible environment for manipulating
all of your data*. Similarly, there's no need for any special Controller-related
domain-specific language, because again, pure Clojure code is already the best
solution.

So this is why ``React`` is such a perfect fit for ClojureScript: first, it
fills the one gap in the core language -- a concise and consistent way to render
HTML on screen and listen for events -- in a way that shines a very flattering
light on Clojures' philosophy of using immutable data structures. Second, it
lets you use pure unadulterated Clojure for both models and controllers, where
any kind of framework would only get in your way.


React And Om: Better Together
--------------------------------

So where does ``Om`` fit into all of this? ``Om`` does not really need to
**add** anything to ``React``, because as just discussed, ``React`` is already
an almost-perfect fit for a ClojureScript project. Instead, ``Om`` just acts as
a wrapper around ``React``, allowing you to use the underlying framework via
idiomatic ClojureScript code. More importantly, it smooths over the use of an
immutable state object in React, which has the idea of a **SSOT**, but is not
particularly oriented towards *immutable* data by itself. With ``Om``, you get
both at once.


Official Documentation
------------------------

The `Om documentation`_ covers the core API with a handful of useful examples.
It's not nearly as extensive as the original `React documentation`_ is, but
that's simply because ``Om`` provides a facade to allow you to use idiomatic
ClojureScript code to drive ``React``. You should consider it an *adjunct* set
of documentation; you will still want to read the original ``React``
documentation and be ready to refer to it when debugging.

.. _`Om documentation`:  https://github.com/swannodette/om/wiki/Documentation

.. _`React documentation`: http://facebook.github.io/react/docs/top-level-api.html

Anything you can write in native ``React`` can also be written in ``Om``. Where
there are differences, they are invariably in favor of ``Om``. The same
application in ``Om`` is generally terser, clearer, and *faster-running* than
a pure ``React`` version would be. 


Official Tutorials
------------------------

There are two official tutorials that are part of the *Om* github repository:
one `basic`_ and one `intermediate`_. I have worked through them without trying
to squeeze them into this project: you can find them in their pure
unadulaterated glory at ``~code/clj/demo/om-tut/`` and
``~code/clj/demo/om-async/``. 

.. _`basic`: https://github.com/swannodette/om/wiki/Basic-Tutorial

.. _`intermediate`:  https://github.com/swannodette/om/wiki/Intermediate-Tutorial

They are both very short and worth reading in their own right. But after you've
looked through them, the obvious next step is to look at the exact same ``React``
tutorial from the previous document, but re-done using ``Om``. That's the next
document in this series.

