import React from 'react';
import { storiesOf } from '@storybook/react';

import Article from '../examples/Article';

storiesOf('Examples', module)
  .add('Article', () => <Article />);