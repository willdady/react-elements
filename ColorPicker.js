/**
 * @jsx React.DOM
 */

var $ = require("jquery"),
    React = require("react"),
    tinycolor = require("tinycolor2");



var TwoStopGradient = React.createClass({displayName: 'TwoStopGradient',

  getDefaultProps: function() {
    return {
      horizontal: false
    }
  },

  propTypes: {
    color1: React.PropTypes.string.isRequired,
    color2: React.PropTypes.string.isRequired,
    horizontal: React.PropTypes.bool
  },

  render: function() {
    var angle = this.props.horizontal ? "to right, " : "";
    var styles = {
      background: "linear-gradient("+angle+this.props.color1+", "+this.props.color2+")"
    };
    return (
      React.DOM.div({className: this.props.className, style: styles})
    )
  }

});


var SaturationBrightnessCursor = React.createClass({displayName: 'SaturationBrightnessCursor',

  getDefaultProps: function() {
    return {
      position: {x: 0, y: 0}
    }
  },

  propTypes: {
    position: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }).isRequired
  },

  render: function() {
    var style = {
      left: this.props.position.x,
      top: this.props.position.y
    };
    return (
      React.DOM.div({className: "rui-color-picker__sb-picker-cursor", style: style}, 
        React.DOM.div({className: "rui-color-picker__sb-picker-cursor-circle"})
      )
    )
  }

});


var SaturationBrightnessPicker = React.createClass({displayName: 'SaturationBrightnessPicker',

  getInitialState: function() {
    return {
      cursorPosition: {x: 0, y: 0},
      mouseDown: false,
      hue: 0 // A value between 0-1
    }
  },

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    hue: React.PropTypes.number.isRequired
  },

  onMouseDownHandler: function(e) {
    window.addEventListener("mouseup", this.onMouseUpHandler);
    window.addEventListener("mousemove", this.onMouseMoveHandler);
    this.setState({
      mouseDown: true
    });
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener("mouseup", this.onMouseUpHandler);
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
    this.setState({
      mouseDown: false,
      cursorPosition: this._positionCursor(e.pageX, e.pageY)
    });
  },

  onMouseMoveHandler: function(e) {
    this.setState({
      cursorPosition: this._positionCursor(e.pageX, e.pageY)
    })
  },

  _positionCursor: function(pageX, pageY) {
    // Get the position of the root element relative to the document.
    var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    // Convert coordinates into local space.
    var x = pageX - rootPos.left;
    var y = pageY - rootPos.top;
    // Keep x and y within our bounds
    x = x < 0 ? 0 : x;
    x = x > 128 ? 128 : x;
    y = y < 0 ? 0 : y;
    y = y > 128 ? 128 : y;
    // Normalize to saturation and brightness ratios
    var saturation = x / 128;
    var brightness = 1 - (y / 128);
    this.props.onChange(saturation, brightness);
    return {x: x, y: y};
  },

  render: function() {
    var className = "rui-color-picker__sb-picker";
    className += this.state.mouseDown ? " rui-color-picker__sb-picker--dragging" : "";

    var hue = "hsl("+Math.round(360 * this.props.hue)+", 100%, 50%)";

    return(
      React.DOM.div({className: className, 
           ref: "root", 
           onMouseDown: this.onMouseDownHandler}, 
        TwoStopGradient({className: "rui-color-picker__sb-picker-layer", 
                         color1: "white", 
                         color2: hue, 
                         horizontal: true}), 
        TwoStopGradient({className: "rui-color-picker__sb-picker-layer", 
                         color1: "rgba(0, 0, 0, 0)", 
                         color2: "black"}), 
        SaturationBrightnessCursor({position: this.state.cursorPosition})
      )
    )
  }

});


var HuePickerCursor = React.createClass({displayName: 'HuePickerCursor',

  getDefaultProps: function() {
    return {
      position: 0
    }
  },

  render: function() {
    var styles = {
      top: this.props.position
    };
    return (
      React.DOM.div({className: "rui-color-picker__h-picker-cursor", style: styles})
    );
  }

});


var HuePicker = React.createClass({displayName: 'HuePicker',

  getInitialState: function() {
    return {
      mouseDown: false,
      cursorPosition: 0
    }
  },

  onMouseDownHandler: function(e) {
    window.addEventListener("mouseup", this.onMouseUpHandler);
    window.addEventListener("mousemove", this.onMouseMoveHandler);
    this.setState({
      mouseDown: true
    });
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener("mouseup", this.onMouseUpHandler);
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
    this.setState({
      mouseDown: false,
      cursorPosition: this._positionCursor(e.pageY)
    });
  },

  onMouseMoveHandler: function(e) {
    this.setState({
      cursorPosition: this._positionCursor(e.pageY)
    })
  },

  _positionCursor: function(pageY) {
    // Get the position of the root element relative to the document.
    var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    // Convert coordinate into local space.
    var y = pageY - rootPos.top;
    // Keep y within our bounds
    y = y < 0 ? 0 : y;
    y = y > 128 ? 128 : y;
    // Normalize a ratio
    var hue = y / 128;
    this.props.onChange(hue);

    return y;
  },

  render: function() {
    var className = "rui-color-picker__h-picker";
    className += this.state.mouseDown ? " rui-color-picker__h-picker--dragging" : "";
    return (
      React.DOM.div({className: className, onMouseDown: this.onMouseDownHandler, ref: "root"}, 
        HuePickerCursor({position: this.state.cursorPosition})
      )
    );
  }

});

var ColorPicker = React.createClass({displayName: 'ColorPicker',

  getInitialState: function() {
    return {
      hue: 0,
      saturation: 0,
      brightness: 0
    }
  },

  propTypes: {
    onChange: React.PropTypes.func.isRequired
  },

  saturationBrightnessChangeHandler: function(saturation, brightness) {
    this.setState({
      saturation: saturation,
      brightness: brightness
    });
    this._change();
  },

  hueChangeHandler: function(hue) {
    this.setState({
      hue: hue
    });
    this._change();
  },

  _change: function() {
    var color = tinycolor({
      h: Math.round(360 * this.state.hue),
      s: this.state.saturation,
      l: this.state.brightness
    });
    this.props.onChange(color);
  },

  render: function() {
    return(
      React.DOM.div(null, 
        SaturationBrightnessPicker({onChange: this.saturationBrightnessChangeHandler, 
                                    hue: this.state.hue}), 
        HuePicker({onChange: this.hueChangeHandler})
      )
    )
  }

});


module.exports = ColorPicker;
