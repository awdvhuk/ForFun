import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DropdownButton, MenuItem, ButtonGroup } from 'react-bootstrap';

class NewComponent extends Component {
  onTopSelect = (e) => {
    this.props.onChange({
      top: +e.target.text,
      bottom: this.props.value.bottom
    });
  }

  onBottomSelect = (e) => {
    this.props.onChange({
      top: this.props.value.top,
      bottom: +e.target.text
    });
  }

  render() {
    const { value } = this.props;

    return (
      <StyledDropdownGroup vertical className="sizeSelect">
        <DropdownButton
          id="top"
          title={`${value.top}`}
          noCaret
        >
          {
            topSizeOptions.map(option => {
              return (
                <MenuItem
                  onClick={this.onTopSelect}
                  key={option}
                  active={+value.top === +option ? true : false}
                >
                  {option}
                </MenuItem>
              );
            })
          }
        </DropdownButton>

        <DropdownButton
          id="bottom"
          title={value.bottom}
          noCaret
        >
          {
            bottomSizeOptions.map(option => {
              return (
                <MenuItem
                  onClick={this.onBottomSelect}
                  key={option}
                  active={+value.bottom === +option ? true : false}
                >
                  {option}
                </MenuItem>
              );
            })
          }
        </DropdownButton>
      </StyledDropdownGroup>
    );
  }
}

const StyledDropdownGroup = styled(ButtonGroup)`
  & .dropdown-menu {
    padding: 2px 0;
    min-width: 34px;
    max-width: 50px;

    li {
      a {
        padding: 0 2px 0 0; 
        text-align: center;
      }
    }
  }
`;

const topSizeOptions = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

const bottomSizeOptions = [
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

NewComponent.propTypes = {
  value: PropTypes.objectOf(PropTypes.number),
  onChange: PropTypes.func
};

NewComponent.defaultProps = {
  value: {
    top: 4,
    bottom: 4
  },
  onChange: () => null
};

export default NewComponent;
