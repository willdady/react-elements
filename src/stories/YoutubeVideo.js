import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import YoutubeVideo from '../YoutubeVideo';


storiesOf('YoutubeVideo', module)
  .add('default', () => (
    <YoutubeVideo src="https://www.youtube.com/embed/NK_e5_fKtIo" />
  ));
