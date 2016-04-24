# React Elements

A library of reusable React components consisting of the following:

```
<Button />
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

## Installation

```
npm install --save react-elements
```

## Usage

To include a component in your project simply ```require``` the component.

```javascript
import Switch from 'react-elements/Switch';
```

### Component stylesheets

Most components have an accompanying stylesheet. When using a component be sure
to include the component's stylesheet in your build otherwise the component
will fail to render correctly.

Stylesheets are written using BEM syntax and all classes are prefixed
with ```re-```.

Pre-build CSS files can be found in `dist/css`. Source SCSS can be found in
the `styles` directory in the project's root.

### Storybook

This project uses the excellent [React Storybook](https://github.com/kadirahq/react-storybook) dev tool. From the project root first run `npm install` then launch storybook with `npm run storybook`.
