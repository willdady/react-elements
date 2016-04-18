import React from 'react';
import classNames from 'classnames';


var LoadingSpinner = React.createClass({

  propTypes: {
    mini: React.PropTypes.bool,
    small: React.PropTypes.bool,
    slow: React.PropTypes.bool,
    fast: React.PropTypes.bool,
    color: React.PropTypes.string,
  },

  render: function() {
    var className = classNames(
      'loading-spinner',
      {
        'loading-spinner--mini': this.props.mini,
        'loading-spinner--small': this.props.small,
        'loading-spinner--slow': this.props.slow,
        'loading-spinner--fast': this.props.fast,
      },
      this.props.className
    );
    var style = {};
    if (this.props.color) style.borderLeftColor = this.props.color;
    return(
      <div className={className}
           style={style}>Loading</div>
    );
  }

});


export default LoadingSpinner;
