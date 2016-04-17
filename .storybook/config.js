import { configure } from '@kadira/storybook';
import '../styles/ColorPicker.scss';
import '../styles/Switch.scss';
import '../styles/TagsInput.scss';

function loadStories() {
  require('../src/stories/Switch'),
  require('../src/stories/TagsInput'),
  require('../src/stories/YoutubeVideo'),
  require('../src/stories/VimeoVideo');
  // require('../src/stories/ColorPicker');
}

configure(loadStories, module);
