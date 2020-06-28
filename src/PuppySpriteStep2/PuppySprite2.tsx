import * as React from 'react';
import * as styles from './PuppySprite2.scss';

interface SpriteDetailsProp {
  flipped?: boolean;
}

export class PuppySpriteStep2 extends React.Component<SpriteDetailsProp, SpriteDetailsProp> {

  constructor(props: SpriteDetailsProp) {
    super(props);

    this.state = {
      flipped: this.props.flipped,
    }
  }

  render() {
    return (
      <div className={styles.character + " " + (this.state.flipped ? styles.flipped:"")}></div>
    );
  }
}

