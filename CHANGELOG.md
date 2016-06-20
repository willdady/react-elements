## v1.3.0
* Added ButtonGroup component.
* Buttons are no longer outlined when focused.

## v1.2.1
* No longer creating shrinkwrap.json with -dev option.

## v1.2.0
* Panel component now takes optional footerTextAlign and headerTextAlign properties. Valid values for are 'left', 'center' or 'right'.

## v1.1.1
* Now deploying storybook to gh-pages with storybook-deployer.
* Updated README.

## v1.1.0
* Renamed React component file extensions from .js to .jsx.
* Updated libraries.
* Code linting.
* Updated README.
* Updated/Added component PropTypes.
* Added more scss variables.

## v1.0.4
* Removed css position entirely from LoadingSpinner.

## v1.0.3
* Added more variables to LoadingSpinner scss.

## v1.0.2
* Added more variables to Panel's scss.

## v1.0.1
* Tweaked README

## v1.0.0

* MAJOR UPDATE. This release is not backwards compatible with older versions.
* Removed MediaObject and FloatingLabelInput components.
* Switched CSS pre-processor from Less to Sass.
* Switched from grunt-react to grunt-babel.
* Updated React to v15.0.1.
* Switch is now a controlled component. Previously it was uncontrolled, maintaining it's own state.
* Added LoadingSpinner component
* Removed TagsInput. [React Select](http://jedwatson.github.io/react-select/) is a better alternative.
* Changed css prefix from `rui-` to `re-`.
* Added Button component.
* Added Pagination component.
* Added Panel component.
* Added ProgressBar component.
* Added Tabs component.
