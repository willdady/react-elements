var React = require("react"),
    $ = require("jquery");

var MediaObject = React.createFactory(require("./jsx/MediaObject.jsx")),
    TagsInput = React.createFactory(require("./jsx/TagsInput.jsx")),
    FloatingLabelInput = React.createFactory(require("./jsx/FloatingLabelInput.jsx")),
    YoutubeVideo = React.createFactory(require("./jsx/YoutubeVideo.jsx")),
    VimeoVideo = React.createFactory(require("./jsx/VimeoVideo.jsx")),
    Switch = React.createFactory(require("./jsx/Switch.jsx")),
    ColorPicker = React.createFactory(require("./jsx/ColorPicker.jsx"));


window.jQuery = $;

var colorChangeHandler = function(color) {
  $("#color-picker-example").parent().css({
    background: color.toHexString()
  });
};

React.render(
  ColorPicker({onChange: colorChangeHandler, color: "#f5f5f5"}),
  document.getElementById("color-picker-example")
);

var tagsData = ["technology", "facebook", "javascript"];

var onAddCallback = function(value) {
  tagsData.push(value);
  React.render(
    TagsInput({onAdd: onAddCallback,
               onRemove: onRemoveCallback,
               data: tagsData,
               max: 5}),
    document.getElementById("tags-input-example")
  );
};
var onRemoveCallback = function(value) {
  var index = tagsData.indexOf(value);
  if (index > -1) {
    tagsData.splice(index, 1);
    React.render(
      TagsInput({onAdd: onAddCallback,
               onRemove: onRemoveCallback,
               data: tagsData,
               max: 5}),
      document.getElementById("tags-input-example")
    );
  }
};
React.render(
  TagsInput({onAdd: onAddCallback,
               onRemove: onRemoveCallback,
               data: tagsData,
               max: 5}),
  document.getElementById("tags-input-example")
);


React.render(
  MediaObject({
    children: [
      React.DOM.img({src: "build/grumpy.jpg", key:1}),
      React.DOM.p({key: 2}, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p({key: 3}, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example")
);

React.render(
  Switch(),
  document.getElementById("switch-example")
);
React.render(
  Switch({size: "xs"}),
  document.getElementById("switch-example-xs")
);
React.render(
  Switch({size: "sm"}),
  document.getElementById("switch-example-sm")
);
React.render(
  Switch({size: "lg"}),
  document.getElementById("switch-example-lg")
);
React.render(
  Switch({on: true}),
  document.getElementById("switch-example-on")
);

React.render(
  MediaObject({
    mirror: true,
    children: [
      React.DOM.img({src: "build/grumpy.jpg"}),
      React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p(null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example-mirror")
);

React.render(
  MediaObject({
    valign: "middle",
    children: [
      React.DOM.img({src: "build/grumpy.jpg"}),
      React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p(null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example-vmiddle")
);

React.render(
  MediaObject({
    valign: "bottom",
    children: [
      React.DOM.img({src: "build/grumpy.jpg"}),
      React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p(null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example-vbottom")
);

React.render(
  MediaObject({
    valign: "middle",
    mirror: true,
    children: [
      React.DOM.img({src: "build/grumpy.jpg"}),
      React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p(null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example-vmiddle-mirror")
);

React.render(
  FloatingLabelInput({id: "email-input", label: "Email", name: "email"}),
  document.getElementById("floating-label-input-example")
);

React.render(
  YoutubeVideo({src: "//www.youtube.com/watch?v=R8XAlSp838Y", protocol: "http"}),
  document.getElementById("youtube-video-example")
);

React.render(
  VimeoVideo({src: "//vimeo.com/33133076", protocol: "http"}),
  document.getElementById("vimeo-video-example")
);

React.render(
  VimeoVideo({src: "http://player.vimeo.com/video/33133076", protocol: "http", color: "ff0000", badge: 0, byline: 0, portrait: 0, title: 0}),
  document.getElementById("vimeo-video-example-alt")
);
