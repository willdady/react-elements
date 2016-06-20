'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _values = require('lodash/values');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};

var Switch = _react2.default.createClass({
  displayName: 'Switch',


  propTypes: {
    name: _react.PropTypes.string,
    value: _react.PropTypes.bool.isRequired,
    size: _react.PropTypes.oneOf((0, _values2.default)(SIZES)),
    onClick: _react.PropTypes.func
  },

  onClick: function onClick() {
    if (!this.props.onClick) return;
    this.props.onClick(this.props.value, this.props.name);
  },

  render: function render() {
    var className = (0, _classnames2.default)({
      're-switch': true,
      're-switch--on': this.props.value,
      're-switch--xs': this.props.size === SIZES.EXTRA_SMALL,
      're-switch--sm': this.props.size === SIZES.SMALL,
      're-switch--lg': this.props.size === SIZES.LARGE
    });
    return _react2.default.createElement(
      'span',
      { className: className },
      _react2.default.createElement('input', {
        type: 'checkbox',
        name: this.props.name,
        className: 're-switch__checkbox',
        checked: this.props.value,
        onClick: this.onClick,
        readOnly: true
      }),
      _react2.default.createElement('span', { className: 're-switch__switch' })
    );
  }
});

exports.default = Switch;
