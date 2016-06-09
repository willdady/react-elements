import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
  .add('with center aligned header', () => (
    <Panel header="I'm a header" headerTextAlign="center">{TEXT}</Panel>
  ))
  .add('with right aligned header', () => (
    <Panel header="I'm a header" headerTextAlign="right">{TEXT}</Panel>
  ))
  .add('with footer', () => (
    <Panel footer="I'm a footer">{TEXT}</Panel>
  ))
  .add('with center aligned footer', () => (
    <Panel footer="I'm a footer" footerTextAlign="center">{TEXT}</Panel>
  ))
  .add('with right aligned footer', () => (
    <Panel footer="I'm a footer" footerTextAlign="right">{TEXT}</Panel>
  ))
  .add('with header and footer', () => (
    <Panel header="I'm a header"
           footer="I'm a footer">{TEXT}</Panel>
  ));
