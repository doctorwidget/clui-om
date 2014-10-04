*****************
Kioo
*****************

`Kioo`_ is a ClojureScript library that fills a very specific niche: it provides
an alternative approach for specifying the HTML output of ``React`` components.
By default, ``React`` uses a `Hiccup`_ -style system where components are defined
inline as part of the JavaScript. By default, ``Om`` continues this approach, albeit
in a format which is more idiomatic to ClojureScript. ``Kioo`` plugs right into
``Om``, but lets you use `Enlive`_ or `Enfocus`_ -style templating, which means
you keep pure HTML documents in one location, and use Clojure to dynamically
insert data into them. 



.. _`Kioo`: https://github.com/ckirkendall/kioo

.. _`Hiccup`: https://github.com/weavejester/hiccup

.. _`Enlive`: https://github.com/cgrand/enlive

.. _`Enfocus`:  https://github.com/ckirkendall/enfocus



The Kioo Context
=========================

A brief digression on the evolutionary history of this style of templating is in
order. ``Enlive`` is the originator of this entire philosophy, and all of the
later libraries borrow their patterns and syntax from it. ``Enfocus`` came
later, as a ClojureScript templating library, for use on the client. ``Kioo``
came last; where ``Enfocus`` is intended for general-purpose ClojureScript use,
``Kioo`` is intended explicitly for use with ``React``. Thus, where ``Enfocus``
functions return raw HTML, the equivalent ``Kioo`` functions return instantiated
JavaScript *React* components. 

So you can think of ``Kioo`` as just another homage to ``Enlive``, which is
ready to plug and play nicely with ``Om`` right out of the box.


The Kioo Niche
=====================

Kioo replaces only the *templating* portion of your ``Om`` code. It's actually
designed to work with any of the ``React`` to ClojureScript wrappers (such as
``Reagent`` and ``Quiescent``. Basically, wherever a pure ``Om`` call actually
*instantiates a React component*, you could potentially replace those calls
to ``om.dom`` functions with calls to ``kioo.om`` functions instead. That
code will look more like ``Enlive`` style templating than the default ``Hiccup``
style does.


Kioo Strengths
==================

Any non-trivial blob of
HTML, rapidly becomes obnoxious to deal with and maintain inside pure
``Clojure*`` code, but ``Kioo`` bypasses that problem completely. Better yet,
your source HTML can be kept in complete documents *which are easily previewed
in a browser*, and you can use any combination of ``defsnippet`` and
``deftemplate`` to take all or part of it when you want it. 

These strengths are, in general, the reason I approve of the entire ``Enlive``
family, and prefer to use them when I can. 


Kioo Weaknesses
===================

Because ``Kioo`` is a *general-purpose* component solution for ``React``, not
``Om``, it does not take advantage of some powerful ``Om`` features. For
example, it's not clear how you would integrate the ``React`` lifecycle
functions into components defined in ``Kioo``, but this is one of the easiest
things to do in pure ``Om``. In addition, there is no obvious way to access the
``owner`` property, or to manipulate local state. 

Because of this, it seems like ``Kioo`` is best suited for very small ``Om``
applications that emphasize read-only displays. More ambitious,
highly-interactive applications might be better off sticking with pure ``Om``. I
say this even though I have no great love for the ``Hiccup`` style of HTML
generation provided by ``om.dom``. 
