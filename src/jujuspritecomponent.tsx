import * as React from 'react';

interface Child {
    name?: string;
}

export class Julian extends React.Component<Child, {}> {
  render() {
    return (
        <div>
        <p>My name is: {this.props.name}</p>
        </div>
    );
  }
}

