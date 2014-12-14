*************************
The ClojureScript REPL
*************************

ClojureScript, like Clojure, has a REPL to allow interactive development.
However, unlike the Clojure REPL, the ClojureScript REPL is something of a PITA
to get up and running. 


A Variety of REPLS
=======================

The crux of the issue is that ClojureScript code is first compiled into
JavaScript code before it is executed. Therefore, the **ultimate** execution
environment for ClojureScript code is always some flavor of JavaScript
engine. That could be a headless environment like ``Rhino`` or ``PhantomJS``, or it
could be an actual browser window combined with some kind of Java socket running
in a third (!) terminal window.

It would be great if the ``lein-cljsbuild`` plugin could handle these details
for you. In fact, you can *try* to run two different kinds of ClojureScript
REPLs from ``lein-cljsbuild``, but as of summer 2014, both of them are broken,
and the official word from the ClojureScript devs is that you shouldn't even be
trying to run your ClojureScript REPLs via ``lein-cljsbuild``. Ideally, in the
future, the community will settle on one streamlined solution and
``lein-cljsbuild`` will give you easy access to it. But for now, you can't avoid
a bit of a hassle.

However, once you finally get one up and
running, a REPL is invaluable. Thus, we will press on until we have one! One
possibility is to use ``austin``, a very fine package from the venerable and
prolific Chas Emerick. I may migrate to that solution in the future, but for now
I want to aggressively keep my number of dependencies low, and I also want to
get familiar with the core tools. So let's cover the use of a REPL in a
completely vanilla ClojureScript environment. 



The Core REPL
===========================

You can find the latest and greatest documentation for using the core
REPL here at `this URL`_.

.. _`this URL`: https://github.com/clojure/clojurescript/wiki/The-REPL-and-Evaluation-Environments


A Headless REPL
-----------------

As always, your ClojureScript REPL will run by piggybacking on top of a plain
old Clojure REPL. This is true for all scenarios, with or without Austin!

