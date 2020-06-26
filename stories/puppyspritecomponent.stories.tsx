import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { PuppySpriteStep1 } from '../src/PuppySpriteStep1/PuppySprite1';
import { PuppySprite } from '../src/PuppySprite/PuppySprite';


storiesOf('PuppySprite', module)
  .addDecorator(withInfo)
  .add(
    'This is a CSS animated sprite of a puppy - step 1.',
    () => 
    <PuppySpriteStep1 />,
    { info: { header: true, inline: true } }
  )
 .addDecorator(withInfo)
  .add(
    'This is a CSS animated sprite of a puppy - final.',
    () => 
    <PuppySprite flipped={true} />,
    { info: { header: true, inline: true } }
  )
;