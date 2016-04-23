A library of reusable React components consisting of the following:

```
<Switch />
<ColorPicker />
<VimeoVideo />
<YoutubeVideo />
<LoadingSpinner />
<Pagination />
<Panel />
<ProgressBar />
```

See demo.html for examples.

##Installation

```
npm install --save react-elements
```

##Usage

To include a component in your project simply ```require``` the component.

```javascript
var Switch = require("react-elements/Switch");
```

###Component stylesheets

Some components have an accompanying stylesheet. When using a component be sure
to include the component's stylesheet in your build otherwise the component
will fail to display correctly.

Stylesheets are written using BEM syntax and all classes are prefixed
with ```rui-```.
