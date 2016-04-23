import React from 'react';
import _map from 'lodash.map';
import _range from 'lodash.range';
import classNames from 'classnames';


var PaginationItem = React.createClass({

  onClick: function (e) {
    e.preventDefault();
    this.props.onClick(this.props.value);
  },

  render: function() {
    let className = classNames(
      'pagination__item-link',
      {
        'pagination__item-link--active': this.props.active
      }
    );
    return (
      <li className="pagination__item"
          key={this.props.value}>
        <a className={className}
           href="#"
           onClick={this.onClick}>
          {Array.isArray(this.props.value) ? '\u2026' : this.props.value}
        </a>
      </li>
    );
  }

});


var Pagination = React.createClass({

  propTypes: {
    totalPages: React.PropTypes.number.isRequired,
    currentPage: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired,
  },

  render: function() {
    // If there's only one page we don't render anything.
    if (this.props.totalPages === 1) return null;

    let lastPageNumber = this.props.totalPages + 1;
    let pageNumbers = _range(1, lastPageNumber);
    let maxSize = 12;  // Must not be < 12.
    if (this.props.totalPages > maxSize) {
      // Last, Second-last, Third-last or Forth-last page selected
      if (this.props.currentPage >= lastPageNumber - 6) {
        pageNumbers = _range(lastPageNumber - (maxSize - 1), lastPageNumber);
        pageNumbers.unshift([1, lastPageNumber - (maxSize - 1) - 1]);
      // First, Second, Third or Forth page selected
      } else if (this.props.currentPage <= 6) {
        pageNumbers = _range(1, maxSize);
        pageNumbers.push([maxSize, this.props.totalPages]);
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

    let items = _map(pageNumbers, (value) => {
      return (
        <PaginationItem value={value}
                        active={this.props.currentPage === value}
                        onClick={this.props.onClick} />
      );
    });

    let className = classNames('pagination', this.props.className);
    return (
      <ul className={className}>
        {items}
      </ul>
    );
  }

});

export default Pagination;
