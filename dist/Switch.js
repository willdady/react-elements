'use strict';

var React = require("react");
var classNames = require('classnames');
var _values = require('lodash.values');

var SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};

var Switch = React.createClass({
  displayName: 'Switch',


  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.bool.isRequired,
    size: React.PropTypes.oneOf(_values(SIZES)),
    onClick: React.PropTypes.func
  },

  onClick: function onClick() {
    if (!this.props.onClick) return;
    this.props.onClick(this.props.value, this.props.name);
  },

  render: function render() {
    var className = classNames({
      "re-switch": true,
      "re-switch--on": this.props.value,
      "re-switch--xs": this.props.size === SIZES.EXTRA_SMALL,
      "re-switch--sm": this.props.size === SIZES.SMALL,
      "re-switch--lg": this.props.size === SIZES.LARGE
    });

    return React.createElement(
      'span',
      { className: className },
      React.createElement('input', { type: 'checkbox',
        name: this.props.name,
        className: 're-switch__checkbox',
        checked: this.props.value,
        onClick: this.onClick,
        readOnly: true }),
      React.createElement('span', { className: 're-switch__switch' })
    );
  }
});

module.exports = Switch;
