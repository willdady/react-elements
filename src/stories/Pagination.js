import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Pagination from '../Pagination';


storiesOf('Pagination', module)
  .add('default', () => (
    <Pagination totalPages={8}
                currentPage={3}
                onClick={action('onClick')} />
  ))
  .add('with next and previous', () => (
    <Pagination totalPages={8}
                currentPage={3}
                onClick={action('onClick')}
                onNext={action('onNext')}
                onPrevious={action('onPrevious')} />
  ))
  .add('with next and previous, first selected', () => (
    <Pagination totalPages={8}
                currentPage={1}
                onClick={action('onClick')}
                onNext={action('onNext')}
                onPrevious={action('onPrevious')} />
  ))
  .add('with next and previous, last selected', () => (
    <Pagination totalPages={8}
                currentPage={8}
                onClick={action('onClick')}
                onNext={action('onNext')}
                onPrevious={action('onPrevious')} />
  ))
  .add('3 of 13', () => (
    <Pagination totalPages={13}
                currentPage={3}
                onClick={action('onClick')} />
  ))
  .add('11 of 13', () => (
    <Pagination totalPages={13}
                currentPage={11}
                onClick={action('onClick')} />
  ))
  .add('big range', () => (
    <Pagination totalPages={300}
                currentPage={21}
                onClick={action('onClick')} />
  ))
  .add('big range, last selected', () => (
    <Pagination totalPages={300}
                currentPage={300}
                onClick={action('onClick')} />
  ))
  .add('big range, second last selected', () => (
    <Pagination totalPages={300}
                currentPage={299}
                onClick={action('onClick')} />
  ))
  .add('big range, third last selected', () => (
    <Pagination totalPages={300}
                currentPage={298}
                onClick={action('onClick')} />
  ))
  .add('big range, forth last selected', () => (
    <Pagination totalPages={300}
                currentPage={297}
                onClick={action('onClick')} />
  ))
  .add('big range, fifth last selected', () => (
    <Pagination totalPages={300}
                currentPage={296}
                onClick={action('onClick')} />
  ))
  .add('big range, sixth last selected', () => (
    <Pagination totalPages={300}
                currentPage={295}
                onClick={action('onClick')} />
  ))
  .add('big range, seventh last selected', () => (
    <Pagination totalPages={300}
                currentPage={294}
                onClick={action('onClick')} />
  ))
  .add('big range, first selected', () => (
    <Pagination totalPages={300}
                currentPage={1}
                onClick={action('onClick')} />
  ))
  .add('big range, second selected', () => (
    <Pagination totalPages={300}
                currentPage={2}
                onClick={action('onClick')} />
  ))
  .add('big range, third selected', () => (
    <Pagination totalPages={300}
                currentPage={3}
                onClick={action('onClick')} />
  ))
  .add('big range, forth selected', () => (
    <Pagination totalPages={300}
                currentPage={4}
                onClick={action('onClick')} />
  ))
  .add('big range, fifth selected', () => (
    <Pagination totalPages={300}
                currentPage={5}
                onClick={action('onClick')} />
  ))
  .add('big range, sixth selected', () => (
    <Pagination totalPages={300}
                currentPage={6}
                onClick={action('onClick')} />
  ))
  .add('big range, seventh selected', () => (
    <Pagination totalPages={300}
                currentPage={7}
                onClick={action('onClick')} />
  ))
  ;
