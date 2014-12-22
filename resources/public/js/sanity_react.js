/** @jsx React.DOM */

/** COMPONENT DEFINITIONS 
The next section defines components but does not instantiate any of them. 
**/

var CommentBox = React.createClass({

    /** 
     * loadCommentsFromServer()
     * A custom method, *not* part of the React Component API
     */
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleCommentSubmit: function(comment) {
        // TODO: submit to the server to update the database
        // In the interim, do an "optimistic" local state update
        var comments = this.state.data;
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
    },

    /** 
      * getInitialState()
      * Part of the React Component API
      */
    getInitialState: function() {
        return {
            data: []
        };
    },

   /** 
     * componentDidMount()
     * Part of the React Component API
     */
    componentDidMount: function() {
       this.loadCommentsFromServer();
       setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    /**
      * render()
      * Part of the React Component API
      */
    render: function() {
        return (
                <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit} />
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
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }

    this.props.onCommentSubmit({author: author, text: text});

    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" name="commentAuthor" ref="author" />
        <input type="text" placeholder="Say something..." name="commentText" ref="text" />
        <input type="submit" name="commentPost" value="Post" />
      </form>
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

/**  INSTANTIATION SECTION 

Now that all of the components are defined up above, it's time to 
actually create a working UI on the page.

**/

// round 1 data blob for the tutorial
var tutData = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];
// round 2 replaced that with the static file ``comments.json``

// round 1 just said <CommentBox data={tutData} />

React.renderComponent(
  <CommentBox url="blob/comments.json" pollInterval={10000}  />,
  document.getElementById('content')
);
