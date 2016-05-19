import React, { PropTypes } from 'react';
import classNames from 'classnames';


var Tab = React.createClass({

  propTypes: {
    tabIndex: PropTypes.number,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired
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
    initialIndex: PropTypes.number,
    block: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
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
