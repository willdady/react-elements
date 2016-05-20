import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ProgressBar from '../ProgressBar';


storiesOf('ProgressBar', module)
  .add('25%', () => (
    <ProgressBar progress={0.25} />
  ))
  .add('50%', () => (
    <ProgressBar progress={0.5} />
  ))
  .add('75%', () => (
    <ProgressBar progress={0.75} />
  ))
  .add('100%', () => (
    <ProgressBar progress={1} />
  ))
  ;
