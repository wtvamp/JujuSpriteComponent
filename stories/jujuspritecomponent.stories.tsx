import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';

storiesOf('Julian', module)
  .addDecorator(withInfo)
  .add(
    'No name rendered',   
    () => <Julian />,
    { info: { test: "dodes this work?", header: true, inline: true } }
  )
  .add(
    'Passing name property and rendering', 
    () => <Julian name="Jujuman"></Julian>,
    { info: { inline: true } }
  );