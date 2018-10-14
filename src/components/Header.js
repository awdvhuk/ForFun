import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar staticTop inverse>
        <Navbar.Header>
          <Navbar.Brand><Link to="/home">Home</Link></Navbar.Brand>

          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/some_href"><NavItem>Some words</NavItem></LinkContainer>

            <NavDropdown title='Utils' id="games-list">
              <LinkContainer to={`/utils/metronome`}><MenuItem>Metronome</MenuItem></LinkContainer>

              {/* <MenuItem divider /> */}

              {/* <MenuItem></MenuItem> */}
            </NavDropdown>

            <NavDropdown title='Games' id="games-list">
              <LinkContainer to={`/games/2048`}><MenuItem>2048</MenuItem></LinkContainer>

              {/* <MenuItem divider /> */}

              {/* <MenuItem></MenuItem> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
