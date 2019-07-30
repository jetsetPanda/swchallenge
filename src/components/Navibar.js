import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
// import './Navbar.css';

export default class Navibar extends Component {
    constructor(props) {
      super(props);
    }
  
    goBack = () => {
      this.props.history.goBack();
    }
  
    render() {
      return (
        <Navbar bg="dark" variant="dark">
          <Navbar.Header>
          <Navbar.Brand className="mx-auto">
            {this.props.title}
          </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav >
              <NavItem >
                Home
              </NavItem>
              <NavItem onClick={this.goBack} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
