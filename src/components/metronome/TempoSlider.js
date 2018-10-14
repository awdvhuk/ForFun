import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class TempoSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, onChange, onAfterChange } = this.props;

    return (
      <StyledTempoCase>
        <h2>{value}</h2>

        <div className="tempoSlider">
          <Slider
            onChange={onChange}
            onAfterChange={onAfterChange}
            value={value}
            min={10}
            max={300}
            step={1}
          />
        </div>
      </StyledTempoCase>
    );
  }
}

const sliderColor = '#4e4e4e';
const StyledTempoCase = styled.div`
  & .tempoSlider {
    display: inline-block;

    .rc-slider-track {
      background-color: ${sliderColor};
    }

    .rc-slider-handle {
      border-color: ${sliderColor};
      background-color: ${sliderColor};
    }

    .rc-slider-handle:active {
      border-color: ${sliderColor};
      box-shadow: 0 0 5px ${sliderColor};
    }

    .rc-slider-handle:hover {
      border-color: ${sliderColor};
    }

    .rc-slider-handle:focus {
      border-color: ${sliderColor};
      box-shadow: none;
    }
  }
`;

TempoSlider.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  onAfterChange: PropTypes.func
};

TempoSlider.defaultProps = {
  value: 60,
  onChange: () => null,
  onAfterChange: () => null
};

export default TempoSlider;
