import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import hatStrong from '../../audio/metronome/hat_strong.mp3';
import hatWeak from '../../audio/metronome/hat_weak.mp3';
import cowbellStrong from '../../audio/metronome/cowbell_strong.mp3';
import cowbellWeak from '../../audio/metronome/cowbell_weak.mp3';

class SoundSelect extends Component {
  onChange = (e) => {
    const text = e.target.text;
    this.props.onChange(text, audio[text]);
  }

  render() {
    const { value } = this.props;

    return (
      <DropdownButton
        id="sound"
        title="Sound"
      >
        {
          soundTypes.map(sound => {
            return (
              <MenuItem
                onClick={this.onChange}
                key={sound}
                active={value === sound ? true : false}
              >
                {sound}
              </MenuItem>
            );
          })
        }
      </DropdownButton>
    );
  }
}

const audio = {
  'Hi-hat': {
    strong: hatStrong,
    weak: hatWeak
  },

  'Cowbell': {
    strong: cowbellStrong,
    weak: cowbellWeak
  }
};

const soundTypes = [
  'Cowbell', 'Hi-hat'
];

SoundSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

SoundSelect.defaultProps = {
  value: 'Cowbell',
  onChange: () => null
};

export default SoundSelect;
