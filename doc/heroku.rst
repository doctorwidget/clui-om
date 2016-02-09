*********************************
Heroku
*********************************

I've been running this fine via ``lein ring server``, but I wanted to get it up
and running on Heroku so I could demonstrate it to people.

Heroku Boilerplate
======================

Heroku's `documentation`_ on this topic has you start from a `boilerplate github
project`_.

.. _`documentation`: https://devcenter.heroku.com/articles/getting-started-with-clojure#introduction

.. _`boilerplate github project`:
https://github.com/heroku/clojure-getting-started.git


Hack To Run Locally
==========================


Project.clj
----------------

I was running with the ``lein-ring`` plugin, but the boilerplate uses
``ring-jetty-adapter`` and ``environ``. These were the additions to
``project.clj`` to make everything available:

.. code-block:: clojure

       :dependencies [ ; old stuff elided
                 ; and more elided
                 [ring/ring-jetty-adapter "1.4.0"]
                 [environ "1.0.0"]]

       :plugins [ ; elided
                  [environ/environ.lein "0.3.1"]]

       :hooks [environ.leiningen.hooks]

       :profiles {
               ; old stuff elided
               :production {:env {:production true}}}

       :uberjar-name "clui-om.jar"


clui-om.web.clj
------------------

I added a brand new namespace that matches the boilerplate example exactly,
which will be in charge of running the web process. This re-uses all of the
routes found in ``src/clj/clui-om/handler.clj``, but wraps them in a
``ring-jetty-adapter`` top process. The new file is ``src/clj/clui-om/web.clj``.

.. code-block:: clojure

   (ns clui-om.web
        (:require [compojure.handler :refer [site]]
            [ring.adapter.jetty :as jetty]
            [environ.core :refer [env]]
            [clui-om.handler :as h]))

   (def app h/app-routes)

   (defn -main [& [port]]
     (let [port (Integer. (or port (env :port) 5000))]
       (jetty/run-jetty (site #'app) {:port port :join? false})))

   ;; For interactive development:
   ;; (.stop server)
   ;; (def server (-main))

   
In contrast and for future reference, the original desktop project has a
``:ring`` key in ``project.clj`` that wires everything up for use with the
``lein-ring`` plugin. You don't need both approaches, but I've left them both in
for now. 

404.html
--------------

Note that their web handler adds a 404 page, which is (embarassingly) not
handled by my previous handler. This lives at the top level of the
``resources/`` directory and is very plain... but at least it's wired up!
There's also a similar 500 page.

Note that this meant replacing our old (very primitive!) 404 handler with a new
one that uses ``[clojure.java.io :as io]``.

.. code-block:: clojure

    ; old just returned a simple string
    ; (route/not-found "Not Found")

    ; new slurps up and returns the 404 file
    (ANY "*" []
       (route/not-found (slurp (io/resource "404.html"))))
    
Much nicer. 


Procfile
------------

This is a simple one-liner that Heroku always uses to launch your app,
regardless of what language it's written in. The file is consumed by a Ruby
process and has no suffix. In this case, we want it to run the standalone jar
for the project, so ours looks like this:

.. code-block:: bash

      web: java $JVM_OPTS -cp target/clui-om.jar clojure.main -m clui-om.web


which varies from the boilerplate only in the title of the jar file and the
namespace target. 


Running It Locally
--------------------------

Now you can run the dev server two different ways. One is to do exactly what the
Procfile does from a local terminal:

.. code-block:: bash

    # from the main project directory (i.e. the target/ dir should be findable)
    $: java -cp target/clui-om.jar clojure.main -m clui-om.web

The other is to run it from inside a REPL, which won't block because of the way
we defined the ``clojure.web/-main`` function.

.. code-block:: bash

     $ lein repl
     user=> (require 'clui-om.web)
     user=> (def server (clui-om.web/-main))

     ;; blah blah interact

     user=>(.stop server)  ; stops the server
     
     user=>(.start server) ; starts the server



Running On Heroku
=========================

Finally, once everything is running to your satisfaction locally, and you have
committed to github, it's time to deploy to Heroku.

Before doing this I created a remote repository and uploaded everything
there for the first time, in case anyone wanted to see the clojurescript code.
After creating the repository in the github web UI:

.. code-block:: bash

      $: git remote add origin https://github.com/doctorwidget/clui-om.git

      $: git push -u origin master


Then it's just a matter of creating the Heroku app and pushing the repository.
NB: this assumes you have a working Heroku toolbelt installed and good to go!

.. code-block:: bash

     $: heroku create
     #... output elided
     #... https://limitless-garden-22281.herokuapp.com/
     
     $: git push heroku master
     #... output elided

     # make sure at least one worker is running
     heroku ps:scale web=1
     
     $: heroku open
     #... output elided

And that's it! Not really any harder than running locally with the ``ring``
plugin, and it's much more satisfying to have it running for all the world to
see, now isn't it?




