import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Tabs from '../Tabs';


storiesOf('Tabs', module)
  .add('default', () => (
    <Tabs onChange={action('onChange')}>
      <span>Foo</span>
      <span>Bar</span>
      <span>Eggs</span>
      <span>Spam</span>
    </Tabs>
  ))
  .add('block', () => (
    <Tabs onChange={action('onChange')}
          block>
      <span>Foo</span>
      <span>Bar</span>
      <span>Eggs</span>
      <span>Spam</span>
    </Tabs>
  ))
  ;
