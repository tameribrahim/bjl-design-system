import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';

import Button from '../components/Button';

const variants = {
  'Primary': 'primary',
  'Primary Outlined': 'primary-outlined',
  'Disabled': 'disabled',
  'Disabled Outlined': 'disabled-outlined',
};
const sizes = {
  'Normal': 'normal',
  'Small': 'small',
};

const optionsObj = {
  display: 'select'
};

const variantKnob = (defaultOption = 'primary')=> options('Variantss', variants, defaultOption, optionsObj)
const sizeKnob    = (defaultOption = 'normal')=> options('Sizes', sizes, defaultOption, optionsObj)

const text = 'Save Prefrences';

export const actions = {
  onClick: action('onClick'),
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => <Button variant={variantKnob()} size={sizeKnob()}>{text}</Button>)
  .add('Input', () => <Button variant="primary-outlined" as="button" {...actions}>{text}</Button>)
  .add('disabled', () => <Button disabled {...actions} >{text}</Button>);