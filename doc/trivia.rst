*********************************
ClojureScript Tips And Tricks
*********************************

Better Living Through :preamble
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
 
See the ``project.clj`` file for this project for sample code. Note that you do
need to put a copy of the external library (in this case, ``react.js``) inside
the ``src`` directory somewhere, as opposed to only having it inside the
``resources/public`` directory. You probably don't want external libraries to be
in your version control, so you should micromanage that inside your
``.gitignore`` file. Finally, you will want to use (for example) ``react.js`` in
your ``:cljsbuild`` **dev** profile profile, and limit the use of
``react.min.js`` to your **prod** profile, so that your dev environment
continues to get sensible error messages.



Better Living Through Source Maps
======================================

Error messages after minification can be a pain in the ass to decipher, because
they are filled with unhelpful references to functions named ``k`` or ``w``.
**Source maps** are a way to preserve a usable connection between a minified
Javascript file and the original source. The system depends on a few pieces
being in position:

#. The browser must support the system (older ones do not)
#. The Javascript must have been compiled/minified with source maps in mind.
#. The server must make a *source map* file available at a standard location.


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
                  :source-paths ["src"]
                  :compiler {
                     :output-to "resources/public/js/main.js"
                     :output-dir "resources/public/js/out"
                     :source-map "resources/public/js/main.js.map"
                     :optimizations :simple}
                  }]
    }

The two key points are that you provide:

#. A ``:source-map main.js.map`` entry in the configuration map.
#. An ``:output-dir`` path, which is not necessary in a non-source-mapped build. 

The ``:source-map`` directive can be a plain vanilla ``true`` if you are using
``:optimizations :none``. But if you want any of the more advanced optimizations
(even just ``:simple``), the value for this key must be the actual name of the
map file, as shown above. The example above adheres to the standard naming
convention wherein the map file is the exact same name as the compiled file,
plus a ``.map`` suffix.

The ``:output-dir`` directory will end up with copies of *all* of
the unminified source files, and it must be servable by the server. In the
configuration above, it is specified to be a sibling directory of the main
output file; this is also, which kills two birds with one stone: that's the
standard expected location, and it will also be servable by a Ring server.

I almost always use ``:optimizations :simple`` as my minimum baseline, instead
of ``:optimizations :none``, because it seems like a much truer simulation of
the final execution environment (with everything in one single file), with no
real drawbacks to speak of.

And that's it! When you do this, the compiled file will include the clues that
the browser needs to detect the presence of a source map. If and only if there
is an error, the browser will request the source map file and any necessary
unminified source files, and use that to show more-helpful debugging messages. 

