'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingSpinner = _react2.default.createClass({
  displayName: 'LoadingSpinner',


  propTypes: {
    mini: _react2.default.PropTypes.bool,
    small: _react2.default.PropTypes.bool,
    slow: _react2.default.PropTypes.bool,
    fast: _react2.default.PropTypes.bool,
    color: _react2.default.PropTypes.string,
    backgroundColor: _react2.default.PropTypes.string
  },

  render: function render() {
    var className = (0, _classnames2.default)('loading-spinner', {
      'loading-spinner--mini': this.props.mini,
      'loading-spinner--small': this.props.small,
      'loading-spinner--slow': this.props.slow,
      'loading-spinner--fast': this.props.fast
    }, this.props.className);
    var style = {};

    if (this.props.color) style.borderLeftColor = this.props.color;
    if (this.props.backgroundColor) {
      style.borderBottomColor = this.props.backgroundColor;
      style.borderRightColor = this.props.backgroundColor;
      style.borderTopColor = this.props.backgroundColor;
    }

    return _react2.default.createElement(
      'div',
      { className: className,
        style: style },
      'Loading'
    );
  }

});

exports.default = LoadingSpinner;
