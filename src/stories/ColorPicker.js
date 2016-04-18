import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ColorPicker from '../ColorPicker';


storiesOf('ColorPicker', module)
  .add('default', () => (
    <ColorPicker onChange={(color) => console.log(color)} />
  ));
