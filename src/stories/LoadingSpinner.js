import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import LoadingSpinner from '../LoadingSpinner';


storiesOf('LoadingSpinner', module)
  .add('default', () => (
    <LoadingSpinner />
  ))
  .add('small', () => (
    <LoadingSpinner small />
  ))
  .add('mini', () => (
    <LoadingSpinner mini />
  ))
  .add('slow', () => (
    <LoadingSpinner slow />
  ))
  .add('fast', () => (
    <LoadingSpinner fast />
  ))
  .add('custom color', () => (
    <LoadingSpinner color="#00ff00" />
  ));
