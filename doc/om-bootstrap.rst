*******************
Om-Bootstrap
*******************

`om-bootstrap`_ is a package that builds on both `om`_ and `bootstrap`_ to
supply a wide variety of UI widgets. The underlying engine is ``om`` and
``ClojureScript``, but your HTML markup and the finished UI are intended to
mirror components found in the Twitter ``bootstrap`` project.


.. _`om-bootstrap`:  https://github.com/racehub/om-bootstrap

.. _`om`: https://github.com/swannodette/om

.. _`bootstrap`: http://getbootstrap.com/components/


Configuration
-----------------------

Start by adding the dependency to ``project.clj``:

.. code-block:: clojure

   ;; inside project.clj :dependencies
   [racehub/om-bootstrap "0.3.0"]

And of course the host HTML page will need a reference to the core `Bootstrap CSS
file`_. This project includes a copy inside ``resources/public/css``, but you
could also load it direct from a CDN.

.. _`Bootstrap CSS file`: http://getbootstrap.com/getting-started/

.. code-block:: html

    <!-- inside the head -->
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="/css/bootstrap-theme.css">


Usage
---------

Assuming you're on a page which is already set up to use ``Om``, you just import
the ``om-bootstrap`` namespace and can instantiate the new components at will,
either as top-tier UI widgets or within your own custom components. 

.. code-block:: clojure

    ;; inside the top level namespace
    (:require [om-bootstrap.button :as b])

    (defn top-level-widget [app owner opts]
      (let [echo #(report-activity % app)] 
        (reify
          om/IRender
            (render [_]
              (odom/div #js {:className "outerbox"}
                (odom/p #js {:className "alert alert-info"} (:most-recent-activity app))
                (odom/p #js {:classname "alert alert-success" :onClick echo} "Click me!")
                (b/toolbar {}
                  (b/button {:on-click echo} "Default")
                  (b/button {:bs-style "primary" :on-click echo} "Primary")
                  (b/button {:bs-style "success" :on-click echo} "Success")
                  (b/button {:bs-style "info" :on-click echo} "Info")
                  (b/button {:bs-style "warning" :on-click echo} "Warning")
                  (b/button {:bs-style "danger" :on-click echo} "Danger")
                  (b/button {:bs-style "link" :on-click echo} "Link")))))))


There are a few things worth nothing about this example. 

Prismatic Helper Libraries
-----------------------------

The ``om-bootstrap`` library goes all in with two of  helper libraries
from Prismatic: `om-tools`_ and `schema`_. 

.. _`om-tools`: https://github.com/Prismatic/om-tools

.. _`schema`: https://github.com/Prismatic/schema


om-tools
............

The ``om-tools.dom`` namespace provides some useful syntactic sugar for ``Om`` code:

#. No need for JavaScript literals as the second argument to a new element (i.e
   as the React ``props`` object). Not only does this shave off 4 chars from
   every line, it means you are free to include nested data structures and logic.

#. Automatic conversion of attribute names from lisp-case (``:on-click`` is
   idiomatic Clojure) to camelCase (``:onClick`` is idiomatic React/JavaScript). 
   
#. Child nodes can be sequences or collections without wrapping them with an explicit call to
   ``concat`` or ``apply``, which you must do in vanilla ``Om``. 

There are a variety of other useful tools and other namespaces, but those three
things stick out to me as particularly convenient and worth using in your own
code. All three of them make your code look *more* like regular Clojure code,
removing some of the idiosyncrasies of ``Om``. In contrast, the other tools
(like the whole ``fnk`` namespace) make your code look significantly *less* like
either vanilla ``Om`` or idiomatic Clojure, so I'm less likely to want to get
dependent on them.


schema
.............

``Schema`` is a library that provides a lightweight typing system. It does
**not** try to treat static types as first-class language citizens, which is
what the ``core.typed`` is all about. Instead, it aims to give the user access
to most of the benefits you might get from static typing, while still remaining
an optional library with a very light footprint. In other words, ``schema`` is 
explicitly going after *only the low-hanging fruit* of static typing.

You won't see any evidence of ``schema`` when you *use* ``om-bootstrap``: it is
only an issue if you delve into the source code. Which, if you think about it,
is a sign that the ``schema`` library is doing just what it set out to do!


