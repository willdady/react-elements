'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = _react2.default.createClass({
  displayName: 'ButtonGroup',


  propTypes: {
    stacked: _react.PropTypes.bool
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-btn-group', { 're-btn-group--stacked': this.props.stacked }, this.props.className);
    return _react2.default.createElement(
      'ul',
      { className: className },
      this.props.children.map(function (child, i) {
        return _react2.default.createElement(
          'li',
          { className: 're-btn-group__item', key: 'item-' + i },
          child
        );
      })
    );
  }

});

exports.default = ButtonGroup;
