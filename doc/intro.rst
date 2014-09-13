****************
Introduction
****************

The documentation for this project will be focusing primarily on issues related
to ClojureScript, Om, and client-side UIs.


Startup
==========

Note that this project was started using the standard ``compojure`` template,
as described on the main `compojure project page`_.

.. _`compojure project page`: https://github.com/weavejester/compojure/wiki/Getting-Started

.. code-block:: bash

    $: lein new compojure <your project name>


Documentation
===================

This documentation is all done via `Sphinx`_. In the past I've toyed with the
`lein-sphinx`_ plugin, but I've decided it's more straightforward to just use the
unadorned Python-based sphinx commands. This means I end up using a single
dedicated terminal window with an activated Python virtual environment for
occasionally running ``make html``. That doesn't bother me, because the task is
both distinct enough and important enough to merit its own little window off to
the side.


.. _`Sphinx`: http://sphinx-doc.org/

.. _`lein-sphinx`: https://github.com/SnootyMonkey/lein-sphinx

I use `virtualenvwrapper`_ to manage my virtual environments.  This project
is set up using my ``py278`` environment, which has access to a Sphinx
installation. I created a ``doc`` folder at the top tier of the project, moved
into it, and ran ``sphinx-quickstart``, which creates all of the various
folders, makefiles, and configuration files for you. 

.. _`virtualenvwrapper`: http://virtualenvwrapper.readthedocs.org/en/latest/

The only special modifications I use from the default setup are to add one
option to the main ``Makefile``:

.. code-block:: bash

    # inside Makefile
    SPHINXOPTS = -a 

Which makes Sphinx rebuild *all* of the documentation every time, even for
unchanged files. That adds a tiny time delay, but means the various crosslinks
never get out of whack, which is, IMHO, a very worthwhile trade. 

I also like the ``agogo`` theme, so I add this to ``conf.py``:

.. code-block:: python

   # inside conf.py
   html_theme = "agogo"

Finally, to build the docs, you simply run ``make html`` from inside the
``doc/`` folder. It should go without saying that you must have an activated
Python virtual environment which has access to ``Sphinx``!

.. code-block:: bash

    (py238)$: make html
    #... output elided

    Build finished. The HTML pages are in _build/html.



Git
==========

The project uses Git, of course. But currently there is no remote branch on
Github. 



Ring
===========

The project uses a basic ``Ring`` server. You can inspect the Ring-related
plugins and dependencies in ``project.clj``. The main server class is
``clui-om.handler/app``, and you can inspect the source code for it in
``src/clj/clui_om/handler.clj``.

Server-side page layout is handled via `Enlive`_. You can inspect those files
inside ``src/clj/clui_om/views/core.clj``. There isn't much server-side logic
going on at all: the emphasis of this project is on client-side stuff.


.. _`Enlive`: https://github.com/cgrand/enlive



ClojureScript
================

There is a very simple example of *vanilla* ClojureScript up and running at
the URL ``/vanilla``. This is just a brief reminder and demonstration of doing
extremely remedial operations in ClojureScript. See the source code for this
page at ``src/cljs/clui_om/vanilla.cljs``. 

Note that this namespace loads ``clojure.browser.repl`` and subsequently calls
``(connect)``, which means it is a valid target for a ClojureScript browser
REPL. Setting up such a ClojureScript browser REPL is a surprisingly involved
process compared to a regular Clojure REPL. The two main hurdles are 

#. the need for an actual server-hosted HTML page
#. the need for that page to make a remote connection to the ClojureScript 
   bREPL terminal window. 

Fortunately, this project is already set up to handle both of those things.


Using the bREPL
-------------------

To use the bREPL, you first start the Ring server in its own terminal window
somewhere, via the usual ``lein ring server``. Then you visit the vanilla page
mentioned above in a browser. Note that ``vanilla.cljs`` doesn't just load
``clojure.browser.repl``: it also makes a call to ``(connect)`` 
inside the main ``(initialize)`` function for the page. 

Finally, you launch a regular Clojure REPL:

.. code-block:: bash

    $: lein repl
    ; nREPL server started on port ...
    ; ...
    ; user=>

And then from inside the Clojure REPL, you launch your ClojureScript
bREPL. 

.. code-block:: clojure

    (require '[cljs.repl :as repl])
    ;nil
 
    (require '[cljs.repl.browser :as browser])
    ; nil

    (def env (browser/repl-env)) ;; create a new environment
    ;#'cljs-seed.core/env

    (repl/repl env)
    ;To quit, type: :cljs/quit
    ;ClojureScript:cljs.user> 

    (js/alert "spam")
    ; the browser window should get a popup, yay?

Remember that you must be working in a domain where the ``lein`` dependencies
know about both Clojure and ClojureScript for this to work! Also note that this
is a fairly verbose set of four commands, which could be simplified if you used
a library like ``Austin``. 


