import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Switch from '../Switch';


storiesOf('Switch', module)
  .add('extra small', () => (
    <Switch name="Sample"
            on={true}
            size="xs"
            onChange={action('onChange')} />
  ))
  .add('default', () => (
    <Switch name="Sample"
            on={true}
            onChange={action('onChange')} />
  ))
  .add('small', () => (
    <Switch name="Sample"
            on={true}
            size="sm"
            onChange={action('onChange')} />
  ))
  .add('large', () => (
    <Switch name="Sample"
            on={true}
            size="lg"
            onChange={action('onChange')} />
  ));
