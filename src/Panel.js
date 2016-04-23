import React from 'react';
import _isString from 'lodash.isstring';
import classNames from 'classnames';


var PanelHeader = React.createClass({

  render: function() {
    let children = this.props.children;
    if (_isString(children)) {
      children = (
        <h3 className="panel__header-heading">{ children }</h3>
      );
    }
    return (
      <header className="panel__header">
        {children}
      </header>
    );
  }

});


var PanelFooter = React.createClass({

  render: function() {
    return (
      <footer className="panel__footer">
        {this.props.children}
      </footer>
    );
  }

});


var Panel = React.createClass({

  render: function() {
    let className = classNames('panel', this.props.className);

    let header;
    if (this.props.header) {
      header = <PanelHeader>{this.props.header}</PanelHeader>;
    };

    let footer;
    if (this.props.footer) {
      footer = <PanelFooter>{this.props.footer}</PanelFooter>;
    }

    return (
      <section className={className}>
        {header}
        <div className="panel__content">
          {this.props.children}
        </div>
        {footer}
      </section>
    );
  }

});

export default Panel;
