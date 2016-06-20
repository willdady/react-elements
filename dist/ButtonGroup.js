'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = _react2.default.createClass({
  displayName: 'ButtonGroup',


  propTypes: {
    children: _react.PropTypes.arrayOf(_react.PropTypes.instanceOf(_Button2.default)),
    stacked: _react.PropTypes.bool
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-btn-group', { 're-btn-group--stacked': this.props.stacked }, this.props.className);
    return _react2.default.createElement(
      'ul',
      { className: className },
      this.props.children.map(function (child) {
        return _react2.default.createElement(
          'li',
          { className: 're-btn-group__item' },
          child
        );
      })
    );
  }

});

exports.default = ButtonGroup;
