import React from 'react';
import { storiesOf } from '@kadira/storybook';
import YoutubeVideo from '../YoutubeVideo';


storiesOf('YoutubeVideo', module)
  .add('default', () => (
    <YoutubeVideo src="https://www.youtube.com/watch?v=H5ud1oB4ei4" />
  ))
  .add('no controls', () => (
    <YoutubeVideo src="https://www.youtube.com/watch?v=H5ud1oB4ei4"
                  controls="0" />
  ));
