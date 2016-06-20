import React, { PropTypes } from 'react';
import assign from 'lodash/assign';


/* The following params are the defaults as documented at
   https://developers.google.com/youtube/player_parameters*/
const DEFAULT_YOUTUBE_PARAMS = {
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


const YouTubeVideo = React.createClass({

  getDefaultProps: function() {
    return assign(
      {},
      DEFAULT_YOUTUBE_PARAMS,
      {
        width: 560,
        height: 315,
        frameBorder: 0,
        protocol: null
      }
    );
  },

  propTypes: {
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    frameBorder: PropTypes.number,
    protocol: PropTypes.oneOf(['http', 'https'])
  },

  getCleanedSrc: function() {
    // var matches, vidID, src, protocol;
    let vidID;
    let src = this.props.src.trim();
    let protocol = this.props.protocol ? this.props.protocol + ':' : '';

    // Extract video id from src.
    let pageURLRegexp = /.*watch\?v=(\w+)$/g;
    let matches = pageURLRegexp.exec(src);
    if (matches) {
      vidID = matches[1];
    } else {
      let embedURLRegexp = /.*embed\/(\w+)$/g;
      matches = embedURLRegexp.exec(src);
      if (matches) vidID = matches[1];
    }
    if (!vidID) throw 'Unable to extract Video ID from URL.';
    // Build URL parameters
    let params = '';
    for (let k in DEFAULT_YOUTUBE_PARAMS) {
      if (this.props[k] !== DEFAULT_YOUTUBE_PARAMS[k]) {
        params += '&' + k + '=' + String(this.props[k]);
      }
    }
    params = params.replace('&', '?');

    return `${protocol}//www.youtube.com/embed/${vidID}${params}`;
  },

  render: function() {
    return (
      <iframe
        width={this.props.width}
        height={this.props.height}
        src={this.getCleanedSrc()}
        frameBorder={this.props.frameBorder}
        allowFullScreen
      />
    );
  }
});


export default YouTubeVideo;
