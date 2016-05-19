import React from 'react';
import { storiesOf } from '@kadira/storybook';
import VimeoVideo from '../VimeoVideo';


storiesOf('VimeoVideo', module)
  .add('default', () => (
    <VimeoVideo src="https://vimeo.com/33133076" />
  ))
  .add('custom colour', () => (
    <VimeoVideo src="https://vimeo.com/33133076"
                color="ff0000" />
  ))
  .add('autoplay', () => (
    <VimeoVideo src="https://vimeo.com/33133076"
                autoplay="1"/>
  ));
