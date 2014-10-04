**************
React
**************

`React`_ is a JavaScript library developed by Facebook. It is *not* complete
framework! Unlike (for example) *Angular* or *Ember*, React is focused on only
one of the three pieces of the MVC pattern: the **view**.

.. _`React`: https://github.com/facebook/react


The React Tutorial
----------------------

This project includes the entire short introductory `tutorial`_ from the main
React site. I haven't modified it in any way; the goal is to have an
unadulterated copy of that code, in working form, easily accessible for your
hacking and tinkering needs. You can view it from this projects (running!) Ring
server as ``http://localhost:3000/react``.

.. _`tutorial`: http://facebook.github.io/react/docs/tutorial.html


Other Documentation
----------------------

Most of the time you're probably going to want to skip the most-introductory
materials and go straight to the more-detailed references, which are available
for important topics such as the React `top-level API`_, the React `component
API`_, the React `lifecycle system`_, and the React `event handler system`_.

.. _`top-level API`: http://facebook.github.io/react/docs/top-level-api.html

.. _`component API`: http://facebook.github.io/react/docs/component-api.html

.. _`lifecycle system`: http://facebook.github.io/react/docs/component-specs.html

.. _`event handler system`: http://facebook.github.io/react/docs/events.html

In the long run, the plan is to use ClojureScript and ``Om`` instead of naked
React code, but it's still utterly essential to be able to review the original
API.


React Principles
---------------------

At its heart, ``React`` is about building *UI components*. It is a toolkit that
smooths over the process of displaying items on screen, and wiring up listeners
to them. In other words, it is solely concerned with the **V** in *MVC*. React
rejects the idea that you should separate your HTML from your JavaScript, under
the theory that *"languages represent separate technologies, not separate
concerns"*. I'm not sure I buy that line of reasoning (the ``Enlive`` family of
Clojure projects makes a compelling counter-case), but you either get over
this issue or you just don't use vanilla React!.


JSX 
.................

For this reason, React includes a special templating language called ``JSX``,
which allows you to plop naked pseudo-HTML into your JavaScript files. It's
*pseduo* because it also includes direct access to JavaScript values and
function calls, which means it looks sort of like a Django (or other template
language) template block. And all of that is right there in the middle of your
JavaScript files.

When you use this approach, you must give the final page access to the core
React file ``JSXTransformer.js``, and all of your JavaScript-React files must
include a *preprocessor directive* as their very first statement:

.. code-block:: javascript

    /** @jsx React.DOM **/
    
    // The above needs to be the very first line in the file!

    // Now you can continue on with your Javascript-React code from here.

I am not clear whether or not this would place nicely with the minified
ClojureScript files, because after being run through the Google Closure
Compiler, it seems like all of your ``JSX`` templates would be munged into
incoherence -- if the GCC didn't just reject the ``JSX`` source out of hand
first. Fortunately, our real plan is to use ``Om``, which means we will bypass
``JSX`` completely. However, it's important to note that this exists, so you'll
understand what you're seeing when you look at pure React code and see that it
appears to be littered with unquoted pseudo-HTML.


Components
................

Next, you define individual *components*, which are essentially pseudoclasses.
The process for doing this is very reminiscent of working with widgets in
``Dojo``: you supply a *definition object* which has a variety of named
functions. These functions can be selected from the standard *lifecycle
functions* or they can be your own custom helper functions.

.. code-block:: javascript

    var MyComponent = React.createClass({

       render: function(){
           // standard React lifetime function
       }

       helpMeRhonda: function(){
           // my own custom helper function
       }

    })

    // and now you can instantiate new components via MyComponent()

The one function that is *always* required is ``render``. Any time you make a
component, you're going to need to provide this one. Other functions are
optional. 

Then, just like in ``Dojo``, you end up with a class function; a function that
is invoked to get an instance of that class. The instance will have all of the
functions defined in your original object, plus all of the necessary boilerplate
layered on by the React framework itself. As a result, you have a rich class
that has all of the underlying machinery needed by React, plus all of the
special code that you chose to include yourself. 


Lifecycle Functions
....................

