import * as React from 'react';
import * as styles from './Student3.scss';

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

