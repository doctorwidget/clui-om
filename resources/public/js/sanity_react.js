/** @jsx React.DOM */

// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
     <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
   
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var converter = new Showdown.converter();

var Comment = React.createClass({
  render: function() {
    // React protects you against XSS, so of course the first thing
    // the tutorial does is show you how to bypass the protection! 
    var rawMarkup = converter.makeHtml(this.props.children.toString());
    
     // part 2 of turning off the CSS protection is down below, 
     // as the rather fugly ``dangerouslySetInnerHTML`` call.

    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
     </div>
    );
  }
});

// special data blob for the tutorial
var tutData = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

React.renderComponent(
  <CommentBox data={tutData} />,
  document.getElementById('content')
);
