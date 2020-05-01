import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Julian } from '../src/jujuspritecomponent';
import { Student1 } from '../src/Student1/Student1';
import { Student2 } from '../src/Student2/Student2';
import { Student3 } from '../src/Student3/Student3';
import { Student4 } from '../src/Student4/Student4';
import { Student5 } from '../src/Student5/Student5';
import { Student6 } from '../src/Student6/Student6';
import { Student7 } from '../src/Student7/Student7';


storiesOf('Students', module)
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
  .add(
    'Student 2\'s component with no name passed',
    () => <Student2 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 2\'s name property and rendering', 
    () => <Student2 name="Student2"></Student2>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 3\'s component with no name passed',
    () => <Student3 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 3\'s name property and rendering', 
    () => <Student3 name="Student3"></Student3>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 4\'s component with no name passed',
    () => <Student4 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 4\'s name property and rendering', 
    () => <Student4 name="Student4"></Student4>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 4\'s component with no name passed',
    () => <Student4 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 4\'s name property and rendering', 
    () => <Student4 name="Student4"></Student4>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 5\'s component with no name passed',
    () => <Student5 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 5\'s name property and rendering', 
    () => <Student5 name="Student5"></Student5>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 6\'s component with no name passed',
    () => <Student6 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 6\'s name property and rendering', 
    () => <Student6 name="Student6"></Student6>,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 7\'s component with no name passed',
    () => <Student7 />,
    { info: { header: true, inline: true } }
  )
  .add(
    'Student 7\'s name property and rendering', 
    () => <Student7 name="Student7"></Student7>,
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