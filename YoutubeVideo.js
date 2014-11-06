var React = require("react");

/* The following params are the defaults as documented at
   https://developers.google.com/youtube/player_parameters*/
var defaultYoutubeParams = {
  autohide: 2,
  autoplay: 0,
  cc_load_policy: 0,
  color: null,
  controls: 1,
  disablekb: 0,
  enablejsapi: 0,
  end: null,
  fs: 1,
  hl: null,
  iv_load_policy: 1,
  list: null,
  listType: null,
  loop: 0,
  modestbranding: null,
  origin: null,
  playerapiid: null,
  playlist: null,
  playsinline: 0,
  rel: 1,
  showinfo: 1,
  start: null,
  theme: null
};

var YouTubeVideo = React.createClass({displayName: 'YouTubeVideo',

  getDefaultProps: function() {
    var defProps = {
      width: 560,
      height: 315,
      frameBorder: 0,
      protocol: null
    };
    for (var k in defaultYoutubeParams) {
      defProps[k] = defaultYoutubeParams[k];
    }
    return defProps;
  },

  propTypes: {
    protocol: React.PropTypes.oneOf(["http", "https"])
  },

  getCleanedSrc: function() {
    var matches, vidID, src, protocol;

    src = this.props.src.trim();
    protocol = this.props.protocol ? this.props.protocol + ":" : "";

    // Extract video id from src.
    var pageURLRegexp = /.*watch\?v=(\w+)$/g;
    matches = pageURLRegexp.exec(src);
    if (matches) {
      vidID = matches[1];
    } else {
      var embedURLRegexp = /.*embed\/(\w+)$/g;
      matches = embedURLRegexp.exec(src);
      if (matches) {
        vidID = matches[1];
      }
    }
    if (!vidID) throw "Unable to extract Video ID from URL.";
    // Build URL parameters
    var params = "", val;
    for (var k in defaultYoutubeParams) {
      if (this.props[k] !== defaultYoutubeParams[k]) {
        params += "&" + k + "=" + String(this.props[k]);
      }
    }
    params = params.replace("&", "?");

    return protocol + "//www.youtube.com/embed/" + vidID + params;
  },

  render: function() {
    return (
      React.createElement("iframe", {width: this.props.width, height: this.props.height, src: this.getCleanedSrc(), frameBorder: this.props.frameBorder, allowFullScreen: true})
    );
  }
});

module.exports = YouTubeVideo;
