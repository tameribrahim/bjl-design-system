import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Button from '../components/Button';

const text = 'Test Button';
export const button = {
  color: 'blue[0]',
  className: 'test-class',
  m: [ 0, 1, 2 ]
};

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => <Button width={256} {...button} {...actions}>{text}</Button>)
  .add('Input', () => <Button {...button} as="a" {...actions}>{text}</Button>)
  .add('disabled', () => <Button disabled {...button} {...actions} {...actions}>{text}</Button>);