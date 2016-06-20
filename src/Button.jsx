import React, { PropTypes } from 'react';
import classnames from 'classnames';
import LoadingSpinner from './LoadingSpinner';
import omit from 'lodash/omit';


const Button = React.createClass({

  propTypes: {
    btnStyle: PropTypes.string,
    block: PropTypes.bool,
    processing: PropTypes.bool,
    loadingSpinnerColor: PropTypes.string,
    loadingSpinnerBackgroundColor: PropTypes.string
  },

  render: function() {
    let btnStyle = this.props.btnStyle;
    let className = classnames(
      're-btn',
      {
        're-btn--default': !btnStyle || btnStyle === 'default',
        're-btn--primary': btnStyle === 'primary',
        're-btn--danger': btnStyle === 'danger',
        're-btn--link': btnStyle === 'link',
        're-btn--block': this.props.block,
        're-btn--processing': this.props.processing
      },
      this.props.className
    );
    let props = omit(this.props, ['btnStyle', 'block', 'processing']);
    props.type = props.type ? props.type : 'button';

    let spinner;
    if (this.props.processing) {
      spinner = (
        <LoadingSpinner
          className="re-btn__spinner"
          color={this.props.loadingSpinnerColor || '#fff'}
          backgroundColor={this.props.loadingSpinnerBackgroundColor}
          mini
        />
      );
    }

    return (
      <button {...props} className={className}>
        {spinner}
        <span className="re-btn__content">
          {this.props.children}
        </span>
      </button>
    );
  }

});


export default Button;
