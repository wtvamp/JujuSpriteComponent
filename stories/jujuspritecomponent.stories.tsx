import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';
import { PuppySprite } from '../src/Puppy/PuppySprite';

storiesOf('Julian', module)
  .addDecorator(withInfo)
  .add(
    'No name rendered',   
    () => <Julian />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Passing name property and rendering', 
    () => <Julian name="Jujuman"></Julian>,
    { info: { header: true, inline: true } }
  )
;

storiesOf('PuppySprite', module)
  .addDecorator(withInfo)
  .add(
    'This is a CSS animated sprite of a puppy.',
    () => 
    <PuppySprite flipped={true} />,
    { info: { header: true, inline: true } }
  )
;