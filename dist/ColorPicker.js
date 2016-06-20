'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SB_PICKER_WIDTH = 128;
var SB_PICKER_HEIGHT = 128;
var SB_PICKER_CURSOR_WIDTH = 14;
var SB_PICKER_CURSOR_HEIGHT = 14;
var H_PICKER_HEIGHT = 128;
var H_PICKER_CURSOR_HEIGHT = 3;

var TwoStopGradient = _react2.default.createClass({
  displayName: 'TwoStopGradient',


  getDefaultProps: function getDefaultProps() {
    return {
      horizontal: false
    };
  },

  propTypes: {
    color1: _react.PropTypes.string.isRequired,
    color2: _react.PropTypes.string.isRequired,
    horizontal: _react.PropTypes.bool
  },

  render: function render() {
    var angle = this.props.horizontal ? 'to right, ' : '';
    var styles = {
      background: 'linear-gradient(' + angle + this.props.color1 + ', ' + this.props.color2 + ')'
    };
    return _react2.default.createElement('div', { className: this.props.className, style: styles });
  }

});

var SaturationBrightnessCursor = _react2.default.createClass({
  displayName: 'SaturationBrightnessCursor',


  getDefaultProps: function getDefaultProps() {
    return {
      position: {
        x: 0,
        y: 0
      }
    };
  },

  propTypes: {
    position: _react.PropTypes.shape({
      x: _react.PropTypes.number,
      y: _react.PropTypes.number
    }).isRequired
  },

  render: function render() {
    // We center the cursor around our x/y position
    var style = {
      left: this.props.position.x - Math.round(SB_PICKER_CURSOR_WIDTH * 0.5),
      top: this.props.position.y - Math.round(SB_PICKER_CURSOR_HEIGHT * 0.5)
    };
    return _react2.default.createElement('div', { className: 're-color-picker__sb-picker-cursor', style: style });
  }

});

var SaturationBrightnessPicker = _react2.default.createClass({
  displayName: 'SaturationBrightnessPicker',


  getInitialState: function getInitialState() {
    return {
      cursorPosition: {
        x: Math.round(SB_PICKER_WIDTH * this.props.saturation),
        y: Math.round(SB_PICKER_HEIGHT * (1 - this.props.brightness))
      },
      mouseDown: false,
      hue: 0
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      saturation: 1,
      brightness: 0
    };
  },

  propTypes: {
    onChange: _react.PropTypes.func.isRequired,
    hue: _react.PropTypes.number.isRequired,
    saturation: _react.PropTypes.number,
    brightness: _react.PropTypes.number
  },

  onMouseDownHandler: function onMouseDownHandler(e) {
    e.preventDefault();
    window.addEventListener('mouseup', this.onMouseUpHandler);
    window.addEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageX, e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function onMouseUpHandler(e) {
    window.removeEventListener('mouseup', this.onMouseUpHandler);
    window.removeEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.pageX, e.pageY, false);
  },

  onMouseMoveHandler: function onMouseMoveHandler(e) {
    this._update(e.pageX, e.pageY, true);
  },

  _update: function _update(pageX, pageY, mouseDown) {
    var _this = this;

    // Get the position of the root element relative to the document.
    // var rootPos = this.refs.root.getDOMNode().getBoundingClientRect();
    var rootPos = this._root.getBoundingClientRect();
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
    var brightness = 1 - y / SB_PICKER_HEIGHT;
    this.setState({
      mouseDown: mouseDown,
      cursorPosition: { x: x, y: y }
    }, function () {
      return _this.props.onChange(saturation, brightness);
    });
  },

  render: function render() {
    var _this2 = this;

    var className = (0, _classnames2.default)({
      're-color-picker__sb-picker': true,
      're-color-picker__sb-picker--dragging': this.state.mouseDown
    });

    var hue = 'hsl(' + Math.round(360 * this.props.hue) + ', 100%, 50%)';

    return _react2.default.createElement(
      'div',
      { className: className,
        ref: function ref(c) {
          return _this2._root = c;
        },
        onMouseDown: this.onMouseDownHandler
      },
      _react2.default.createElement(TwoStopGradient, {
        className: 're-color-picker__sb-picker-layer',
        color1: 'white',
        color2: hue,
        horizontal: true
      }),
      _react2.default.createElement(TwoStopGradient, {
        className: 're-color-picker__sb-picker-layer',
        color1: 'rgba(0, 0, 0, 0)',
        color2: 'black'
      }),
      _react2.default.createElement(SaturationBrightnessCursor, { position: this.state.cursorPosition })
    );
  }

});

