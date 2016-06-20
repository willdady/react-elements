# React Elements

A library of reusable React components consisting of the following:

```HTML
<Button />
<ButtonGroup />
<ColorPicker />
<LoadingSpinner />
<Pagination />
<Panel />
<ProgressBar />
<Switch />
<Tabs />
<VimeoVideo />
<YoutubeVideo />
```

**DEMO:** http://willdady.github.io/react-elements/

## Installation

```bash
npm install --save react-elements
```

## Usage

To include a component in your project simply import the component.

```javascript
import Switch from 'react-elements/dist/Switch';
```

### Component stylesheets

Most components have an accompanying stylesheet. When using a component be sure
to include the component's stylesheet in your build otherwise the component
will fail to render correctly.

Stylesheets are written using [BEM syntax](https://css-tricks.com/bem-101/) and all classes are prefixed
with ```re-```.

Pre-built CSS files can be found in `dist/css`. Source SCSS can be found in
the `styles` directory in the project's root.

#### Button

Please note the `<Button />` component composes the `<LoadingSpinner />` component so be sure to include both component's stylesheets.
