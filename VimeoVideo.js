/**
 * @jsx React.DOM
 */

var React = require("react");

var defaultVimeoParams = {
  autopause: 1,
  autoplay: 0,
  badge: 1,
  byline: 1,
  color: "00adef",
  loop: 0,
  player_id: null,
  portrait: 1,
  title: 1
};

var VimeoVideo = React.createClass({displayName: 'VimeoVideo',

  getDefaultProps: function() {
    var defProps = {
      width: 500,
      height: 281,
      frameBorder: 0,
      protocol: null
    };
    for (var k in defaultVimeoParams) {
      defProps[k] = defaultVimeoParams[k];
    }
    return defProps;
  },

  propTypes: {
    src: React.PropTypes.string.isRequired,
    protocol: React.PropTypes.oneOf(["http", "https"]),
  },

  getCleanedSrc: function() {
    var matches, vidID, src, protocol;

    src = this.props.src.trim();
    protocol = this.props.protocol ? this.props.protocol + ":" : "";

    // Extract video id from src.
    var pageURLRegexp = /.*vimeo\.com\/(\w+)$/g;
    matches = pageURLRegexp.exec(src);
    if (matches) {
      vidID = matches[1];
    } else {
      var embedURLRegexp = /.*video\/(\w+)$/g;
      matches = embedURLRegexp.exec(src);
      if (matches) {
        vidID = matches[1];
      }
    }
    if (!vidID) throw "Unable to extract Video ID from URL.";
   // Build URL parameters
    var params = "", val;
    for (var k in defaultVimeoParams) {
      if (this.props[k] !== defaultVimeoParams[k]) {
        params += "&" + k + "=" + String(this.props[k]);
      }
    }
    params = params.replace("&", "?");
    
    return protocol + "//player.vimeo.com/video/" + vidID + params;
  },

  render: function() {
    return (
      React.DOM.iframe({width: this.props.width, height: this.props.height, src: this.getCleanedSrc(), frameBorder: this.props.frameBorder, allowFullScreen: true})
    );
  }
});

module.exports = VimeoVideo;