.. code-block:: clojure

    ;; from inside a regular Clojure REPL with the proper paths set
    ;; (i.e. a lein-based REPL that has access to ClojureScript)

    (require '[cljs.repl :as repl])
    ; nil
    
    (require '[cljs.repl.rhino :as rhino]) 
    ;nil

    (def env (rhino/repl-env)) ;; create a new environment
    ;#'cljs-seed.core/env

    (repl/repl env) ;; and launch it!
    ;To quit, type: :cljs/quit
    ;ClojureScript:cljs.user>

At this point, you have a working headless environment. You may test
vanilla ClojureScript code freely. You can also load external files by defining
a working dummy namespace for testing.

Let's say you have the following code inside the file
``clui_om.misc.messages.cljs``:

.. code-block:: clojure

    (ns clui-om.misc.messages)

    (def sanity-msg "You are not crazy. You are inside clui-om.misc.messages")   

    (def insanity-msg (apply str (reverse sanity-msg)))


Then you would load that like so:

.. code-block:: clojure

    (ns spam (:require [clui-om.misc.messages :as m])) 
    ;nil

    m/sanity-msg
    ;"You are not crazy. You are inside clui-om.misc.messages"

    m/insanity-msg
    ;"segassem.csim.mo-iulc edisni era uoY .yzarc ton era uoY"
    
Thus demonstrating that you can both run vanilla ClojureScript and also load any
and all source files as needed. However, this is still a *headless* environment,
meaning you can't do anything at all with a DOM yet. 


A Browser-Backed REPL
-----------------------------

The real gold standard for interactivity is not interacting with headless
``rhino`` server -- although that is certainly much much better than no REPL at
all! No, what we're *really* after is live intraction with a complete HTML5 GUI.
That means we need an HTML page running inside a browser that has ClojureScript
code which is actively listening for a connection from another ClojureScript
entity. 


The HTML Page
.................................

In our example project, we have a page set up at ``{localhost}/vanilla`` just for
this purpose. The details of the ring server are not covered here. As is our
usual pattern, the page loads the one main compiled JavaScript file for the
project, and then calls the ``main()`` method a dedicated page 
namespace. That call happens in the final ``<script>`` block of the page:

.. code-block:: html

    <script>clui_om.vanilla.main()</script>

That's all the host page needs to do. From here, the responsibility for making
the actual connection has been handed off to our ClojureScript source.


The ClojureScript File
.................................

As usual, we have a dedicated namespace just for this page, this time defined
in the file at ``clui_om.vanilla.cljs``. The namespace declaration
itself is as follows:

.. code-block:: clojure

    (ns clui-om.vanilla 
        (:require [clojure.browser.repl :as repl]))

Then inside the ``(main)`` function for the namespace, we explicitly try to
connect on the (standard) port 9000. 

.. code-block:: clojure

    ;; inside the (main) function
    (repl/connect "http://localhost:9000/repl")    

One of the things that ``austin`` is more sophisticated about is picking random
ports for both the client and the server, so that you can have multiple separate
windows, all live and connected all at once. Without ``austin``, we're going to
be limited to one live page at a time, but that should be fine for our purposes.

Also note that you could of course make that the call to ``(repl/connect)`` as a
top-level call, rather than nesting it inside the ``(main)`` function. If
you did that, then *every single page* that loads our main source file would try
to make itself accessible to REPL connections, rather than just this one page. It
may very well be that that's what you want... but if so, you should do it on
purpose, and not merely by accident! 

Finally, note that this doesn't work with ``:optimizations :advanced``. You
must limit yourself to ``:simple`` or ``:whitespace`` optimizations if you
want to use a ClojureScript REPL.


Back To The Clojure REPL
----------------------------

The next step is to go back to a pure Clojure REPL and launch the ClojureScript
REPL from inside it. This involves a set of commands which are similar (but not
identical!) to the ones we used to start the earlier ``rhino`` REPL:

.. code-block:: clojure

    ;; from inside a standard Clojure REPL
    (require '[cljs.repl :as repl])
    ;nil
 
    (require '[cljs.repl.browser :as browser])
    ; nil

    (def env (browser/repl-env)) ;; create a new environment
    ;#'cljs-seed.core/env

    (repl/repl env)
    ;To quit, type: :cljs/quit
    ;ClojureScript:cljs.user> 


This starts the ClojureScript REPL, but you are still not quite ready to go. The
final step is to make sure the host page described above is live and running.
Note that the order is important; you should start the Clojure REPL *before* you
run the host page. 


Run The Host Page
---------------------

Make sure you have your ``ring`` based server running via ``lein ring server``.
I like to do this in a completely separate terminal window that I can leave
running in the background. Then load the page that calls
``clui_om.vanilla.main()``. That page must be live and running for the REPL
to do anything. 


Return To The REPL
------------------------

Finally, you can return to the REPL window, and at long last, it should be fully
interactive. 

.. code-block:: clojure

    ;;inside the ClojureScript REPL
    (js/alert "spam")
    ;nil -- but a popup window appears in the browser!

    ; remember that this is still a blank namespace: you do not get automatic
    ; access to the page namespace! Let's create a dummy namespace to work in,
    ; into which we will include the page namespace.
    (ns spam (:require [clui-om.vanilla :as v]))
    ;ClojureScript:spam>
    
    (v/report-agent)
    ;"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.94 Safari/537.36"

    (v/my-alert "hail")
    ;nil -- but we get a JavaScript popup alert in the browser

    (v/my-alert v/host-msg) 
    ;nil -- but we get a different popup

    ; let's load a utils file from elsewhere in the project
    (ns testfoo (:require [clui-om.misc.music-theory :as m]))
    ;ClojureScript:testfoo>

    m/note-cents
    ; shows a vector of data about note names and pitches

    (m/minor? :g#)
    ; true

    (m/minor? :c)
    :false

    ; finally, let's toy with the DOM in real time
    (ns test.dom (:require [clojure.browser.dom :as dom]))
    ; ClojureScript:test.dom>

    (dom/append (dom/get-element "page-contents") (dom/element  "SPAAAAM"))
    ; #<[object HTMLDivElement]>  -- and the page changes!


The most awkward part of all of this obviously the way we have to deal with
namespacing and external source files. In the main
documentation linked above, you can find a discussion of using the
``(load-file)`` and ``(load-namespace)`` functions to get smoother access to
multiple source files in a single REPL. 


Summary
-----------

So now we've seen all of the basics: loading external files, accessing the
symbols and functions from those files, spamming ourselves with popups, and
manipulating the DOM in real time. And all of it is completely doable without any
third-party tools other than ``lein`` and ``ring``.

All of the example code above only currently works on the ``vanilla`` page,
because that's the only page that currently imports ``clojure.browser.repl`` and
invokes ``repl/connect``. If you want to access the running DOM of any other
page, you must make the dedicated page namespace for that page do the same. And
without a tool like Austin, you will only be able to conveniently connect to one
page at a time.


Part II: Austin
=============================

.. note::

   This section is unfinished, and was originally intended for use with the
   ``cljs-seed`` project. Since ``clui-om`` is currently my most-modern pass at
   using ClojureScript, it's worth finishing up this section with all of the
   code snippets updated for use within ``clui-om`` instead of ``cljs-seed``. 


The ``austin`` project, by the venerable Chas Emerick, attempts to smooth over
the current chaos. It's installed like all other ``lein`` dependencies:

.. code-block:: clojure

    ;; inside project.clj -- most of the file omitted
    :plugins [
              ; other plugins elided
              [com.cemerick/austin "0.1.5"]
              ; ditto
             ]


In addition, you must *explicitly* add your ClojureScript source files to 
the main Clojure ``:source-paths`` and ``:test-source-paths`` maps. It's not
enough to specify them only in your ``cljsbuild`` section; ``austin`` needs to
see them in the main map:

.. code-block:: clojure

     ;; again inside project.clj
     :source-paths ["src" "src/clj" "src/cljs"]
     :test-paths ["test" "test/clj" "test/cljs"]


Finally, note that ``austin`` requires you to have a copy of *PhantomJS* installed and
available on your ``PATH`` via the standard command ``phantomjs``. If you
haven't done so already, you might as well make this globally available via
``homebrew``:

.. code-block:: bash

    (venv)$: brew search phantom
    #... various versions available

    (venv)$: brew upgrade phantomjs
    #... output elided

    (venv)$: phantomjs --version
    1.9.7

And now you are good to go! 


Running The REPL
====================

The ``austin`` ClojureScript REPL runs *inside* a standard Clojure ``nREPL``.
Note that the **nREPL** (aka the *network REPL*) is a standard Clojure tool, as
opposed to being some kind of ClojureScript-specific tool. When you launch a
REPL via ``lein``, you are launching an **nREPL** instance.

.. code-block:: bash

   (venv)$ : lein repl
   #... output elided
   nREPL server started on port 64193 on host 127.0.0.1 - nrepl://127.0.0.1:64193
   REPL-y 0.3.1
   Clojure 1.6.0
   #... more output elided
   
   cljs-seed.core=> 


Don't be fooled by the reference to ``cljs-seed.core``: this is still a standard
**Clojure** REPL environment, not a ClojureScript one! 


A Headless PhantomJS REPL
----------------------------------

Your ClojureScript REPL will piggyback on this underlying Clojure REPL. The
simplest way to do this is to evaluate ``(cemerick.austin.repls/exec)`` inside
this Clojure nREPL:

.. code-block:: bash

    cljs-seed.core=> (cemerick.austin.repls/exec)
    Browser-REPL ready @ http://localhost:64224/3400/repl/start
    Type `:cljs/quit` to stop the ClojureScript REPL
    nil
    cljs.user=> 

This has started a REPL that connects to a background ``phantomjs`` process. You 
can use the OSX Activity Monitor to watch the ``phantomjs`` process start and 
stop as you start and stop this ``austin`` REPL).

So *now* you are finally interacting with ClojureScript directly! You have your
Clojure REPL, and on top of that a ClojureScript REPL, all of which is
communicating with the Browser-REPL (on port 64224), via the nREPL server (on
port 64193). You also have a *PhantomJS* process running around in the
background somewhere. It's best not to dwell upon these details: the point is
that you can finally start using ClojureScript interactively!

However, though this is a big step forward, the ``phantomjs`` environment is
still limited: it has no access to a window or a DOM. You are free to test and
execute pure ClojureScript code in this environment, and you can even load
project ClojureScript source files into new namespaces here. But if you want to
do anything that involves interacting with an actual browser, the ``phantomjs``
environment cannot do the job.


A Blank Chrome REPL
---------------------------

Alternatively, you can start a REPL that uses (for example) your genuine
honest-to-god Chrome installation:

.. code-block:: clojure

   (cemerick.austin.repls/exec :exec-cmds ["open" "-ga" "/Applications/Google Chrome.app"])
   ;Browser-REPL ready @ http://localhost:64362/686/repl/start
   ;Type `:cljs/quit` to stop the ClojureScript REPL
   ;nil

Which will launch a new Chrome window, or add a new tab to your existing Chrome
window if Chrome is already running. Now your REPL has access to a 100% genuine
Chrome JavaScript runtime. Unlike the earlier ``phantomjs`` example, you have
access to all of the standard JavaScript constants like **js/window** and
**js/alert**:

.. code-block:: clojure

       (js/alert "Yo from Austin")
       ; nil, but an alert appears in the Chrome tab!

Although spamming yourself with popups never gets old, it's even better to be
able to load your project code into an actual browser environment. The simplest
way to do that is to create a brand new working namespace, using the
``:require`` keyword to bring in whatever source files you want to work with.
This only works because when we configured ``austin`` up above, we told it where
all of the source files for are project are. 

.. code-block:: clojure

   (ns spam (:require [cljs-seed.vanilla :as V]))
   ;nil

   (V/report-agent)
   ; window pops up a report of our user agent!

Note that we loaded the ``cljs-seed.vanilla`` Clojure namespace, which we don't
actually create in this part of the documentation. The point is that **any**
source files that exist anywhere in your project ``src`` can be installed into a
temporary namespace and toyed with at will. And not just toyed with, but *used
with a live browser window*. This is a *huge* step forward compared to a
headless ``phantomjs`` environment.

Note that if you change your source files while the browser and REPL are
running, you  will almost certainly require
some kind of special refresh/reload command; now would be a good time to review
the general topic of the ``(ns)`` macro and all of its various keywords in one
of your very fine Clojure books. 

So now we've seen two different ways to use Austin:

#. To connect to a ``phantomjs`` environment, giving you full access to a pure
   ClojureScript environment, but without any DOM or window access of any kind.
   You can load your own project source files, but you won't be able to
   demonstrate any functions that use the DOM or windows. 

#. To connect to a true Chrome window, giving you all of the above, plus access
   to a true window environment. That means you can use more of your code
   (popping up alerts, detecting the user agent etctera), but you still don't
   have access to actual HTML pages.


A Genuine Web Page REPL
-------------------------------

The final, most advanced way to use ``austin`` is to connect to your actual
web pages, as served from (for example) a ``ring`` server. This will allow you
to drive your actual, integrated HTML5 UI from the ClojureScript REPL. This is
the ultimate holy grail of ClojureScript REPLing. 

*TODO*: Finish this! See the last 3 minutes of the video tutorial on the main
``austin`` github page. His example isn't directly applicable to this project,
but he has sample code for his demo project, and it should be easily adaptable. 

*NOTE*: the examples in the sample project all require the web server to be
running as a background thread in the same window as your REPL. This doesn't
seem to me to be as genuine a test as it is to have the server and REPL
completely separate. 





