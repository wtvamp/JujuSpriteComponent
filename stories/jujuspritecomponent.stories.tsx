import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';


storiesOf('Julian', module)
  .addDecorator(withInfo)
  .add(
    'This is the original JujuSpriteComponent',
    () => 
    <Julian />,
    { info: { header: true, inline: true } }
  )
;