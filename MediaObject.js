/**
 * @jsx React.DOM
 */

var React = require("react");


var MediaObject = React.createClass({displayName: 'MediaObject',

  getDefaultProps: function() {
    return {
      mirror: false,
      valign: null
    };
  },

  render: function() {
    var rootClass = "rui-media-obj clearfix";
    rootClass += this.props.mirror ? " rui-media-obj--mirror": "";
    rootClass += this.props.valign === "middle" || this.props.valign === "bottom" ? " rui-media-obj--flag": "";
    rootClass += " " + this.props.className;

    var imageClass = "rui-media-obj__image";
    imageClass += this.props.valign === "middle" ? " rui-media-obj__image--flag-middle": "";
    imageClass += this.props.valign === "bottom" ? " rui-media-obj__image--flag-bottom": "";

    var contentClass = "rui-media-obj__content clearfix";
    contentClass += this.props.valign === "middle" ? " rui-media-obj__content--flag-middle": "";
    contentClass += this.props.valign === "bottom" ? " rui-media-obj__content--flag-bottom": "";

    if ((this.props.valign === "middle" || this.props.valign === "bottom") && this.props.mirror) {
      return (
        React.DOM.div({className: rootClass},
          React.DOM.div({className: contentClass},
            this.props.children.slice(1, this.props.children.length)
          ),
          React.DOM.div({className: imageClass},
            this.props.children[0]
          )
        )
      );
    } else {
      return (
        React.DOM.div({className: rootClass},
          React.DOM.div({className: imageClass},
            this.props.children[0]
          ),
          React.DOM.div({className: contentClass},
            this.props.children.slice(1, this.props.children.length)
          )
        )
      );
    }

  }
});

module.exports = MediaObject;
