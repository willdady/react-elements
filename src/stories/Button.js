import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Button from '../Button';


storiesOf('Button', module)
  .add('default', () => (
    <Button>Click me</Button>
  ))
  .add('disabled', () => (
    <Button disabled>Click me</Button>
  ))
  .add('primary', () => (
    <Button btnStyle="primary">Click me</Button>
  ))
  .add('danger', () => (
    <Button btnStyle="danger">Click me</Button>
  ))
  .add('link', () => (
    <Button btnStyle="link">Click me</Button>
  ))
  .add('block', () => (
    <Button block>Click me</Button>
  ))
  .add('default - processing', () => (
    <Button loadingSpinnerColor="#999"
            processing>Click me</Button>
  ))
  .add('primary - processing', () => (
    <Button btnStyle="primary"
            processing>Click me</Button>
  ))
  .add('danger - processing', () => (
    <Button btnStyle="danger"
            processing>Click me</Button>
  ))
  .add('block - processing', () => (
    <Button block
            loadingSpinnerColor="#999"
            processing>Click me</Button>
  ))
  ;
