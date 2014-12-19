var React = require("react");


var TagItem = React.createClass({displayName: "TagItem",

  onClickHandler: function() {
    this.props.onRemove(this.props.value)
  },

  render: function() {
    return (
      React.createElement("span", {className: "rui-tags-input__tag"}, this.props.value, 
        React.createElement("button", {type: "button", className: "rui-tags-input__tag-delete-btn", tabIndex: "1", title: "Remove tag", onClick: this.onClickHandler}, 
          React.createElement("i", {className: "rui-tags-input__tag-delete-btn-icon"})
        )
      )
    )
  }

});


var TagInputField = React.createClass({displayName: "TagInputField",

  getInitialState: function() {
    return {
      inputStyle: {},
      value: ""
    }
  },

  componentDidMount: function() {
    this.refs.input.getDOMNode().focus();
  },

  onKeyDownHandler: function(e) {
    if (e.keyCode === 13) {
      this.props.onInput(this.refs.input.getDOMNode().value);
      this.setState({
        inputStyle: {},
        value: ""
      })
    }
  },

  onChangeHandler: function() {
    var input = this.refs.input.getDOMNode(),
        helper = this.refs.helper.getDOMNode();
    helper.innerHTML = input.value.replace(/\s/g, "&nbsp;");
    this.setState({
      value: input.value,
      inputStyle: {width: helper.offsetWidth + 1}
    });
  },

  onBlurHandler: function() {
    this.props.onInput(this.refs.input.getDOMNode().value);
    this.props.onComplete();
  },

  render: function() {
    return (
      React.createElement("span", {className: "rui-tags-input__input-holder"}, 
        React.createElement("input", {type: "text", 
               className: "rui-tags-input__input", 
               ref: "input", 
               value: this.state.value, 
               style: this.state.inputStyle, 
               onKeyDown: this.onKeyDownHandler, 
               onChange: this.onChangeHandler, 
               onBlur: this.onBlurHandler}), 
        React.createElement("div", {className: "rui-tags-input__input-helper", ref: "helper"})
      )
    )
  }

});


var TagsInput = React.createClass({displayName: "TagsInput",

  getInitialState: function() {
    return {
      editing: false
    }
  },

  getDefaultProps: function() {
    return {
      max: Number.MAX_VALUE
    }
  },

  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    max: React.PropTypes.number
  },

  inputCallback: function(value) {
    if (!value) return;
    // We simply ignore dupes
    var index = this.props.data.indexOf(value);
    if (index > -1) return
    this.props.onAdd(value);
  },

  finishedInputCallback: function() {
    this.setState({
      editing: false
    })
  },

  addTagClickHandler: function() {
    this.setState({editing: true});
  },

  removeTagCallback: function(value) {
    this.props.onRemove(value);
  },

  render: function() {
    var tagItems = this.props.data.map(function(value) {
      return (
        React.createElement(TagItem, {key: value, value: value, onRemove: this.removeTagCallback})
      )
    }, this);

    var addButton = !this.state.editing ?
                    React.createElement("button", {type: "button", 
                            className: "rui-tags-input__new-tag-btn", 
                            tabIndex: "-1", 
                            title: "Add tag", 
                            onClick: this.addTagClickHandler}, 
                      React.createElement("i", {className: "rui-tags-input__new-tag-btn-icon"}), " Add tag"
                    )
                    : null;

    var input = this.state.editing && this.props.data.length < this.props.max ?
                React.createElement(TagInputField, {onInput: this.inputCallback, 
                               onComplete: this.finishedInputCallback})
                : null;

    return (
      React.createElement("div", {className: "rui-tags-input"}, 
        tagItems, 
        input, 
        addButton
      )
    )
  }

});

module.exports = TagsInput;
