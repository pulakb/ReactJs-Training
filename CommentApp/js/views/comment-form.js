var React = require('react');

var CommentActionCreators = require('../actions/comment-action-creators');

var CommentForm = React.createClass({

  onSubmit: function (e) {
    e.preventDefault();

    //var textNode = this.refs.text.getDOMNode();
    //var text = textNode.value;
    var text = React.findDOMNode(this.refs.text).value.trim();

    //textNode.value = '';
    React.findDOMNode(this.refs.text).value = '';

    CommentActionCreators.createComment({
        text: text
    });
  },

  render: function() {
    return (
      <div className='comment-form'>
        <textarea ref="text" />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }

});

module.exports = CommentForm;
