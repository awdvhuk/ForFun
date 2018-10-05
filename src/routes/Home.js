import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="pageTitle">Welcome, my friend!</h1>
      </React.Fragment>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
