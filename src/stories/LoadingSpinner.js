import React from 'react';
import { storiesOf } from '@kadira/storybook';
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
  ))
  .add('custom background color', () => (
    <LoadingSpinner backgroundColor="rgba(254, 22, 86, 0.25)" />
  ));
