/**
 * @jsx React.DOM
 */

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

var YouTubeVideo = React.createClass({

  getDefaultProps: function() {
    var defProps = {
      width: 560,
      height: 315,
      frameBorder: 0,
    };
    for (var k in defaultYoutubeParams) {
      defProps[k] = defaultYoutubeParams[k];
    }
    return defProps;
  },

  getCleanedSrc: function() {
    var src = this.props.src;

    // TODO: Process src to extract the video ID and clean the URL.

    var params = "", val;
    for (var k in defaultYoutubeParams) {
      if (this.props[k] !== defaultYoutubeParams[k]) {
        params += "&" + k + "=" + String(this.props[k]);
      }
    }
    params = params.replace("&", "?");
    return src + params;
  },

  render: function() {
    return (
      <iframe width={this.props.width} height={this.props.height} src={this.getCleanedSrc()} frameBorder={this.props.frameBorder} allowFullScreen></iframe>
    );
  }
});

module.exports = YouTubeVideo;
