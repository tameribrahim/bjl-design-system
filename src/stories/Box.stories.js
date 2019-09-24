import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import Box from '../components/Box';

const text = 'Test Text....';
const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
export const button = {
  color: 'blue[200]',
  bg: 'red',
  className: 'test-class',
  m: [ 0, 1, 2 ]
};

export const actions = {

};

storiesOf('Box', module)
  .addDecorator(withKnobs)
  .add('default', () => <Box {...button} {...actions}>{text}</Box>)
  .add('long text', () => <Box {...button} {...actions}>{longText}</Box>)
  .add('Responsive', () => <Box {...button} width={[1,1/2, 1/4]} {...actions}>{longText}</Box>)
  .add('BG', () => <Box {...button} {...actions}>{longText}</Box>);;