var HuePickerCursor = _react2.default.createClass({
  displayName: 'HuePickerCursor',


  propTypes: {
    position: _react.PropTypes.number
  },

  getDefaultProps: function getDefaultProps() {
    return { position: 0 };
  },

  render: function render() {
    // We vertically center the cursor around our y position and make sure
    // we're always within HuePicker's bounds.
    var y = this.props.position - Math.floor(H_PICKER_CURSOR_HEIGHT * 0.5);
    y = y + H_PICKER_CURSOR_HEIGHT > H_PICKER_HEIGHT ? H_PICKER_HEIGHT - H_PICKER_CURSOR_HEIGHT : y;
    y = y < 0 ? 0 : y;
    var styles = {
      top: y
    };
    return _react2.default.createElement('div', { className: 're-color-picker__h-picker-cursor', style: styles });
  }

});

var HuePicker = _react2.default.createClass({
  displayName: 'HuePicker',


  getInitialState: function getInitialState() {
    return {
      mouseDown: false,
      cursorPosition: Math.round(H_PICKER_HEIGHT * this.props.hue)
    };
  },

  propTypes: {
    hue: _react.PropTypes.number.isRequired,
    onChange: _react.PropTypes.func.isRequired
  },

  onMouseDownHandler: function onMouseDownHandler(e) {
    e.preventDefault();
    window.addEventListener('mouseup', this.onMouseUpHandler);
    window.addEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.nativeEvent.pageY, true);
  },

  onMouseUpHandler: function onMouseUpHandler(e) {
    window.removeEventListener('mouseup', this.onMouseUpHandler);
    window.removeEventListener('mousemove', this.onMouseMoveHandler);
    this._update(e.pageY, false);
  },

  onMouseMoveHandler: function onMouseMoveHandler(e) {
    this._update(e.pageY, true);
  },

  _update: function _update(pageY, mouseDown) {
    var _this3 = this;

    // Get the position of the root element relative to the document.
    var rootPos = this._root.getBoundingClientRect();
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
    }, function () {
      return _this3.props.onChange(hue);
    });
  },

  render: function render() {
    var _this4 = this;

    var className = (0, _classnames2.default)({
      're-color-picker__h-picker': true,
      're-color-picker__h-picker--dragging': this.state.mouseDown
    });

    return _react2.default.createElement(
      'div',
      {
        className: className,
        onMouseDown: this.onMouseDownHandler,
        ref: function ref(c) {
          return _this4._root = c;
        }
      },
      _react2.default.createElement(HuePickerCursor, { position: this.state.cursorPosition })
    );
  }

});

var ColorPicker = _react2.default.createClass({
  displayName: 'ColorPicker',


  getInitialState: function getInitialState() {
    var hsv = (0, _tinycolor2.default)(this.props.color).toHsv();
    return {
      hue: hsv.h / 360,
      saturation: hsv.s,
      brightness: hsv.v
    };
  },

  propTypes: {
    color: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    onChange: _react.PropTypes.func.isRequired
  },

  saturationBrightnessChangeHandler: function saturationBrightnessChangeHandler(saturation, brightness) {
    var _this5 = this;

    this.setState({
      saturation: saturation,
      brightness: brightness
    }, function () {
      return _this5._update();
    });
  },

  hueChangeHandler: function hueChangeHandler(hue) {
    var _this6 = this;

    this.setState({
      hue: hue
    }, function () {
      return _this6._update();
    });
  },

  _update: function _update() {
    var color = (0, _tinycolor2.default)({
      h: Math.round(360 * this.state.hue),
      s: this.state.saturation,
      v: this.state.brightness
    });
    this.props.onChange(color);
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-color-picker', this.props.className);
    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(SaturationBrightnessPicker, {
        onChange: this.saturationBrightnessChangeHandler,
        hue: this.state.hue,
        saturation: this.state.saturation,
        brightness: this.state.brightness
      }),
      _react2.default.createElement(HuePicker, { onChange: this.hueChangeHandler, hue: this.state.hue })
    );
  }

});

exports.default = ColorPicker;
