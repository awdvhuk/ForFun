import React, { Component } from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button } from 'react-bootstrap';

import Size from '../../components/metronome/Size';
import TempoSlider from '../../components/metronome/TempoSlider';
import SoundSelect from '../../components/metronome/SoundSelect';
import FocusInput from '../../components/common/FocusInput';
import { tick } from '../../components/metronome/utils';

import cowbellStrong from '../../audio/metronome/cowbell_strong.mp3';
import cowbellWeak from '../../audio/metronome/cowbell_weak.mp3';

class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempo: 60,
      size: {
        top: 4,
        bottom: 4
      },
      soundType: 'Cowbell',
      sound: {
        strong: cowbellStrong,
        weak: cowbellWeak
      },
      timer: null,
      stop: true,
      currentTick: 1
    };
  }

  onTempoChange = (tempo) => {
    clearInterval(this.state.timer);
    this.setState({
      tempo,
      timer: null,
      currentTick: 1
    });
  }

  onAfterChange = () => {
    if (!this.state.stop) {
      this.start();
    }
  }

  start = () => {
    if (this.state.timer) { return; }

    const interval = 60000 / this.state.tempo;

    const timer = setInterval(() => {
      const currentTick = tick(this.state.size, this.state.currentTick, this.state.sound);
      this.setState({
        currentTick
      });
    }, interval);

    this.setState({
      timer,
      stop: false
    })
  }

  stop = () => {
    clearInterval(this.state.timer);
    this.setState({
      timer: null,
      stop: true,
      currentTick: 1
    })
  }

  onSoundSelect = (soundType, sound) => {
    clearInterval(this.state.timer);
    this.setState({
      soundType,
      sound,
      currentTick: 1
    });
    setTimeout(() => {
      this.start();
    }, 30);
  }

  onSizeChange = (size) => {
    this.setState({
      size,
      currentTick: 1
    })
  }

  onKeyUp = ({ keyCode }) => {
    if (keyCode === 32) {
      const { stop } = this.state;
      if (stop) {
        this.start();
      }
      else {
        this.stop();
      }
      this.setState({
        stop: !stop,
        currentTick: 1
      });
    }
  }

  render() {
    const { tempo, size, soundType } = this.state;

    return (
      <StyledBox>
        <h1 className="pageTitle">Metronome</h1>

        <div className="settings">
          <TempoSlider
            onChange={this.onTempoChange}
            onAfterChange={this.onAfterChange}
            value={tempo}
          />

          <Size
            value={size}
            onChange={this.onSizeChange}
          />

          <SoundSelect
            value={soundType}
            onChange={this.onSoundSelect}
          />
        </div>

        <ButtonGroup>
          <Button
            bsStyle="success"
            onClick={this.start}
          >
            Play
          </Button>

          <Button
            bsStyle="danger"
            onClick={this.stop}
          >
            Stop
            </Button>
        </ButtonGroup>

        <FocusInput
          onKeyUp={this.onKeyUp}
        />
      </StyledBox>
    );
  }
}

const StyledBox = styled.div`
  text-align: center;

  & .settings {
    text-align: center;
    margin-bottom: 10px;
  }

  & .tempoSlider {
    width: 250px;
    margin-bottom: 20px;
  }

  & .sizeSelect {
    margin: 0 10px 10px 0;
  }
`;

export default Metronome;
