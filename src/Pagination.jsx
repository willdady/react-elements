import React, { PropTypes } from 'react';
import range from 'lodash/range';
import classnames from 'classnames';


const PaginationItem = React.createClass({

  propTypes: {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.node,
    active: PropTypes.bool
  },

  onClick: function (e) {
    e.preventDefault();
    this.props.onClick(this.props.value);
  },

  render: function() {
    let className = classnames(
      're-pagination__item',
      {
        're-pagination__item--active': this.props.active
      },
      this.props.className
    );
    return (
      <li className={className} key={this.props.value}>
        <a
          className="re-pagination__item-link"
          href="#"
          onClick={this.onClick}
        >
          {Array.isArray(this.props.value) ? '\u2026' : this.props.value}
        </a>
      </li>
    );
  }

});


const Pagination = React.createClass({

  propTypes: {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onNext: PropTypes.func,
    onPrevious: PropTypes.func
  },

  onPrevious: function () {
    this.props.onPrevious(this.props.currentPage - 1);
  },

  onNext: function () {
    this.props.onNext(this.props.currentPage + 1);
  },

  render: function() {
    // If there's only one page we don't render anything.
    if (this.props.totalPages === 1) return null;

    let lastPageNumber = this.props.totalPages + 1;
    let pageNumbers = range(1, lastPageNumber);
    let maxSize = 12;  // Must not be < 12.
    if (this.props.totalPages > maxSize) {
      // Last, Second-last, Third-last or Forth-last page selected
      if (this.props.currentPage >= lastPageNumber - 6) {
        pageNumbers = range(lastPageNumber - (maxSize - 2), lastPageNumber);
        pageNumbers.unshift(1, [2, lastPageNumber - (maxSize - 2) - 1]);
      // First, Second, Third or Forth page selected
      } else if (this.props.currentPage <= 6) {
        pageNumbers = range(1, maxSize - 1);
        pageNumbers.push([maxSize - 1, this.props.totalPages-1], this.props.totalPages);
      // Everything else
      } else {
        pageNumbers = [
          1,
          [2, this.props.currentPage - 4],
          this.props.currentPage - 3,
          this.props.currentPage - 2,
          this.props.currentPage - 1,
          this.props.currentPage,
          this.props.currentPage + 1,
          this.props.currentPage + 2,
          this.props.currentPage + 3,
          [this.props.currentPage + 4, this.props.totalPages - 1],
          this.props.totalPages
        ];
      }
    }

    let items = pageNumbers.map((value) => {
      return (
        <PaginationItem
          value={value}
          key={value}
          active={this.props.currentPage === value}
          onClick={this.props.onClick}
        />
      );
    });

    if (this.props.onPrevious && this.props.currentPage !== 1) {
      items.unshift(
        <PaginationItem
          value="«"
          key="«"
          onClick={this.onPrevious}
        />
      );
    }
    if (this.props.onNext && this.props.currentPage !== this.props.totalPages) {
      items.push(
        <PaginationItem
          value="»"
          key="»"
          onClick={this.onNext}
        />
      );
    }

    let className = classnames('re-pagination', this.props.className);
    return (
      <ul className={className}>
        {items}
      </ul>
    );
  }

});


export default Pagination;
