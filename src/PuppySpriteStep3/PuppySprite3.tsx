import * as React from 'react';
import * as styles from './PuppySprite3.scss';

interface SpriteDetailsProp {
  flipped?: boolean;
}

export class PuppySpriteStep3 extends React.Component<SpriteDetailsProp, SpriteDetailsProp> {

  constructor(props: SpriteDetailsProp) {
    super(props);

    this.state = {
      flipped: this.props.flipped,
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className={styles.character + " " + (this.state.flipped ? styles.flipped:"")}></div>
    );
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 39) {
      this.setState({flipped: true})
    }
    else if (e.keyCode === 37) {
      this.setState({flipped: false})
    }
  }
}

