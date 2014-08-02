/**
 * @jsx React.DOM
 */

var React = require("react");


var YouTubeVideo = React.createClass({displayName: 'YouTubeVideo',

  getDefaultProps: function() {
    return {
      width: 560,
      height: 315,
      frameBorder: 0
    }
  },

  getCleanedSrc: function() {
    var src = this.props.src;
    // TODO
    return "http://www.youtube.com/embed/R8XAlSp838Y";
  },

  render: function() {
    return (
      React.DOM.iframe({width: this.props.width, height: this.props.height, src: this.getCleanedSrc(), frameBorder: this.props.frameBorder, allowFullScreen: true})
    );
  }
});

module.exports = YouTubeVideo;
