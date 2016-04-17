"use strict";

var React = require("react");
var classSet = require("../utils/ClassSet");
var _ = require("underscore");

var SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};

var Switch = React.createClass({
  displayName: "Switch",


  getInitialState: function getInitialState() {
    return {
      on: this.props.on || false
    };
  },

  propTypes: {
    name: React.PropTypes.string,
    on: React.PropTypes.bool,
    size: React.PropTypes.oneOf(_.values(SIZES)),
    onChange: React.PropTypes.func
  },

  checkboxChangeHandler: function checkboxChangeHandler() {
    this.setState({
      on: !this.state.on
    });
    if (this.props.onChange) this.props.onChange(this.state.on);
  },

  render: function render() {
    var className = classSet({
      "rui-toggle-switch": true,
      "rui-toggle-switch--on": this.state.on,
      "rui-toggle-switch--xs": this.props.size === SIZES.EXTRA_SMALL,
      "rui-toggle-switch--sm": this.props.size === SIZES.SMALL,
      "rui-toggle-switch--lg": this.props.size === SIZES.LARGE
    });

    return React.createElement(
      "span",
      { className: className },
      React.createElement("input", { type: "checkbox",
        name: this.props.name,
        className: "rui-toggle-switch__checkbox",
        checked: this.state.on,
        onChange: this.checkboxChangeHandler }),
      React.createElement("span", { className: "rui-toggle-switch__switch" })
    );
  }
});

module.exports = Switch;
