import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
      super(props);
    }
  
    goBack = () => {
      this.props.history.goBack();
    }
  
    render() {
      return (
        <Navbar default collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {this.props.title}
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="/">
                Home
              </NavItem>
              <NavItem onClick={this.goBack} />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }