"use strict";

var React = require("react");

var TagItem = React.createClass({
  displayName: "TagItem",

  onClickHandler: function onClickHandler() {
    this.props.onRemove(this.props.value);
  },

  render: function render() {
    return React.createElement(
      "span",
      { className: "rui-tags-input__tag" },
      this.props.value,
      React.createElement(
        "button",
        { type: "button", className: "rui-tags-input__tag-delete-btn", tabIndex: "1", title: "Remove tag", onClick: this.onClickHandler },
        React.createElement("i", { className: "rui-tags-input__tag-delete-btn-icon" })
      )
    );
  }

});

var TagInputField = React.createClass({
  displayName: "TagInputField",

  getInitialState: function getInitialState() {
    return {
      inputStyle: {},
      value: ""
    };
  },

  componentDidMount: function componentDidMount() {
    this.refs.input.getDOMNode().focus();
  },

  onKeyDownHandler: function onKeyDownHandler(e) {
    if (e.keyCode === 13) {
      this.props.onInput(this.refs.input.getDOMNode().value);
      this.setState({
        inputStyle: {},
        value: ""
      });
    }
  },

  onChangeHandler: function onChangeHandler() {
    var input = this.refs.input.getDOMNode(),
        helper = this.refs.helper.getDOMNode();
    helper.innerHTML = input.value.replace(/\s/g, "&nbsp;");
    this.setState({
      value: input.value,
      inputStyle: { width: helper.offsetWidth + 1 }
    });
  },

  onBlurHandler: function onBlurHandler() {
    this.props.onInput(this.refs.input.getDOMNode().value);
    this.props.onComplete();
  },

  render: function render() {
    return React.createElement(
      "span",
      { className: "rui-tags-input__input-holder" },
      React.createElement("input", { type: "text",
        className: "rui-tags-input__input",
        ref: "input",
        value: this.state.value,
        style: this.state.inputStyle,
        onKeyDown: this.onKeyDownHandler,
        onChange: this.onChangeHandler,
        onBlur: this.onBlurHandler }),
      React.createElement("div", { className: "rui-tags-input__input-helper", ref: "helper" })
    );
  }

});

var TagsInput = React.createClass({
  displayName: "TagsInput",

  getInitialState: function getInitialState() {
    return {
      editing: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      max: Number.MAX_VALUE
    };
  },

  propTypes: {
    data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    onAdd: React.PropTypes.func.isRequired,
    onRemove: React.PropTypes.func.isRequired,
    max: React.PropTypes.number
  },

  inputCallback: function inputCallback(value) {
    if (!value) return;
    // We simply ignore dupes
    var index = this.props.data.indexOf(value);
    if (index > -1) return;
    this.props.onAdd(value);
  },

  finishedInputCallback: function finishedInputCallback() {
    this.setState({
      editing: false
    });
  },

  addTagClickHandler: function addTagClickHandler() {
    this.setState({ editing: true });
  },

  removeTagCallback: function removeTagCallback(value) {
    this.props.onRemove(value);
  },

  render: function render() {
    var tagItems = this.props.data.map(function (value) {
      return React.createElement(TagItem, { key: value, value: value, onRemove: this.removeTagCallback });
    }, this);

    var addButton = !this.state.editing ? React.createElement(
      "button",
      { type: "button",
        className: "rui-tags-input__new-tag-btn",
        tabIndex: "-1",
        title: "Add tag",
        onClick: this.addTagClickHandler },
      React.createElement("i", { className: "rui-tags-input__new-tag-btn-icon" }),
      " Add tag"
    ) : null;

    var input = this.state.editing && this.props.data.length < this.props.max ? React.createElement(TagInputField, { onInput: this.inputCallback,
      onComplete: this.finishedInputCallback }) : null;

    return React.createElement(
      "div",
      { className: "rui-tags-input" },
      tagItems,
      input,
      addButton
    );
  }

});

module.exports = TagsInput;
//# sourceMappingURL=TagsInput.js.map
