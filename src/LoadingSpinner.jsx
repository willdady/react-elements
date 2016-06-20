import React, { PropTypes } from 'react';
import classnames from 'classnames';


const LoadingSpinner = React.createClass({

  propTypes: {
    mini: PropTypes.bool,
    small: PropTypes.bool,
    slow: PropTypes.bool,
    fast: PropTypes.bool,
    color: PropTypes.string,
    backgroundColor: PropTypes.string
  },

  render: function() {
    let className = classnames(
      're-loading-spinner',
      {
        're-loading-spinner--mini': this.props.mini,
        're-loading-spinner--small': this.props.small,
        're-loading-spinner--slow': this.props.slow,
        're-loading-spinner--fast': this.props.fast
      },
      this.props.className
    );
    let style = {};
    if (this.props.color) style.borderLeftColor = this.props.color;
    if (this.props.backgroundColor) {
      style.borderBottomColor = this.props.backgroundColor;
      style.borderRightColor = this.props.backgroundColor;
      style.borderTopColor = this.props.backgroundColor;
    }
    return(
      <div className={className} style={style}>Loading</div>
    );
  }

});


export default LoadingSpinner;
