A library of reusable React components consisting of the following:

<ColorPicker />
<FloatingLabelInput />
<MediaObject />
<TagsInput />
<VimeoVideo />
<YoutubeVideo />

See demo.html for examples.

##Installation

```
npm install --save react-elements
```

##Usage

Components are built to work with Browserify/Node. To include a component in your project simply ```require``` the component.

```javascript
var MediaObject = require("react-elements/MediaObject");
```

###Component stylesheets 

Some components have an accompanying stylesheet. When using a component be sure to include the component's stylesheet in your build otherwise the component will fail to display correctly. 

Stylesheets are written using BEM syntax and all classes are prefixed with ```rui-```. You can either include the .less or .css file in your project, however the .less files do NOT include vendor prefixes. You will need to run the resulting CSS through something like [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) if including the less files in your build. The precompiled .css files have vendor prefixes already applied so are often a better choice.
