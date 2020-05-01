import * as React from 'react';
import * as styles from './Student7.scss';

interface Child {
    name?: string;
}

export class Student1 extends React.Component<Child, {}> {
  render() {
    return (
        <div className={styles.myName}>
        <p>My name is: {this.props.name}</p>
        </div>
    );
  }
}

