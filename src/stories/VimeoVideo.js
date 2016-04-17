import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import VimeoVideo from '../VimeoVideo';


storiesOf('VimeoVideo', module)
  .add('default', () => (
    <VimeoVideo src="https://vimeo.com/33133076" />
  ));