The lifecycle functions are similar to the ones you're familiar with from working
with (for example) Swing components, ActionScript components, and Dojo
components. They have slightly different names, but they follow the usual
pattern of pre-instantiation, instantiation, pre-add-to-stage, pre-change,
post-change, and so on.

Every one of these functions is also available as an ``Om`` protocol, so I've
included that name too, just to make this table definitive:

=====================      ==================
    React method               Om Protocol
=====================      ==================
componentWillMount            IWillMount
componentDidMount             IDidMount
componentWillUpdate           IWillUpdate
componentDidUpdate            IDidUpdate
render                        IRender
renderState                   IRenderState
=====================      ==================


This is *not* a comprehensive list, but it should make the naming patterns
clear, and keep you oriented when cross-referencing source code across ``React``
and ``Om``.


props
.........

Whenever a React component is instantiated, the React framework always supplies
it with a ``props`` object . This is a plain old JavaScript object that includes
data which the new component can then render to the screen. So ``props`` in
react means a **data object**. Props are routinely passed along from
higher-level components to child components when rendering a complex UI.

Even if you don't manually specify a ``props`` in your custom object, the
standard ``React.createClass()`` function ensures that this property does exist
in your instantiated component. So this kind of code is always legal inside your
custom components:

.. code-block:: javascript

   // blah
   var foo = this.props.foo

It's important to note that ``props`` are *immutable*. They are always passed
from parent to child, and the child is only allowed to read from them. The
parent may very well be passing along a sub-property of their own read-only
``props`` object, which they received from a grandparent. This read-only,
immutable quality of ``props`` is part of what makes ``React`` such a natural
candidate for use within ClojureScript. 


refs
.........

React uses ``refs`` to let you access text and input fields in the HTML from
inside your Javascript. When your rendered HTML includes a ``ref`` attribute and
a name, you can use that name as an easy hook to connect to that exact DOM node.
So if your rendered HTML includes this...

.. code-block:: html

    <!-- rest of component omitted -->
    <input type="text" placeholder="Your name" ref="author" />

Then your Javascript component code can say this...

.. code-block:: javascript

   var author = this.refs.author.getDOMNode().value.trim();

Note that you **do** need the intermediate call to ``getDOMNode()``: the ``ref``
gives you access to a Javascript-React abstraction of the node, not the actual
concrete DOM node in the HTML.


state
............

Finally, React components are allowed to have *local state*, in the form of a
``state`` property automatically added to each component instance. State is
initially set via the core ``getInitialState()`` method, and can be updated
inside your component code via the core ``setState()`` method.

.. code-block:: javascript

    var CommentBox = React.createClass({
        
        // set the initial state for this component!
        getInitialState: function() {
           return {data: []};
        },

        // the reference to state hides inside this JSX blob
        render: function() {
           return (
             <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
             </div>
         ); 
        }// end render()

    });// end CommentBox




.. note::

    Om provides a wrapped version of ``state`` for any component, should you
    choose to use it. The Om version is an immutable atom under the hood, of
    course.

It's important to know that naked React code often makes extensive use of
``this.state``. Don't be confused by this when you peruse naked React code!


Event Handling
..................

The last thing to note is that React re-uses the names of most standard browser
UI events, but wraps them for cross-browser compatibility inside a custom React
class named ``SyntheticEvent``. This new class preserves all of the important
functionality that you need, such as ``.preventDefault()``, ``.target``,
``.timestamp``, and so on.

So your component can attach an event handler inside a blob of ``JSX``
template code, like so:

.. code-block:: javascript

     /** @jsx React.DOM */

    var LikeButton = React.createClass({
        
       getInitialState: function() {
           return {liked: false};
       },

       handleClick: function(event) {
           this.setState({liked: !this.state.liked});
       },

       render: function() {
          var text = this.state.liked ? 'like' : 'unlike';
          return (
             <p onClick={this.handleClick}>
               You {text} this. Click to toggle.
            </p>
       );
       }// end render
    });


The complete list of supported events can be found `here`_.

.. _`here`: http://facebook.github.io/react/docs/events.html

Note that in general, inside ``Om`` code, these events are referred to
via Clojure keyword equivalent names, e.g. ``:onClick`` instead of
``onClick``. Note that they have been keywordized but *not* camel-cased!







