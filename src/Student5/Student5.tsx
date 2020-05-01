import * as React from 'react';
import * as styles from './Student5.scss';

interface Child {
    name?: string;
}

export class Student5 extends React.Component<Child, {}> {
  render() {
    return (
        <div className={styles.myName}>
        <p>My name is: {this.props.name}</p>
        </div>
    );
  }
}

