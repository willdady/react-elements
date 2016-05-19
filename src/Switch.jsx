import React from 'react';
import classNames from 'classnames';
import values from 'lodash/values';


const SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};


var Switch = React.createClass({

  propTypes: {
    name: React.PropTypes.string,
    value: React.PropTypes.bool.isRequired,
    size: React.PropTypes.oneOf(values(SIZES)),
    onClick: React.PropTypes.func
  },

  onClick: function () {
    if (!this.props.onClick) return;
    this.props.onClick(this.props.value, this.props.name);
  },

  render: function() {
    let className = classNames({
      're-switch': true,
      're-switch--on': this.props.value,
      're-switch--xs': this.props.size === SIZES.EXTRA_SMALL,
      're-switch--sm': this.props.size === SIZES.SMALL,
      're-switch--lg': this.props.size === SIZES.LARGE
    });
    return (
      <span className={className}>
        <input type="checkbox"
               name={this.props.name}
               className="re-switch__checkbox"
               checked={this.props.value}
               onClick={this.onClick}
               readOnly />
             <span className="re-switch__switch"></span>
      </span>
    );
  }
});

export default Switch;
