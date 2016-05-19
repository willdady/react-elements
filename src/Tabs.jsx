import React from 'react';
import classNames from 'classnames';


var Tab = React.createClass({

  propTypes: {
    tabIndex: React.PropTypes.number,
    onClick: React.PropTypes.func.isRequired
  },

  onClick: function () {
    this.props.onClick(this.props.tabIndex);
  },

  render: function() {
    let className = classNames(
      're-tabs__tab',
      {
        're-tabs__tab--selected': this.props.selected
      }
    );
    return (
      <li className={className}
          onClick={this.onClick}>
        {this.props.children}
      </li>
    );
  }

});


var Tabs = React.createClass({

  propTypes: {
    initialIndex: React.PropTypes.number,
    block: React.PropTypes.bool,
    onChange: React.PropTypes.func.isRequired,
    children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
  },

  getInitialState: function () {
    return {
      selectedIndex: this.props.initialIndex || 0
    };
  },

  onTabClick: function (selectedIndex) {
    this.setState({ selectedIndex }, () => this.props.onChange(selectedIndex));
  },

  render: function () {
    let tabs = this.props.children.map((child, i) => {
      return <Tab key={i}
                  tabIndex={i}
                  selected={i === this.state.selectedIndex}
                  onClick={this.onTabClick}>{child}</Tab>;
    });

    let className = classNames(
      're-tabs',
      {
        're-tabs--block': this.props.block
      },
      this.props.className
    );
    return (
      <ul className={className}>
        {tabs}
      </ul>
    );
  }


});

export default Tabs;
