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

The only real weakness I can see to using ``Kioo`` is that it adds an additional
layer of dependency, and potentially makes it much harder to debug problems. The
official documentation recommends `this blog post`_ for tips and tricks when it
comes to debugging. I have mixed feelings about the post: it's good to see that
there's someone thinking about these issues, but the whole post only seems to
confirm that debugging ``Kioo`` problems can be a significant hassle. 

.. _`this blog post`: http://theholyjava.wordpress.com/2014/04/08/kioo-how-to-troubleshoot-template-processing/

.. note::
  
    Also note that Kioo does not support *ordered* transformations. All snippets
    and templates are created at macro-time, and the order of the
    transformations at runtime cannot be guaranteed. 


Code Examples
==================

The Simplest Format
---------------------

The simplest way to use ``ioo`` is to wrap ``defsnippet`` or ``deftemplate``
calls within calls to ``om/component``. This results in simple components that
only implement the ``render`` phase, leaving all other behaviors at their
defaults:

.. code-block::  clojure

      (def app-state (atom {:stuff "forty-two" :thing "parrot"}))
 
      (def THING-ROOT (.getElementById js/document "my-thing-div"))

      ; snippets like this do not get placed directly
      (defsnippet my-snippet "public/html/frags/my-frag.tpl.html" 
         [_]  ; selector
         [thing stuff]
         ; transformations omitted)

      ; instead they are wrapped in a call to om/component
      (defn my-wrapped-kioo
         [{:keys [thing stuff]}]
         (om/component (my-snippet thing stuff)))

      ; and then, as always in Om, there must be a call to om/root
      (om/root my-wrapped-kioo app-state {:target THING-ROOT}))

   

From everywhere outside of ``(my-wrapped-kioo)``, this is a 100% standard Om
component. Inside of that block, we can see the nitty-gritty details of
``(defsnippet)``, but at the higher levels, ``Om`` is completely agnostic about
the rendering details.


A More Complex Format
-------------------------

If that were the only way to use ``Kioo``, then you wouldn't be able to use the
full power of ``Om``, and the library would be of limited use at best. But in
fact, you can freely use your ``(defsnippet)`` and ``(deftemplate)`` code inside
the lifecycle protocol sections of a larger ``Om`` component. 

.. code-block:: clojure

    (defn my-app [app owner]
          (reify
              om/IWillMount
              (will-mount [_]
                 (let [blah blerg]
                    nil))

              om/IRender
              (render [_]
                (my-snippet (:stuff app) (:thing app)))))

Note that when a snippet is placed inside a ``reify`` block like this, you don't
need to wrap it with ``om/component``: simply placing it as the main body of the
``render`` implementation does the trick. 

kioo/component
-------------------

Finally, ``kioo/component`` is a macro that lets you skip using ``defsnippet`` and
``deftemplate`` entirely, should you prefer. As always, this macro must be
imported explicitly via ``:require-macros``. See the official `Kioo MVC
tutorial`_ for extensive examples using this macro. 

.. _`Kioo MVC tutorial`: https://github.com/ckirkendall/todomvc/blob/gh-pages/labs/architecture-examples/kioo/src/todomvc/app.cljs

  


