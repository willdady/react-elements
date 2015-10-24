var React = require('react');
var ReactDOM = require('react-dom');
var ColorPicker = require('./ColorPicker');

require('../styles/ColorPicker.scss');


var onColorChange = function () {
  // console.log('color change!');
};

ReactDOM.render(
  <ColorPicker color="#f00" onChange={onColorChange} />,
  document.getElementById('main')
);
