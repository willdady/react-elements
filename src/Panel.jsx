import React, { PropTypes } from 'react';
import isString from 'lodash/isString';
import classnames from 'classnames';


const PanelHeader = React.createClass({

  propTypes: {
    textAlign: PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function() {
    let children = this.props.children;
    if (isString(children)) {
      children = (
        <h3 className="re-panel__header-heading">{ children }</h3>
      );
    }
    let className = classnames(
      're-panel__header',
      {
        're-panel__header--text-left': this.props.textAlign === 'left',
        're-panel__header--text-center': this.props.textAlign === 'center',
        're-panel__header--text-right': this.props.textAlign === 'right'
      }
    );
    return (
      <header className={className}>
        {children}
      </header>
    );
  }

});


const PanelFooter = React.createClass({

  propTypes: {
    textAlign: PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function() {
    let className = classnames(
      're-panel__footer',
      {
        're-panel__footer--text-left': this.props.textAlign === 'left',
        're-panel__footer--text-center': this.props.textAlign === 'center',
        're-panel__footer--text-right': this.props.textAlign === 'right'
      }
    );
    return (
      <footer className={className}>
        {this.props.children}
      </footer>
    );
  }

});


const Panel = React.createClass({

  propTypes: {
    header: PropTypes.node,
    footer: PropTypes.node,
    headerTextAlign: PropTypes.oneOf(['left', 'center', 'right']),
    footerTextAlign: PropTypes.oneOf(['left', 'center', 'right'])
  },

  render: function() {
    let className = classnames('re-panel', this.props.className);

    if (this.props.header) {
      var header = (
        <PanelHeader textAlign={this.props.headerTextAlign}>
          {this.props.header}
        </PanelHeader>
      );
    }

    if (this.props.footer) {
      var footer = (
        <PanelFooter textAlign={this.props.footerTextAlign}>
          {this.props.footer}
        </PanelFooter>
      );
    }

    return (
      <section className={className}>
        {header}
        <div className="re-panel__content">
          {this.props.children}
        </div>
        {footer}
      </section>
    );
  }

});


export default Panel;
