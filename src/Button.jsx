import React from 'react';
import classNames from 'classnames';
import LoadingSpinner from './LoadingSpinner';
import omit from 'lodash/omit';


var Button = React.createClass({

  propTypes: {
    btnStyle: React.PropTypes.string,
    block: React.PropTypes.bool,
    processing: React.PropTypes.bool,
    loadingSpinnerColor: React.PropTypes.string,
    loadingSpinnerBackgroundColor: React.PropTypes.string
  },

  render: function() {
    let btnStyle = this.props.btnStyle;
    let className = classNames(
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
        <LoadingSpinner className="re-btn__spinner"
                        color={this.props.loadingSpinnerColor || '#fff'}
                        backgroundColor={this.props.loadingSpinnerBackgroundColor}
                        mini />
      );
    }

    return (
      <button {...props}
              className={className}>
        {spinner}
        <span className="re-btn__content">
          {this.props.children}
        </span>
      </button>
    );
  }

});

module.exports = Button;
