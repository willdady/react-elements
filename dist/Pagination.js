'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationItem = _react2.default.createClass({
  displayName: 'PaginationItem',


  propTypes: {
    onClick: _react.PropTypes.func.isRequired,
    value: _react.PropTypes.node,
    active: _react.PropTypes.bool
  },

  onClick: function onClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.value);
  },

  render: function render() {
    var className = (0, _classnames2.default)('re-pagination__item', {
      're-pagination__item--active': this.props.active
    }, this.props.className);
    return _react2.default.createElement(
      'li',
      { className: className, key: this.props.value },
      _react2.default.createElement(
        'a',
        {
          className: 're-pagination__item-link',
          href: '#',
          onClick: this.onClick
        },
        Array.isArray(this.props.value) ? '…' : this.props.value
      )
    );
  }

});

var Pagination = _react2.default.createClass({
  displayName: 'Pagination',


  propTypes: {
    totalPages: _react.PropTypes.number.isRequired,
    currentPage: _react.PropTypes.number.isRequired,
    onClick: _react.PropTypes.func.isRequired,
    onNext: _react.PropTypes.func,
    onPrevious: _react.PropTypes.func
  },

  onPrevious: function onPrevious() {
    this.props.onPrevious(this.props.currentPage - 1);
  },

  onNext: function onNext() {
    this.props.onNext(this.props.currentPage + 1);
  },

  render: function render() {
    var _this = this;

    // If there's only one page we don't render anything.
    if (this.props.totalPages === 1) return null;

    var lastPageNumber = this.props.totalPages + 1;
    var pageNumbers = (0, _range2.default)(1, lastPageNumber);
    var maxSize = 12; // Must not be < 12.
    if (this.props.totalPages > maxSize) {
      // Last, Second-last, Third-last or Forth-last page selected
      if (this.props.currentPage >= lastPageNumber - 6) {
        pageNumbers = (0, _range2.default)(lastPageNumber - (maxSize - 2), lastPageNumber);
        pageNumbers.unshift(1, [2, lastPageNumber - (maxSize - 2) - 1]);
        // First, Second, Third or Forth page selected
      } else if (this.props.currentPage <= 6) {
          pageNumbers = (0, _range2.default)(1, maxSize - 1);
          pageNumbers.push([maxSize - 1, this.props.totalPages - 1], this.props.totalPages);
          // Everything else
        } else {
            pageNumbers = [1, [2, this.props.currentPage - 4], this.props.currentPage - 3, this.props.currentPage - 2, this.props.currentPage - 1, this.props.currentPage, this.props.currentPage + 1, this.props.currentPage + 2, this.props.currentPage + 3, [this.props.currentPage + 4, this.props.totalPages - 1], this.props.totalPages];
          }
    }

    var items = pageNumbers.map(function (value) {
      return _react2.default.createElement(PaginationItem, {
        value: value,
        key: value,
        active: _this.props.currentPage === value,
        onClick: _this.props.onClick
      });
    });

    if (this.props.onPrevious && this.props.currentPage !== 1) {
      items.unshift(_react2.default.createElement(PaginationItem, {
        value: '«',
        key: '«',
        onClick: this.onPrevious
      }));
    }
    if (this.props.onNext && this.props.currentPage !== this.props.totalPages) {
      items.push(_react2.default.createElement(PaginationItem, {
        value: '»',
        key: '»',
        onClick: this.onNext
      }));
    }

    var className = (0, _classnames2.default)('re-pagination', this.props.className);
    return _react2.default.createElement(
      'ul',
      { className: className },
      items
    );
  }

});

exports.default = Pagination;
