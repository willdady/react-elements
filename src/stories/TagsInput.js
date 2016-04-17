import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TagsInput from '../TagsInput';


storiesOf('TagsInput', module)
  .add('default', () => (
    <TagsInput onAdd={action('onAdd')}
               onRemove={action('onRemove')}
               data={[]} />
  ));
