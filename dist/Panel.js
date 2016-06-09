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


  propTypes: {
    textAlign: _react.PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function render() {
    var children = this.props.children;
    if ((0, _isString2.default)(children)) {
      children = _react2.default.createElement(
        'h3',
        { className: 're-panel__header-heading' },
        children
      );
    }
    var className = (0, _classnames2.default)('re-panel__header', {
      're-panel__header--text-left': this.props.textAlign === 'left',
      're-panel__header--text-center': this.props.textAlign === 'center',
      're-panel__header--text-right': this.props.textAlign === 'right'
    });
    return _react2.default.createElement(
      'header',
      { className: className },
      children
    );
  }

});

var PanelFooter = _react2.default.createClass({
  displayName: 'PanelFooter',


  propTypes: {
    textAlign: _react.PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-panel__footer', {
      're-panel__footer--text-left': this.props.textAlign === 'left',
      're-panel__footer--text-center': this.props.textAlign === 'center',
      're-panel__footer--text-right': this.props.textAlign === 'right'
    });
    return _react2.default.createElement(
      'footer',
      { className: className },
      this.props.children
    );
  }

});

var Panel = _react2.default.createClass({
  displayName: 'Panel',


  propTypes: {
    header: _react.PropTypes.node,
    footer: _react.PropTypes.node,
    headerTextAlign: _react.PropTypes.oneOf(['left', 'center', 'right']),
    footerTextAlign: _react.PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-panel', this.props.className);

    if (this.props.header) {
      var header = _react2.default.createElement(
        PanelHeader,
        { textAlign: this.props.headerTextAlign },
        this.props.header
      );
    }

    if (this.props.footer) {
      var footer = _react2.default.createElement(
        PanelFooter,
        { textAlign: this.props.footerTextAlign },
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
