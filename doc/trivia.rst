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
