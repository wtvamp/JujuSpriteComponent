import * as React from 'react';
import * as styles from './PuppySprite.scss';

interface SpriteDetailsProp {
    flipped: boolean;
}

interface SpriteDetailsState extends SpriteDetailsProp {
    left: number;
    top: number;
}

export class PuppySprite extends React.Component<SpriteDetailsProp, SpriteDetailsState> {
  
  constructor(props: SpriteDetailsProp) {
    super(props);

    this.state = {
      flipped: this.props.flipped,
      left: 0,
      top: 0
    }
  }

  render() {
    return (
        <div className={styles.character + " " + (this.state.flipped ? styles.flipped:"")} 
             style={{position: 'relative', left: this.state.left + 'px', top: this.state.top + 'px'}}
        >
        </div>
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
      this.setState({flipped: true, left: this.state.left + 5})
    }
    else if (e.keyCode === 37) {
      this.setState({flipped: false, left: this.state.left - 5})
    }
    else if (e.keyCode === 38) {
      this.setState({top: this.state.top - 5})
    }
    else if (e.keyCode === 40) {
      this.setState({top: this.state.top + 5})
    }
  }
}

