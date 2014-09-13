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

