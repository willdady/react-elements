import React, { PropTypes } from 'react';
import classnames from 'classnames';


const ButtonGroup = React.createClass({

  propTypes: {
    stacked: PropTypes.bool
  },

  render: function() {
    let className = classnames(
      're-btn-group',
      { 're-btn-group--stacked': this.props.stacked },
      this.props.className
    );
    return (
      <ul className={className}>
        {
          this.props.children.map((child, i) => {
            return (
              <li className="re-btn-group__item" key={`item-${i}`}>{child}</li>
            );
          })
        }
      </ul>
    );
  }

});


export default ButtonGroup;
