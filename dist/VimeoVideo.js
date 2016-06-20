'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assign = require('lodash/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_VIMEO_PARAMS = {
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

var VimeoVideo = _react2.default.createClass({
  displayName: 'VimeoVideo',


  getDefaultProps: function getDefaultProps() {
    return (0, _assign2.default)({
      width: 500,
      height: 281,
      frameBorder: 0,
      protocol: null
    }, DEFAULT_VIMEO_PARAMS);
  },

  propTypes: {
    src: _react.PropTypes.string.isRequired,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    frameBorder: _react.PropTypes.number,
    protocol: _react.PropTypes.oneOf(['http', 'https'])
  },

  getCleanedSrc: function getCleanedSrc() {
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

exports.default = VimeoVideo;
