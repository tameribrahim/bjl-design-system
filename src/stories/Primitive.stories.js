import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, optionsKnob as options } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Text from '../components/Text';
import Button from '../components/Button';
import Article from '../examples/Article';

const textVariants = {
  'Display 1':    'display1',
  'Display 2':    'display2',
  'Heading 1':    'heading1',
  'Heading 2':    'heading2',
  'Heading 3':    'heading3',
  'Heading 4':    'heading4',
  'Heading 5':    'heading5',
  'Body 1':       'body1',
  'Body2':        'body2',
  'Caption 1':    'caption1',
  'Caption 2':    'caption2',
  'Button Text' : 'button-text'
};
const optionsObj = {
  display: 'select'
};

const buttonVariants = {
  'Primary': 'primary',
  'Primary Outlined': 'primary-outlined',
  'Disabled': 'disabled',
  'Disabled Outlined': 'disabled-outlined',
};
const sizes = {
  'Normal': 'normal',
  'Small': 'small',
};

const variantKnob = (defaultOption = 'primary')=> options('Variantss', buttonVariants, defaultOption, optionsObj)
const sizeKnob    = (defaultOption = 'normal')=> options('Sizes', sizes, defaultOption, optionsObj)

export const actions = {
  onClick: action('onClick'),
};

const knobObject = (defaultOption = 'body2')=> options('Variants', textVariants, defaultOption, optionsObj)

storiesOf('Primitives', module)
  .addDecorator(withKnobs)
  .add('Text', () => <Text variant={knobObject()}>{text('Text', 'Test Text')}</Text>)
  .add('Button', () => <Button variant={variantKnob()} size={sizeKnob()} {...actions}>{text('Text', 'Save Preferences')}</Button>);