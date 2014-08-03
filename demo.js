var React = require("react"),
    MediaObject = require("./jsx/MediaObject.jsx"),
    FloatingLabelInput = require("./jsx/FloatingLabelInput.jsx"),
    YoutubeVideo = require("./jsx/YoutubeVideo.jsx"),
    VimeoVideo = require("./jsx/VimeoVideo.jsx"),
    $ = require("jquery");


window.jQuery = $;


React.renderComponent(
  MediaObject({
    children: [
      React.DOM.img({src: "build/grumpy.jpg"}),
      React.DOM.p(null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),
      React.DOM.p(null, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    ]
  }),
  document.getElementById("media-obj-example")
);

React.renderComponent(
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

React.renderComponent(
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

React.renderComponent(
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

React.renderComponent(
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

React.renderComponent(
  FloatingLabelInput({id: "email-input", label: "Email", name: "email"}),
  document.getElementById("floating-label-input-example")
);

React.renderComponent(
  YoutubeVideo({src: "//www.youtube.com/watch?v=R8XAlSp838Y", protocol: "http"}),
  document.getElementById("youtube-video-example")
);

React.renderComponent(
  VimeoVideo({src: "//vimeo.com/33133076", protocol: "http"}),
  document.getElementById("vimeo-video-example")
);

React.renderComponent(
  VimeoVideo({src: "//vimeo.com/33133076", protocol: "http", color: "ff0000", badge: 0, byline: 0, portrait: 0, title: 0}),
  document.getElementById("vimeo-video-example-alt")
);
