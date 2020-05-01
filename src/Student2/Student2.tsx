import * as React from 'react';
import * as styles from './Student2.scss';

interface Child {
    name?: string;
}

export class Student2 extends React.Component<Child, {}> {
  render() {
    return (
        <div className={styles.myName}>
        <p>My name is: {this.props.name}</p>
        </div>
    );
  }
}

