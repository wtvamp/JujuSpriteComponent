import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';
import { PuppySprite } from '../src/FinalSolution/PuppySprite';

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
    'This is a CSS animated sprite of THE mouse.',
    () => 
    <PuppySprite flipped={true} />,
    { info: { header: true, inline: true } }
  )
;