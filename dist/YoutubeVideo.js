'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* The following params are the defaults as documented at
   https://developers.google.com/youtube/player_parameters*/
var DEFAULT_YOUTUBE_PARAMS = {
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

var YouTubeVideo = _react2.default.createClass({
  displayName: 'YouTubeVideo',


  getDefaultProps: function getDefaultProps() {
    return (0, _assign2.default)({}, DEFAULT_YOUTUBE_PARAMS, {
      width: 560,
      height: 315,
      frameBorder: 0,
      protocol: null
    });
  },

  propTypes: {
    src: _react.PropTypes.string.isRequired,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    frameBorder: _react.PropTypes.number,
    protocol: _react.PropTypes.oneOf(['http', 'https'])
  },

  getCleanedSrc: function getCleanedSrc() {
    // var matches, vidID, src, protocol;
    var vidID = void 0;
    var src = this.props.src.trim();
    var protocol = this.props.protocol ? this.props.protocol + ':' : '';

    // Extract video id from src.
    var pageURLRegexp = /.*watch\?v=(\w+)$/g;
    var matches = pageURLRegexp.exec(src);
    if (matches) {
      vidID = matches[1];
    } else {
      var embedURLRegexp = /.*embed\/(\w+)$/g;
      matches = embedURLRegexp.exec(src);
      if (matches) vidID = matches[1];
    }
    if (!vidID) throw 'Unable to extract Video ID from URL.';
    // Build URL parameters
    var params = '';
    for (var k in DEFAULT_YOUTUBE_PARAMS) {
      if (this.props[k] !== DEFAULT_YOUTUBE_PARAMS[k]) {
        params += '&' + k + '=' + String(this.props[k]);
      }
    }
    params = params.replace('&', '?');

    return protocol + '//www.youtube.com/embed/' + vidID + params;
  },

  render: function render() {
    return _react2.default.createElement('iframe', {
      width: this.props.width,
      height: this.props.height,
      src: this.getCleanedSrc(),
      frameBorder: this.props.frameBorder,
      allowFullScreen: true
    });
  }
});

exports.default = YouTubeVideo;
