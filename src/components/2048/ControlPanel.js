import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

class ControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { prevStep, restart, score, record } = this.props;

    return (
      <StyledContainer>
        <div className="statistic">
          <div className="score">
            <b>Score: </b>
            <br />
            {score}
          </div>

          <div className="record">
            <b>Record: </b>
            <br />
            {record}
          </div>
        </div>

        <div className="buttons">
          <Button
            bsStyle="primary"
            onClick={prevStep}
          >
            ←
          </Button>

          <Button
            bsStyle="danger"
            onClick={restart}
          >
            Reset
          </Button>
        </div>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 300px;
  margin: 0 auto 0 auto;
  padding: 5px 5px 5px 8px;
  display: flex;
  justify-content: space-between;
  background: #dedede;
  border: 2px solid #9c9c9c;
  border-radius: 5px 5px 0 0;

  & .statistic,
  & .buttons {
    display: flex;
  }

  & .statistic {
    /* width: 150px; */
    justify-content: space-between;

    .score {
      margin-right: 6px;
      /* border-right: 1px solid #9c9c9c; */
    }

    div {
      width: 82px;
      border-right: 1px solid #9c9c9c;
      /* background: grey; */
    }
  }

  & .btn-danger { 
    margin-left: 5px;
  }
`;

ControlPanel.propTypes = {
  someprop: PropTypes.string
};

ControlPanel.defaultProps = {
  someprop: 'Hello, World!'
};

export default ControlPanel;
