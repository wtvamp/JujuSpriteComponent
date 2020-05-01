import * as React from 'react';
import * as styles from './FinalSolution.scss';

interface Child {
    name?: string;
}

export class FinalSolution extends React.Component<Child, {}> {
  render() {
    return (
        <div className={styles.character}>
        </div>
    );
  }
}

