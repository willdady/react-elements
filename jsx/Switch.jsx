/**
 * @jsx React.DOM
 */

var React = require("react");


var Switch = React.createClass({

  getInitialState: function() {
    return {
      on: this.props.on || false
    }
  },

  checkboxChangeHandler: function() {
    this.setState({
      on: !this.state.on
    });
    if (this.props.onChange) this.props.onChange(this.state.on);
  },

  render: function() {
    var className = "rui-toggle-switch" + (this.state.on ? " rui-toggle-switch--on" : "");

    return (
      <span className={className}>
        <input type="checkbox"
               className="rui-toggle-switch__checkbox"
               checked={this.state.on}
               onChange={this.checkboxChangeHandler} />
        <span className="rui-toggle-switch__switch"></span>
      </span>
    )
  }
});

module.exports = Switch;
