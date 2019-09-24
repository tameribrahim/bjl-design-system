import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs';

import Text from '../components/Text';
import Article from '../examples/Article';

const text = 'Test Text';
const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const variants = {
  'Display 1': 'display1',
  'Display 2': 'display2',
  'Heading 1': 'heading1',
  'Heading 2': 'heading2',
  'Heading 3': 'heading3',
  'Heading 4': 'heading4',
  'Heading 5': 'heading5',
  'Body 1': 'body1',
  'Body2': 'body2',
  'Caption 1': 'caption1',
  'Caption 2': 'caption2',
  'Button Text' :'button-text'
};
const optionsObj = {
  display: 'select'
};
const groupId = 'GROUP-ID1';

const knobObject = (defaultOption = 'body2')=> options('Variants', variants, defaultOption, optionsObj, groupId)

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('Short text', () => <Text variant={knobObject()}>{text}</Text>)
  .add('Long text', () => <Text variant={knobObject()}>{longText}</Text>)
  .add('Article', () => <Article />);