'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isString = require('lodash/isString');

var _isString2 = _interopRequireDefault(_isString);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelHeader = _react2.default.createClass({
  displayName: 'PanelHeader',


  render: function render() {
    var children = this.props.children;
    if ((0, _isString2.default)(children)) {
      children = _react2.default.createElement(
        'h3',
        { className: 're-panel__header-heading' },
        children
      );
    }
    return _react2.default.createElement(
      'header',
      { className: 're-panel__header' },
      children
    );
  }

});

var PanelFooter = _react2.default.createClass({
  displayName: 'PanelFooter',


  render: function render() {
    return _react2.default.createElement(
      'footer',
      { className: 're-panel__footer' },
      this.props.children
    );
  }

});

var Panel = _react2.default.createClass({
  displayName: 'Panel',


  propTypes: {
    header: _react.PropTypes.element,
    footer: _react.PropTypes.element
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-panel', this.props.className);

    var header = void 0;
    if (this.props.header) {
      header = _react2.default.createElement(
        PanelHeader,
        null,
        this.props.header
      );
    }

    var footer = void 0;
    if (this.props.footer) {
      footer = _react2.default.createElement(
        PanelFooter,
        null,
        this.props.footer
      );
    }

    return _react2.default.createElement(
      'section',
      { className: className },
      header,
      _react2.default.createElement(
        'div',
        { className: 're-panel__content' },
        this.props.children
      ),
      footer
    );
  }

});

exports.default = Panel;
