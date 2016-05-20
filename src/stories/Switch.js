import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Switch from '../Switch';


storiesOf('Switch', module)
  .add('default', () => (
    getComponent()
  ))
  .add('on', () => (
    getComponent(null, true)
  ))
  .add('extra small', () => (
    getComponent('xs')
  ))
  .add('small', () => (
    getComponent('sm')
  ))
  .add('large', () => (
    getComponent('lg')
  ));


function getComponent(size = null, value = false) {
  return (
    <Switch name="Sample"
            value={value}
            size={size}
            onClick={action('onClick')} />
  );
}
