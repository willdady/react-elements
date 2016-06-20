import { configure } from '@kadira/storybook';
import '../styles/ColorPicker.scss';
import '../styles/Switch.scss';
import '../styles/LoadingSpinner.scss';
import '../styles/Button.scss';
import '../styles/ButtonGroup.scss';
import '../styles/Pagination.scss';
import '../styles/Panel.scss';
import '../styles/ProgressBar.scss';
import '../styles/Tabs.scss';

function loadStories() {
  require('../src/stories/Switch');
  require('../src/stories/YoutubeVideo');
  require('../src/stories/VimeoVideo');
  require('../src/stories/ColorPicker');
  require('../src/stories/LoadingSpinner');
  require('../src/stories/Button');
  require('../src/stories/ButtonGroup');
  require('../src/stories/Pagination');
  require('../src/stories/Panel');
  require('../src/stories/ProgressBar');
  require('../src/stories/Tabs');
}

configure(loadStories, module);
