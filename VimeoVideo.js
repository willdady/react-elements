/**
 * @jsx React.DOM
 */

var React = require("react");


var VimeoVideo = React.createClass({displayName: 'VimeoVideo',

  getDefaultProps: function() {
    return {
      width: 500,
      height: 281,
      frameBorder: 0,
      portrait: true,
      title: true,
      byline: true,
      color: "00adef"
    }
  },

  getCleanedSrc: function() {
    var src = this.props.src;

    // TODO: Clean color eg, strip leading #

    var params = "";
    params = !this.props.portrait ? params += "&portrait=0" : params;
    params = !this.props.title ? params += "&title=0" : params;
    params = !this.props.byline.title ? params += "&byline=0" : params;
    params += "&color="+this.props.color;
    // TODO
    return "http://player.vimeo.com/video/93491792";
  },

  render: function() {
    return (
      React.DOM.iframe({width: this.props.width, height: this.props.height, src: this.getCleanedSrc(), frameBorder: this.props.frameBorder, allowFullScreen: true})
    );
  }
});

module.exports = VimeoVideo;
