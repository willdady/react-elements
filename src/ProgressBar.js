import React from 'react';
import classNames from 'classnames';


var ProgressBar = React.createClass({

  propTypes: {
    progress: React.PropTypes.number.isRequired
  },

  render: function() {
    let percentage = this.props.progress * 100;
    let innerStyle = { width: `${percentage}%` };
    let className = classNames(
      're-progress-bar',
      this.props.className,
      {
        're-progress-bar--complete': percentage === 100
      }
    );
    return (
      <div className={className}>
        <div className="re-progress-bar__bar"
             style={innerStyle}></div>
      </div>
    );
  }

});


export default ProgressBar;
