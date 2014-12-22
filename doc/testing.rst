************
Testing
************

One of the biggest strengths of *Angular* is how it puts testing front and
center. It doesn't just allow for testing, it *encourages* and *promotes* it.
Unfortunately, this is not nearly so true in the *Om* / *React* realm. 

clojurescript.test
======================

ClojureScript does not include any test-oriented namespaces right out of the
box. This is in contrast to pure Clojure, which includes ``clojure.test`` right
there in the core.  Fortunately, Chas Emerick comes to our rescue (again!) with
a complete port of ``clojure.test`` to ClojureScript: `clojurescript.test`_.

.. _`clojurescript.test`: https://github.com/cemerick/clojurescript.test


Installation
----------------------

Since this is *not* part of the ClojureScript core, you need to add to your
project.clj as a *plugin* (not as a dependency!):

.. code-block:: clojure

   ; inside project.clj

   :plugins [ ; other plugins elided...
              [com.cemerick/clojurescript.test "0.3.3"]

Adding it as a plugin *also* adds it as a dependency; you don't need to specify
it in both places. 


Example Tests
-------------------

Most of the useful goodies are defined as macros, which as usual increases the
verbosity of setting up your namespace. Let's say you cut and past this sample
block from the github readme into a file in your own project, at
``{project}/test/cljs/clui_om/misc/music_theory_test.cljs``.

.. code-block:: clojure

   (ns clui-om.misc.music-theory-test
     (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
     (:require [cemerick.cljs.test :as t]
               [clui-om.misc.music-theory :as m]))

    (deftest somewhat-less-wat
      (is (= "{}[]" (+ {} []))))

    (deftest javascript-allows-div0
      (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))

    (with-test
      (defn pennies->dollar-string
        [pennies]
        {:pre [(integer? pennies)]}
        (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
      (testing "assertions are nice"
        (is (thrown-with-msg? js/Error #"integer?" (pennies->dollar-string
        564.2)))))


Note that due to the vagaries of the whole Clojure/ClojureScript macro system,
you *must* ``:require [cemerick.cljs.test]`` even if all you actually plan to
use are the macros. I've encountered that kind of weirdness before when writing
my own ClojureScript macros: all the action takes place in the pure-clojure
Macro files, but you still need to declare the pure-clojurescript namespace (and
by "declare" I just mean ``:require`` it). Otherwise the existence of that
namespace will not end up inlined into the final compiled file, and some things
(*necessary* things) won't be available at runtime.


Testing At The REPL
-----------------------

You can run your tests manually from inside a REPL. 

.. code-block:: clojure

    ; inside a Rhino REPL
    (ns testns (:require [cemerick.cljs.test :as t]))
    
    (t/test-ns 'clui-om.misc.music-theory-test)

    ; Testing clui-om.misc.music-theory-test
    ; {:test 3, :pass 3, :fail 0, :error 0}

And from there you are free to add additional tests. 


Testing via Lein
---------------------

Obviously, the vast majority of the time, you will want to run your tests via
``lein-cljsbuild`` rather than messing about with REPL madness. You will want a
third build target defined inside the ``:cljsbuild`` settings. This will be the
``:id "test"`` target, to go along with the pre-existing ``:id "prod"`` and ``:id
"dev"`` targets. The *test* target can be very short and might as well use only
minimal optimizations:

.. code-block:: clojure

    ;; inside project.clj
    ;; within the [:cljsbuild :builds] vector of build targets
                 {:source-paths ["src/cljs" "test/cljs"]
                 :id "test"
                 :compiler {:output-to "resources/test/unit/clui_om_test.js"
                            :optimizations :whitespace }}

You also need to add one new ``:cljsbuild`` setting: ``:test-commands``, a
sibling of ``:builds`` at the topmost level.

.. code-block:: clojure

    ;; inside project.clj
    ;; within the :cljsbuild map
    :test-commands {"unit-tests" ["phantomjs" :runner
                                  "resources/test/unit/clui_om_test.js"]}

I find this set of values more than a little weird: ``phantomjs`` and
``:runner`` are paired like a map key-value pair, but they're just vector
values, and they're followed by the string path to our test file, which matches
what we specified in the preceding section. 

Now you can run your tests at the command line via ``lein cljsbuild test``.

.. code-block:: bash

   $: lein cljsbuild test
   # Compiling ClojureScript
   # Running ClojureScript test: unit-tests

   # surprisingly huge number of garbage error messages related to temp files

   # Testing clui-om.misc.music-theory-test

   Ran 5 tests containing 5 assertions.
   Testing complete: 0 failures, 0 errors.

The number of errors is truly disturbing; it makes the output have a very poor
signal to noise ratio. The errors themselves do not contain any information that
might help track down the source of the problem. 


Total Fail
--------------

Worse, after a couple of runs, the whole ``clojurescript.test`` system stopped
working for me in both the REPL and ``lein-cljsbuild``. Bizarrely, the REPL
began to report {:tests 0 :pass 0 :fail 0 :error 0} even after ``lein cljsbuild
clean`` and even ``lein clean``. Similarly, running via ``lein cljsbuild test``
began to crash without finishing any tests. The stack traces were far too
cryptic for me to draw any conclusions from. Very very strange, and not
something that builds confidence in the package!

As a result, I've temporarily uninstalled ``clojurescript.test``. Perhaps I'll
try to get it running again later. 


cljs.test
----------------

Or perhaps not: David Nolen tweeted on Dec 7 that he was working on a new
**core** namespace for ClojureScript to be called ``cljs.test``. This is
intended to be a straight up reimplementation of ``clojure.test``, just as
``clojurescript.test`` is. But the intent is for it to support all of the
various compiler options (e.g. not just ``:whitespace``), source maps, and so
on. The combination of core developer support + full support for all compiler
options sounds much more promising than what I've seen in action so far with
``clojurescript.test``. Note to Chas Emerick: I still love your work.




End To End Testing
======================
   
Just as Angular testing is divided into Karma for Unit, and Protractor for E2E,
so you must use a completely different system from ``clojurescript.test`` for
your end-to-end testing. 

In the the end, any end-to-end test framework should really be platform
agnostic, shouldn't it? It shouldn't matter how you wrote your JavaScript source
code -- in plain JavaScript, or with Angular, or with ClojureScript/Om, or
whatever. That means we can broaden our horizons here; we don't *need* to find
some kind of Clojure-oriented framework for this type of testing. There is no
need to limit ourselves to *any* particular framework *or* any particular
language.

For example, there's nothing stopping you from using `Protractor`_ to test *any*
web application, even if it's not built with Angular! In theory, you could test
ProtoGenie or a Ruby-on-Rails or pure Clojure/Ring site with Protractor, no
problem. You'd just set up your test files exactly like you would for an Angular
app, but then only make queries based on plain old CSS rather than using any of
the special **ng-\*** selectors. You would be paying some amount of overhead for
the special hooks into Angular that you don't actually need (nothing is free,
after all). But the bottom line is that Protractor lets you select arbitrary
elements on the page via standard CSS selectors, enter arbitrary text into
arbitrary fields, wait for asynchronous results and inspect them, and so on. So
you *could* E2E test any and all web apps in Protractor.

.. _`Protractor`: https://github.com/angular/protractor

But on the other hand, why pay the performance tax for those unused hooks? And
even though Protractor is well-maintained and likely to continue to be so for
the forseeable future, it's always going to prioritize Angular issues, rather
than general-purpose web application issues. 

So for that reason, you might consider something like `nightwatch.js`_, which
has essentially the same look and feel as ``Protractor``, but which is
platform-agnostic. You write your tests in plain old JavaScript and run them via
a ``Node`` command, just like you do with ``Protractor``. But there's no
assumptions whatsoever about what library or libraries you may or may not be
using in your client. That's kind of appealing. 

.. _`nightwatch.js`: http://nightwatchjs.org/

But on the *other* other hand, once you grok the fact that you're not limited to
any particular framework, why limit yourself to Node-based tools at all. There's
a very active, general-purpose end-to-end test framework called `Robot`_, which
is completely Python-centric. Just like Protractor or Node, it's a perfectly
valid option for testing any web application agnostically, without caring about
the underlying technologies. It's very `well documented`_, and seems to be very
well-maintained 

.. _`Robot`: http://robotframework.org/

.. _`well documented`: http://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html

In fact, Robot is actually the most general-purpose E2E testing system discussed
so far: it is intended to be used to automate *any kind of testing whatsoever*,
not just web applications. People use it to test FTP clients, Java Swing UIs,
Android apps, and more. You would be using it with the `Selenium2Library`_, a
plugin explicitly designed to use Robot to E2E test web applications.

.. _`Selenium2Library`:  https://github.com/rtomac/robotframework-selenium2library

In fact, *all* of the E2E frameworks discussed so far turn out to be wrappers
around `Selenium`_ in one way or another. It's not always obvious at first
glance, but it's always true when you poke around under the hood. Protractor,
Nightwatch, and (Robot + Selenium2Library) are all just providing varying
degrees of syntactic sugar around different flavors of `WebDriver`_, each of
which exists solely for the purpose of enabling people to write sweet sweet
sugary wrappers around a Selenium core.

.. _`Selenium`:  http://www.seleniumhq.org/

.. _`WebDriver`: https://code.google.com/p/selenium/wiki/WebDriverJs

And so, with that in mind, you might even consider rolling your own from-scratch
solution using the core WebDriver library and the `Mocha`_ JavaScript test
framework. Here's a good blog post `detailing`_ how you would do that.

.. _`Mocha`: http://mochajs.org/

.. _`detailing`: http://blog.strafenet.com/2014/07/03/end-to-end-javascript-testing-is-easy-the-minimal-way-to-do-it/


Too Many Options: Which One To Use?
---------------------------------------

So which one to use? That's not an easy question to answer.

Before I started researching this, I was thinking I would just use plain old
Protractor, because I had a hunch that it would be perfectly good for general
purpose web application testing, and I had already put some time into climbing
the initial learning curve. But now that I've seen these other options, I don't
see the value in paying the Angular tax if I'm not using Angular. Obviously for
any project that *does* use Angular, choosing Protractor is a complete
no-brainer! But if you're not using Angular, then not so much.

The *idea* of rolling my own pure Mocha + Selenium system is appealing on some
level. But despite what that blog post says, taking that approach wouldn't
actually save you that much startup time / learning time. You still have to
learn (and tweak, and glue together) *two* complete systems: the raw WebDriver
API, and the Mocha framework. And there's something very appealing getting all
of the most common operations pre-sugared for you.

Nightwatch sounds very nice in some ways. Agnostic as to your JS libraries, and
focused like a laser on the specific issue of interacting with web pages. What's
not to like? Well, in point of fact, I'd rather not write *anything* in pure JS
if I can avoid it, and I don't feel a compelling urge to dive deeper into the
Node ecosystem either. To be clear, I'm not going to tilt at windmills over this
issue: JS and Node aren't going anywhere, obviously, and when there's an
irreplaceable Node tool I am happy to use it. But just as I would rather write
ClojureScript than plain JS if I can manage it, I'd rather use a Python
framework over a Node framework if I can manage it.

Which brings us to Robot. The drawback here is that it's the biggest and most
ambitious option. Robot does *not* have the laser-like focus on web testing that
Nightwatch does. BUT it has a compelling number of other plusses. 

#. Python!!
#. Custom extensions and tasks are written as plugins in 100% pure Python.
#. An investment in the future; a tool for *any* kind of testing (Android! IOS!).
#. Very well maintained and not going anywhere any time soon.
#. Very mature Selenium2Library for use with web applications.


That last point is very important: we're not talking about reinventing any
wheels here. There's a tremendous amount of documentation out there about Robot
and all of the various support libraries, but that can be a double edged sword,
making the task of learning Robot seem *more* daunting than it needs to be. The
actual daily routine of writing Robot tests looks like it will come down to a
couple of ``pip install`` calls, followed by reviewing the documentation for
``Selenium2Library`` and not much else. All of the common web application
operations (changing pages, selecting form elements, inserting text,
asynchronous waits, etcetera etctera) are all supplied as completely pre-built,
sugary Robot keywords. You don't have to master the entire mountain of available
Robot documentation to start writing your integrated tests!


Robot Tentatively Wins
-------------------------------

Honestly, learning Robot seems like my best bet at this point. Consider your
experience with ``Sphinx``, which is a best-of-breed general-purpose
documentation tool that I have gone on to happily use on projects which are not
at all Python-related. Robot seems like it might well be the same kind of
learn-once use-everywhere tool. It was totally worth my while to delve
into the Sphinx documentation and become at least minimally proficient with it.
I suspect the same will turn out to be the case with Robot.

I've placed a ``robot`` subdirectory at ``{PROJECT}/test/robot``. This
subdirectory contains all of the required files to do E2E testing for this
project. You must have a working Python virtualenv (with ``robotframework``
installed via ``pip``) activated to run the tests. The ``py279`` venv has both
``robotframework`` and ``Sphinx``, so you can use the same venv to both run the tests
and build this documentation. This is Python at its finest!

.. code-block:: bash

    ~/path-to-project/ $: workon py279

    (py279) ~/path-to-project/ $: lein ring server 

    (py279) ~/path-to-project/ $: pybot test/robot/all
    #... output elided

Report files (``report.html``, ``log.html``, and ``output.xml``) are put into
the current working directory by default. If you don't want them in the root
directory for the project (and why would you?), you can run the
tests from the robot directory itself. You probably want to have a dedicated
window for doing this anyway, so this is easy enough:

.. code-block:: bash

    ~/path-to-project/ $: cd test/robot

    ~/path-to-project/test/robot $: pybot all
    #... output elided

Robot is both awesome and *giganormous*, and documenting it is well beyond the
scope of this documentation. I have fairly extensive notes at
``Users/scottfitz/code/_notes/python/robot_framework.rst`` which are worth
reviewing. Those notes include numerous out-links to a wide variety of tutorials
and reference materials. 

Most of the tests for this project are extremely straightforward:

#. go to a page,
#. check bits of specific content (window title, specific CSS targets, etc)
#. complete and submit a form
#. confirm that things have changed as expected. 

One of the nice things is that Robot includes default implicit waits of a few
milliseconds so that the asynchronicity of a web page is not an issue. You can
turn those implicit waits off or specify waits of arbitrary length for any test,
or any suite, of course. The tests are simple, but they provide nice
fully-working examples of the basic workflow for E2E testing of any web application. 


