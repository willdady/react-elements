import React, { PropTypes } from 'react';
import classnames from 'classnames';


const ProgressBar = React.createClass({

  propTypes: {
    progress: PropTypes.number.isRequired
  },

  render: function() {
    let percentage = this.props.progress * 100;
    let innerStyle = { width: `${percentage}%` };
    let className = classnames(
      're-progress-bar',
      this.props.className,
      {
        're-progress-bar--complete': percentage === 100
      }
    );
    return (
      <div className={className}>
        <div className="re-progress-bar__bar" style={innerStyle}></div>
      </div>
    );
  }

});


export default ProgressBar;
