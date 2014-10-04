*********************************
ClojureScript Tips And Tricks
*********************************

Third Party Libraries And You
====================================

Whenever you use an external library in your ClojureScript projects, you end up
with two extra tasks: the main page must include a ``<script>`` tag explicitly
loading the external library, **and** your ``project.clj`` file must refer to a
special Javascript *externs* file, which tells the Google Closure Compiler which
names to leave unmunged. The former is just a minor ugliness in the HTML source,
but the latter can be difficult, because only the most popular libraries have
published, readily-available externs files. You can write your own externs files
from scratch, but the process can be both tedious and error-prone.

But it turns out that you can get around **both** problems from inside
``project.clj``. If you specify the external file as part of a ``:preamble``
vector in the build directive, it will be concatenated onto the front of your
main compiled Javascript file. And you can use the exact same file *as the
externs file* by referencing the entire library inside of the ``:externs``
vector in the build directive.

.. code-block:: clojure

        :cljsbuild {:builds
               [{:source-paths ["src/cljs"]
                 :id "dev"
                 :compiler {:pretty-print true
                            :optimizations :simple
                            :preamble ["lib/react.js"]
                            :externs ["lib/react.js"]
                            }}
                 ;; other builds omitted for clarity
                ]}

This kills off two irritations in one fell swoop. You end up with one and only
one final JavaScript file (which is better for the user most of the time).
Better yet, because the external library acts as its own externs file, *it is
100% guaranteed to be comprehensive, correct, and up-to-date*.

In retrospect, this seems like a forehead-slapping **doh** moment. Why would you
*ever* want a painstakingly-crafted, bespoke *externs* file, when you always, by
definition, have access to a complete file that the compiler can use just as
easily? The *externs* file is only used during compilation, so the final
transpiled JavaScript file is *the exact same size* no matter what kind of
externs file you use. The only real consequence is that compilation times rise
by a split second or so.
 
Note that for this to work, we did need to put a copy of the external library
somewhere inside the ``src`` directory (in this case ``lib/react.js``), as
opposed to only having it inside the ``resources/public`` directory. You
probably don't want external libraries to be in your version control, so you
should micromanage that inside your ``.gitignore`` file. Finally, you will want
to use (for example) ``react.js`` in your ``:cljsbuild`` **dev** profile
profile, and limit the use of ``react.min.js`` to your **prod** profile, so that
your dev environment continues to get sensible error messages.

.. note::

   One caveat is that using ``:preamble`` and ``:externs`` this way can
   significantly increase the compile time *and* cause a huge number (as 
   in thousands) of warnings. However, the compiled file works perfectly despite
   the warnings; they are a tiny cloud over an otherwise-awesome hack.


Better Living Through Source Maps
======================================

Error messages after minification can be a pain in the ass to decipher, because
they are filled with unhelpful references to functions named ``k`` or ``bb``.
**Source maps** are a way to preserve a usable connection between a minified
Javascript file and the original source. The system requires a few pieces to
be in position for everything to work:

#. The browser must support the system (older ones do not)
#. The Javascript must have been compiled/minified with source maps in mind.
#. The server must make a *source map* file available to the client.
#. The server must make the original *source files* available to the client.


ClojureScript did not always provide support for this system, but they do as of
late 2013. Enabling it is very simple: in your ``project.clj`` file, you merely
need to add a few directives to the ``:dev`` build configuration. Note that
there is no reason in trying to use source maps with the ``:prod`` build, because
it makes everything less minified and requires loading extra files. It's helpful
when a third party provides a ``.min.map`` file for their minified files, but
there's no reason for you to do it in your own projects unless you plan to
distribute them to other people.

Here's a sample configuration that enables source maps:

.. code-block:: clojure

    :cljsbuild { 
         :builds [{:id "dev"
                  :source-paths ["src/cljs"]
                  :compiler {
                     :output-to "resources/public/js/main.js"
                     :output-dir "resources/public/js/out"
                     :source-map "resources/public/js/main.js.map"
                     :optimizations :simple}
                  }]
    }

The two additional items that you provide in the configuration map are: 

#. A ``:source-map`` key and value
#. An ``:output-dir`` key and value

The ``:source-map`` entry specifies the *name* and *path* of the ``.map`` file,
which is one of the things the whole system depends on. It can be a plain
vanilla ``true`` if you are using ``:optimizations :none``. You can use anything
you want for the name and path: the compiled file will include both, so
everything will always be in sync. But by convention, the map file has the same
name as the original, plus a ``.map`` suffix, and it lives in the same directory
as the compiled file.

The ``:output-dir`` entry specifies where the compiler will put copies of *all* of
the unminified source files. Just like the ``.map`` file, it must be servable by
the server, which the configuration above does by including it as part of the
standard ``resources/public`` path.

And that's it! When you do this, the compiled file will include the clues that
the browser needs to detect the presence of a source map. If and only if there
is an error, the browser will request the source map file and any necessary
unminified source files, and use that to show more-helpful debugging messages. 

.. note::

   Creating source maps can significantly increase the compile time; mine went
   from 10 seconds to 30 seconds for a trivial application. Obviously most of
   that increase comes from the (tremendously huge) static libraries involved,
   not my own code, so it's unlikely that the times would increase much beyond
   that. But still, this is something to consider. It's easy enough to toggle
   source maps on and off temporarily inside ``project.clj``.



REPL, REPL, Who's Got The REPL?
====================================


A Sample Page With A REPL
---------------------------------

The project includes a very simple example of ClojureScript code up and running
at the URL ``/vanilla``. This is just a brief reminder and demonstration of
doing extremely remedial operations in ClojureScript. See the source code for
this page at ``src/cljs/clui_om/vanilla.cljs``.

Note that this namespace loads ``clojure.browser.repl`` and subsequently calls
``(connect)``, which means it is a valid target for a ClojureScript browser
REPL. Setting up such a ClojureScript browser REPL is a surprisingly involved
process compared to a regular Clojure REPL. The two main hurdles are 

#. the need for an actual server-hosted HTML page
#. the need for that page to make a remote connection to the ClojureScript 
   bREPL terminal window. 

Fortunately, this project is already set up to handle both of those things.


Using the bREPL with the vanilla page
----------------------------------------

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

Remember that you must be working in an environment where ``lein`` knows about
both Clojure and ClojureScript for this to work! So this only works for projects
whose ``project.clj`` specifies both a Clojure and a ClojureScript version. Also
note that this is a fairly verbose set of four commands, which could be
simplified if you used a library like ``Austin``. Or you could roll your own
function to do all of them at once.


Using the bREPL with other pages
----------------------------------

Any other page that you want to have bREPL access to will need to have the same
code that ``vanilla.cljs`` does:

#. Access to ``clojure.browser.repl`` inside the namespace.
#. A call to ``(connect)`` somewhere in your ``(initialize)`` function.
#. A copy of that page actively running in a window somewhere.

Once you have all of that, you can start the Clojure REPL, followed by the
ClojureScript REPL, as described above. 


Long Build Times Got You Down?
=================================

Remember that you don't need to set ``cljsbuild`` to rebuild *all* of your build
profiles every time. If you're going to be working exclusively with one build
(say, only ``test`` or only ``dev``), you can have ``cljsbuild`` only rebuild
that profile:

.. code-block:: bash

    $: lein cljsbuild auto dev
    #... only builds the dev profile, not prod or test

