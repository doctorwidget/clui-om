***********************************
React Tutorial, Redone In Om
***********************************

The page at */react-om-tut/* demonstrates the official **React.js** tutorial
converted to ClojureScript. Nothing has been added to the original, except for
the core ``Om`` library itself. However, the original tutorial
used two vanilla JavaScript libraries that have been changed to their
ClojureScript equivalents: ``markdown-clj`` instead of
``Showdown`` and ``cljs-http`` instead of ``jQuery``.

I used **jalehman's** `Om version of the React tutorial`, as the basis for this
page. However, the version online is old and unmaintained, and so it contains
some significant anomalies and did not work out of the box originally. For
example, there is some obsolete syntax from very early ``Om`` releases, some
confusion over when to use ``om/update!`` versus ``om/transact!``, and some
unecessary imports (i.e. the ``secretary`` library is imported but never used).
Fortunately, it turns out that poring over the error messages and the ``Om``
source code to clean up those anomalies was a worthwhile learning experience.

.. _`Om version of the React tutorial`: https://github.com/jalehman/react-tutorial-om">react-tutorial-om

