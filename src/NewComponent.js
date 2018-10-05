import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.someprop}
      </React.Fragment>
    );
  }
}

NewComponent.propTypes = {
  someprop: PropTypes.string
};

NewComponent.defaultProps = {
  someprop: 'Hello, World!'
};

export default NewComponent;
