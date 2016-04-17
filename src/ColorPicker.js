var React = require("react"),
    tinycolor = require("tinycolor2");


var SB_PICKER_WIDTH = SB_PICKER_HEIGHT = 128;
var SB_PICKER_CURSOR_WIDTH = SB_PICKER_CURSOR_HEIGHT = 14;
var H_PICKER_HEIGHT = 128;
var H_PICKER_CURSOR_HEIGHT = 3;


var TwoStopGradient = React.createClass({

  getDefaultProps: function() {
    return {
      horizontal: false
    };
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
      <div className={this.props.className} style={styles}></div>
    );
  }

});


var SaturationBrightnessCursor = React.createClass({

  getDefaultProps: function() {
    return {
      position: {x: 0, y: 0}
    };
  },

  propTypes: {
    position: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }).isRequired
  },

  render: function() {
    // We center the cursor around our x/y position
    var style = {
      left: this.props.position.x - Math.round(SB_PICKER_CURSOR_WIDTH * 0.5),
      top: this.props.position.y - Math.round(SB_PICKER_CURSOR_HEIGHT * 0.5)
    };
    return (
      <div className="rui-color-picker__sb-picker-cursor" style={style}></div>
    );
  }

});


var SaturationBrightnessPicker = React.createClass({

  getInitialState: function() {
    return {
      cursorPosition: {
        x: Math.round(SB_PICKER_WIDTH * this.props.saturation),
        y: Math.round(SB_PICKER_HEIGHT * (1 - this.props.brightness))
      },
      mouseDown: false,
      hue: 0
    };
  },

  getDefaultProps: function() {
    return {
      saturation: 1,
      brightness: 0
    };
  },

  propTypes: {
    onChange: React.PropTypes.func.isRequired,
    hue: React.PropTypes.number.isRequired,
    saturation: React.PropTypes.number,
    brightness: React.PropTypes.number,
  },

  onMouseDownHandler: function(e) {
    e.preventDefault();
    window.addEventListener("mouseup", this.onMouseUpHandler);
    window.addEventListener("mousemove", this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageX, e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener("mouseup", this.onMouseUpHandler);
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
    this._update(e.pageX, e.pageY, false);
  },

  onMouseMoveHandler: function(e) {
    this._update(e.pageX, e.pageY, true);
  },

  _update: function(pageX, pageY, mouseDown) {
    // Get the position of the root element relative to the document.
    var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    // Convert coordinates into local space.
    var x = pageX - rootPos.left;
    var y = pageY - (rootPos.top + window.scrollY);
    // Keep x and y within our bounds
    x = x < 0 ? 0 : x;
    x = x > SB_PICKER_WIDTH ? SB_PICKER_WIDTH : x;
    y = y < 0 ? 0 : y;
    y = y > SB_PICKER_HEIGHT ? SB_PICKER_HEIGHT : y;
    // Normalize to saturation and brightness ratios
    var saturation = x / SB_PICKER_WIDTH;
    var brightness = 1 - (y / SB_PICKER_HEIGHT);
    this.setState({
      mouseDown: mouseDown,
      cursorPosition: {x: x, y: y}
    });
    this.props.onChange(saturation, brightness);
  },

  render: function() {
    var className = "rui-color-picker__sb-picker";
    className += this.state.mouseDown ? " rui-color-picker__sb-picker--dragging" : "";

    var hue = "hsl("+Math.round(360 * this.props.hue)+", 100%, 50%)";

    return(
      <div className={className}
           ref="root"
           onMouseDown={this.onMouseDownHandler}>
        <TwoStopGradient className="rui-color-picker__sb-picker-layer"
                         color1="white"
                         color2={hue}
                         horizontal={true}/>
        <TwoStopGradient className="rui-color-picker__sb-picker-layer"
                         color1="rgba(0, 0, 0, 0)"
                         color2="black" />
        <SaturationBrightnessCursor position={this.state.cursorPosition} />
      </div>
    );
  }

});


var HuePickerCursor = React.createClass({

  getDefaultProps: function() {
    return {
      position: 0
    };
  },

  render: function() {
    // We vertically center the cursor around our y position and make sure
    // we're always within HuePicker's bounds.
    var y = this.props.position - Math.floor(H_PICKER_CURSOR_HEIGHT * 0.5);
    y = (y + H_PICKER_CURSOR_HEIGHT) > H_PICKER_HEIGHT ?
        H_PICKER_HEIGHT - H_PICKER_CURSOR_HEIGHT :
        y;
    y = y < 0 ? 0 : y;
    var styles = {
      top: y
    };
    return (
      <div className="rui-color-picker__h-picker-cursor" style={styles}></div>
    );
  }

});


var HuePicker = React.createClass({

  getInitialState: function() {
    return {
      mouseDown: false,
      cursorPosition: Math.round(H_PICKER_HEIGHT * this.props.hue)
    };
  },

  propTypes: {
    hue: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  onMouseDownHandler: function(e) {
    e.preventDefault();
    window.addEventListener("mouseup", this.onMouseUpHandler);
    window.addEventListener("mousemove", this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener("mouseup", this.onMouseUpHandler);
    window.removeEventListener("mousemove", this.onMouseMoveHandler);
    this._update(e.pageY, false);
  },

  onMouseMoveHandler: function(e) {
    this._update(e.pageY, true);
  },

  _update: function(pageY, mouseDown) {
    // Get the position of the root element relative to the document.
    var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    // Convert coordinate into local space.
    var y = pageY - (rootPos.top + window.scrollY);
    // Keep y within our bounds
    y = y < 0 ? 0 : y;
    y = y > H_PICKER_HEIGHT ? H_PICKER_HEIGHT : y;
    // Normalize to a ratio
    var hue = y / H_PICKER_HEIGHT;
    this.setState({
      mouseDown: mouseDown,
      cursorPosition: y
    });
    this.props.onChange(hue);
  },

  render: function() {
    var className = "rui-color-picker__h-picker";
    className += this.state.mouseDown ? " rui-color-picker__h-picker--dragging" : "";
    return (
      <div className={className} onMouseDown={this.onMouseDownHandler} ref="root">
        <HuePickerCursor position={this.state.cursorPosition} />
      </div>
    );
  }

});

var ColorPicker = React.createClass({

  getInitialState: function() {
    var hsv = tinycolor(this.props.color).toHsv();
    return {
      hue: hsv.h / 360,
      saturation: hsv.s,
      brightness: hsv.v
    };
  },

  propTypes: {
    color: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    onChange: React.PropTypes.func.isRequired
  },

  saturationBrightnessChangeHandler: function(saturation, brightness) {
    this.setState({
      saturation: saturation,
      brightness: brightness
    });
    this._update();
  },

  hueChangeHandler: function(hue) {
    this.setState({
      hue: hue
    });
    this._update();
  },

  _update: function() {
    var color = tinycolor({
      h: Math.round(360 * this.state.hue),
      s: this.state.saturation,
      v: this.state.brightness
    });
    this.props.onChange(color);
  },

  render: function() {
    return(
      <div>
        <SaturationBrightnessPicker onChange={this.saturationBrightnessChangeHandler}
                                    hue={this.state.hue}
                                    saturation={this.state.saturation}
                                    brightness={this.state.brightness} />
        <HuePicker onChange={this.hueChangeHandler}
                   hue={this.state.hue} />
      </div>
    );
  }

});


module.exports = ColorPicker;
