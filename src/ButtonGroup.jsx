import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Button from './Button';


const ButtonGroup = React.createClass({

  propTypes: {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Button)),
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
          this.props.children.map(child => {
            return <li className="re-btn-group__item">{ child }</li>;
          })
        }
      </ul>
    );
  }

});


export default ButtonGroup;
