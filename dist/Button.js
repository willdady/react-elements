'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _LoadingSpinner = require('./LoadingSpinner');

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
  displayName: 'Button',


  propTypes: {
    btnStyle: _react.PropTypes.string,
    block: _react.PropTypes.bool,
    processing: _react.PropTypes.bool,
    loadingSpinnerColor: _react.PropTypes.string,
    loadingSpinnerBackgroundColor: _react.PropTypes.string
  },

  render: function render() {
    var btnStyle = this.props.btnStyle;
    var className = (0, _classnames2.default)('re-btn', {
      're-btn--default': !btnStyle || btnStyle === 'default',
      're-btn--primary': btnStyle === 'primary',
      're-btn--danger': btnStyle === 'danger',
      're-btn--link': btnStyle === 'link',
      're-btn--block': this.props.block,
      're-btn--processing': this.props.processing
    }, this.props.className);
    var props = (0, _omit2.default)(this.props, ['btnStyle', 'block', 'processing']);
    props.type = props.type ? props.type : 'button';

    var spinner = void 0;
    if (this.props.processing) {
      spinner = _react2.default.createElement(_LoadingSpinner2.default, {
        className: 're-btn__spinner',
        color: this.props.loadingSpinnerColor || '#fff',
        backgroundColor: this.props.loadingSpinnerBackgroundColor,
        mini: true
      });
    }

    return _react2.default.createElement(
      'button',
      _extends({}, props, { className: className }),
      spinner,
      _react2.default.createElement(
        'span',
        { className: 're-btn__content' },
        this.props.children
      )
    );
  }

});

exports.default = Button;
