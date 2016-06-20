import React, { PropTypes } from 'react';
import tinycolor from 'tinycolor2';
import classNames from 'classnames';


const SB_PICKER_WIDTH = 128;
const SB_PICKER_HEIGHT = 128;
const SB_PICKER_CURSOR_WIDTH = 14;
const SB_PICKER_CURSOR_HEIGHT = 14;
const H_PICKER_HEIGHT = 128;
const H_PICKER_CURSOR_HEIGHT = 3;


const TwoStopGradient = React.createClass({

  getDefaultProps: function() {
    return {
      horizontal: false
    };
  },

  propTypes: {
    color1: PropTypes.string.isRequired,
    color2: PropTypes.string.isRequired,
    horizontal: PropTypes.bool
  },

  render: function() {
    let angle = this.props.horizontal ? 'to right, ' : '';
    let styles = {
      background: `linear-gradient(${angle}${this.props.color1}, ${this.props.color2})`
    };
    return (
      <div className={this.props.className} style={styles}></div>
    );
  }

});


const SaturationBrightnessCursor = React.createClass({

  getDefaultProps: function() {
    return {
      position: {
        x: 0,
        y: 0
      }
    };
  },

  propTypes: {
    position: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number
    }).isRequired
  },

  render: function() {
    // We center the cursor around our x/y position
    let style = {
      left: this.props.position.x - Math.round(SB_PICKER_CURSOR_WIDTH * 0.5),
      top: this.props.position.y - Math.round(SB_PICKER_CURSOR_HEIGHT * 0.5)
    };
    return (
      <div className="re-color-picker__sb-picker-cursor" style={style}></div>
    );
  }

});


const SaturationBrightnessPicker = React.createClass({

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
    onChange: PropTypes.func.isRequired,
    hue: PropTypes.number.isRequired,
    saturation: PropTypes.number,
    brightness: PropTypes.number
  },

  onMouseDownHandler: function(e) {
    e.preventDefault();
    window.addEventListener('mouseup', this.onMouseUpHandler);
    window.addEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageX, e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener('mouseup', this.onMouseUpHandler);
    window.removeEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.pageX, e.pageY, false);
  },

  onMouseMoveHandler: function(e) {
    this._update(e.pageX, e.pageY, true);
  },

  _update: function(pageX, pageY, mouseDown) {
    // Get the position of the root element relative to the document.
    // var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    let rootPos = this._root.getBoundingClientRect();
    // Convert coordinates into local space.
    let x = pageX - rootPos.left;
    let y = pageY - (rootPos.top + window.scrollY);
    // Keep x and y within our bounds
    x = x < 0 ? 0 : x;
    x = x > SB_PICKER_WIDTH ? SB_PICKER_WIDTH : x;
    y = y < 0 ? 0 : y;
    y = y > SB_PICKER_HEIGHT ? SB_PICKER_HEIGHT : y;
    // Normalize to saturation and brightness ratios
    let saturation = x / SB_PICKER_WIDTH;
    let brightness = 1 - (y / SB_PICKER_HEIGHT);
    this.setState(
      {
        mouseDown: mouseDown,
        cursorPosition: {x: x, y: y}
      },
      () => this.props.onChange(saturation, brightness)
    );
  },

  render: function() {
    let className = classNames({
      're-color-picker__sb-picker': true,
      're-color-picker__sb-picker--dragging': this.state.mouseDown
    });

    let hue = 'hsl('+Math.round(360 * this.props.hue)+', 100%, 50%)';

    return(
      <div className={className}
           ref={(c) => this._root = c}
           onMouseDown={this.onMouseDownHandler}
      >
        <TwoStopGradient
          className="re-color-picker__sb-picker-layer"
          color1="white"
          color2={hue}
          horizontal={true}
        />
        <TwoStopGradient
          className="re-color-picker__sb-picker-layer"
          color1="rgba(0, 0, 0, 0)"
          color2="black"
        />
        <SaturationBrightnessCursor position={this.state.cursorPosition} />
      </div>
    );
  }

});


const HuePickerCursor = React.createClass({

  propTypes: {
    position: PropTypes.number
  },

  getDefaultProps: function() {
    return { position: 0 };
  },

  render: function() {
    // We vertically center the cursor around our y position and make sure
    // we're always within HuePicker's bounds.
    let y = this.props.position - Math.floor(H_PICKER_CURSOR_HEIGHT * 0.5);
    y = (y + H_PICKER_CURSOR_HEIGHT) > H_PICKER_HEIGHT ?
        H_PICKER_HEIGHT - H_PICKER_CURSOR_HEIGHT :
        y;
    y = y < 0 ? 0 : y;
    let styles = {
      top: y
    };
    return (
      <div className="re-color-picker__h-picker-cursor" style={styles}></div>
    );
  }

});


const HuePicker = React.createClass({

  getInitialState: function() {
    return {
      mouseDown: false,
      cursorPosition: Math.round(H_PICKER_HEIGHT * this.props.hue)
    };
  },

  propTypes: {
    hue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  },

  onMouseDownHandler: function(e) {
    e.preventDefault();
    window.addEventListener('mouseup', this.onMouseUpHandler);
    window.addEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function(e) {
    window.removeEventListener('mouseup', this.onMouseUpHandler);
    window.removeEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.pageY, false);
  },

  onMouseMoveHandler: function(e) {
    this._update(e.pageY, true);
  },

  _update: function(pageY, mouseDown) {
    // Get the position of the root element relative to the document.
    let rootPos = this._root.getBoundingClientRect();
    // Convert coordinate into local space.
    let y = pageY - (rootPos.top + window.scrollY);
    // Keep y within our bounds
    y = y < 0 ? 0 : y;
    y = y > H_PICKER_HEIGHT ? H_PICKER_HEIGHT : y;
    // Normalize to a ratio
    let hue = y / H_PICKER_HEIGHT;
    this.setState(
      {
        mouseDown: mouseDown,
        cursorPosition: y
      },
      () => this.props.onChange(hue)
    );
  },

  render: function() {
    let className = classNames({
      're-color-picker__h-picker': true,
      're-color-picker__h-picker--dragging': this.state.mouseDown
    });

    return (
      <div
        className={className}
        onMouseDown={this.onMouseDownHandler}
        ref={(c) => this._root = c}
      >
        <HuePickerCursor position={this.state.cursorPosition} />
      </div>
    );
  }

});


const ColorPicker = React.createClass({

  getInitialState: function() {
    let hsv = tinycolor(this.props.color).toHsv();
    return {
      hue: hsv.h / 360,
      saturation: hsv.s,
      brightness: hsv.v
    };
  },

  propTypes: {
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    onChange: PropTypes.func.isRequired
  },

  saturationBrightnessChangeHandler: function(saturation, brightness) {
    this.setState(
      {
        saturation: saturation,
        brightness: brightness
      },
      () => this._update()
    );
  },

  hueChangeHandler: function(hue) {
    this.setState(
      {
        hue: hue
      },
      () => this._update()
    );
  },

  _update: function() {
    let color = tinycolor({
      h: Math.round(360 * this.state.hue),
      s: this.state.saturation,
      v: this.state.brightness
    });
    this.props.onChange(color);
  },

  render: function() {
    let className = classNames('re-color-picker', this.props.className);
    return(
      <div className={className}>
        <SaturationBrightnessPicker
          onChange={this.saturationBrightnessChangeHandler}
          hue={this.state.hue}
          saturation={this.state.saturation}
          brightness={this.state.brightness}
        />
        <HuePicker onChange={this.hueChangeHandler} hue={this.state.hue} />
      </div>
    );
  }

});


export default ColorPicker;
