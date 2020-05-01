import * as React from 'react';
import { KeyboardEvent } from 'react';
import * as styles from './MickeySprite.scss';

interface SpriteDetails {
    flipped: boolean;
}

export class MickeySprite extends React.Component<SpriteDetails, SpriteDetails> {
  
  constructor(props: SpriteDetails) {
    super(props);

    this.state= {
      flipped: this.props.flipped
    }

  }

  render() {
    return (
        <div className={styles.character + " " + (this.state.flipped ? styles.flipped:"")}></div>
    );
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 39) {
      this.setState({flipped: false})
    }
    else if (e.keyCode === 37) {
      this.setState({flipped: true})
    }
  }
}

