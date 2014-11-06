var React = require("react");


var FloatingLabelInput = React.createClass({displayName: 'FloatingLabelInput',

  getDefaultProps: function() {
    return {
      type: "text"
    }
  },

  getInitialState: function() {
    return {
      floated: this.props.value ? this.props.value.length > 0 : false,
      animating: false,
    }
  },

  onChangeHandler: function() {
    var inputValue = this.refs.input.getDOMNode().value, _this = this;

    if (!inputValue.length) {
      this.setState({floated: false, animating: false});
      return;
    }

    this.setState({animating: true});
    requestAnimationFrame(function() {
      _this.setState({floated: true});
    });
  },

  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  render: function() {

    var labelClass = "rui-floating-label-input__label";
    labelClass += this.state.animating ? " rui-floating-label-input__label--floated" : "";
    labelClass += this.state.floated ? " rui-floating-label-input__label--floated-active" : "";

    return(
      React.createElement("div", {className: "rui-floating-label-input"}, 
        React.createElement("label", {htmlFor: this.props.id, className: labelClass}, this.props.label), 
        React.createElement("input", {id: this.props.id, type: this.props.type, value: this.props.value, name: this.props.name, ref: "input", onChange: this.onChangeHandler, className: "rui-floating-label-input__input form-control"})
      )
    );
  }

});


module.exports = FloatingLabelInput;
