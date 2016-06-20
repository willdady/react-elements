'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
  displayName: 'Tab',


  propTypes: {
    tabIndex: _react.PropTypes.number,
    selected: _react.PropTypes.bool,
    onClick: _react.PropTypes.func.isRequired
  },

  onClick: function onClick() {
    this.props.onClick(this.props.tabIndex);
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-tabs__tab', {
      're-tabs__tab--selected': this.props.selected
    });
    return _react2.default.createElement(
      'li',
      { className: className, onClick: this.onClick },
      this.props.children
    );
  }

});

var Tabs = _react2.default.createClass({
  displayName: 'Tabs',


  propTypes: {
    initialIndex: _react.PropTypes.number,
    block: _react.PropTypes.bool,
    onChange: _react.PropTypes.func.isRequired,
    children: _react.PropTypes.arrayOf(_react.PropTypes.element).isRequired
  },

  getInitialState: function getInitialState() {
    return {
      selectedIndex: this.props.initialIndex || 0
    };
  },

  onTabClick: function onTabClick(selectedIndex) {
    var _this = this;

    this.setState({ selectedIndex: selectedIndex }, function () {
      return _this.props.onChange(selectedIndex);
    });
  },

  render: function render() {
    var _this2 = this;

    var tabs = this.props.children.map(function (child, i) {
      return _react2.default.createElement(
        Tab,
        {
          key: i,
          tabIndex: i,
          selected: i === _this2.state.selectedIndex,
          onClick: _this2.onTabClick
        },
        child
      );
    });

    var className = (0, _classnames2.default)('re-tabs', {
      're-tabs--block': this.props.block
    }, this.props.className);
    return _react2.default.createElement(
      'ul',
      { className: className },
      tabs
    );
  }

});

exports.default = Tabs;
