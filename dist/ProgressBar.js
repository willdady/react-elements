'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = _react2.default.createClass({
  displayName: 'ProgressBar',


  propTypes: {
    progress: _react.PropTypes.number.isRequired
  },

  render: function render() {
    var percentage = this.props.progress * 100;
    var innerStyle = { width: percentage + '%' };
    var className = (0, _classnames2.default)('re-progress-bar', this.props.className, {
      're-progress-bar--complete': percentage === 100
    });
    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement('div', { className: 're-progress-bar__bar', style: innerStyle })
    );
  }

});

exports.default = ProgressBar;
