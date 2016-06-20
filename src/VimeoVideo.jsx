import React, { PropTypes } from 'react';
import assign from 'lodash/assign';


const DEFAULT_VIMEO_PARAMS = {
  autopause: 1,
  autoplay: 0,
  badge: 1,
  byline: 1,
  color: '00adef',
  loop: 0,
  player_id: null,
  portrait: 1,
  title: 1
};


const VimeoVideo = React.createClass({

  getDefaultProps: function() {
    return assign(
      {
        width: 500,
        height: 281,
        frameBorder: 0,
        protocol: null
      },
      DEFAULT_VIMEO_PARAMS
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
    var matches, vidID, src, protocol;

    src = this.props.src.trim();
    protocol = this.props.protocol ? this.props.protocol + ':' : '';

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
    if (!vidID) throw 'Unable to extract Video ID from URL.';
   // Build URL parameters
    var params = '';
    for (var k in DEFAULT_VIMEO_PARAMS) {
      if (this.props[k] !== DEFAULT_VIMEO_PARAMS[k]) {
        params += '&' + k + '=' + String(this.props[k]);
      }
    }
    params = params.replace('&', '?');

    return protocol + '//player.vimeo.com/video/' + vidID + params;
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


export default VimeoVideo;
