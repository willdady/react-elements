import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';


storiesOf('ButtonGroup', module)
  .add('default', () => (
    <ButtonGroup>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>
  ))
  .add('stacked', () => (
    <ButtonGroup stacked>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </ButtonGroup>
  ))
  ;
