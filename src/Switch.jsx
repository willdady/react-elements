import React, { PropTypes } from 'react';
import classnames from 'classnames';
import values from 'lodash/values';


const SIZES = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  LARGE: 'lg'
};


const Switch = React.createClass({

  propTypes: {
    name: PropTypes.string,
    value: PropTypes.bool.isRequired,
    size: PropTypes.oneOf(values(SIZES)),
    onClick: PropTypes.func
  },

  onClick: function () {
    if (!this.props.onClick) return;
    this.props.onClick(this.props.value, this.props.name);
  },

  render: function() {
    let className = classnames({
      're-switch': true,
      're-switch--on': this.props.value,
      're-switch--xs': this.props.size === SIZES.EXTRA_SMALL,
      're-switch--sm': this.props.size === SIZES.SMALL,
      're-switch--lg': this.props.size === SIZES.LARGE
    });
    return (
      <span className={className}>
        <input
          type="checkbox"
          name={this.props.name}
          className="re-switch__checkbox"
          checked={this.props.value}
          onClick={this.onClick}
          readOnly
        />
        <span className="re-switch__switch"></span>
      </span>
    );
  }
});


export default Switch;
