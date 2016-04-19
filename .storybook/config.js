import { configure } from '@kadira/storybook';
import '../styles/ColorPicker.scss';
import '../styles/Switch.scss';
import '../styles/LoadingSpinner.scss';

function loadStories() {
  require('../src/stories/Switch'),
  require('../src/stories/YoutubeVideo'),
  require('../src/stories/VimeoVideo'),
  require('../src/stories/ColorPicker');
  require('../src/stories/LoadingSpinner');
}

configure(loadStories, module);
