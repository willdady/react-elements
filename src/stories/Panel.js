import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Panel from '../Panel';


const TEXT = (
  <span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet cursus mauris. Nunc ac risus mi. Curabitur vitae posuere risus. Sed porta finibus neque sed dignissim.</p>
    <p>Pellentesque luctus mi a lectus bibendum euismod. Ut laoreet ipsum non ex tempor, eu gravida est viverra. Nam in viverra sapien. Suspendisse a augue auctor, luctus leo sit amet, tempus turpis.</p>
  </span>
);


storiesOf('Panel', module)
  .add('default', () => (
    <Panel>{TEXT}</Panel>
  ))
  .add('with header', () => (
    <Panel header="I'm a header">{TEXT}</Panel>
  ))
  .add('with footer', () => (
    <Panel footer="I'm a footer">{TEXT}</Panel>
  ))
  ;
