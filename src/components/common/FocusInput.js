import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class NewComponent extends Component {
  componentDidMount() {
    this.hiddenInput.focus();
  }

  preventBlur = (e) => { e.target.focus(); }

  createRef = (element) => { this.hiddenInput = element }

  render() {
    return (
      <HiddenInput>
        <input
          onBlur={this.preventBlur}
          className="hiddenInput"
          ref={this.createRef}
          onKeyUp={this.props.onKeyUp}
          tabIndex="0"
          autoFocus
          readOnly
          max={0}
        />
      </HiddenInput>
    );
  }
}

const HiddenInput = styled.div`
  position: absolute;

  & input {
    background: transparent;
    color: transparent;
    border: none;
    caret-color: transparent;
    position: absolute;
  }
`;

NewComponent.propTypes = {
  onKeyUp: PropTypes.func
};

NewComponent.defaultProps = {
  onKeyUp: () => null
};

export default NewComponent;
