import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';
import { Student1 } from '../src/Student1/Student1';
import { FinalSolution } from '../src/FinalSolution/FinalSolution';

storiesOf('Student1', module)
  .addDecorator(withInfo)
  .add(
    'Student 1\'s component with no name passed',
    () => <Student1 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 1\'s name property and rendering', 
    () => <Student1 name="Student1"></Student1>,
    { info: { header: true, inline: true } }
  )
;

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

storiesOf('FinalSolution', module)
  .addDecorator(withInfo)
  .add(
    'FinalSolution 1\'s component with no name passed',
    () => <FinalSolution />,
    { info: { header: true, inline: true } }
  )
;