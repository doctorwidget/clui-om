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
    <link rel="stylesheet" type="text/css" href="css/bootstrap-theme.css">


Usage
---------

Assuming you're on a page which is already set up to use ``Om``, you just import
the ``om-bootstrap`` namespace and can instantiate the new components at will,
either as top-tier UI widgets or within your own custom components. 

.. code-block:: clojure

    ;; inside the top level namespace
    (:require [om-bootstrap.button :as b])

    ;; inside of a render function in a custom component
    (b/toolbar {}
           (b/button {} "Default")
           (b/button {:bs-style "primary"} "Primary")
           (b/button {:bs-style "success"} "Success")
           (b/button {:bs-style "info"} "Info")
           (b/button {:bs-style "warning"} "Warning")
           (b/button {:bs-style "danger"} "Danger")
           (b/button {:bs-style "link"} "Link"))






