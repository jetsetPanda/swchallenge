import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';


export default function Navicategory(props) {

      let brand = props.brand.toUpperCase();

      return (
        <Navbar bg="dark" variant="dark">
        <Link to={{ pathname: '/'}}>
          <Button variant="outline-light text-white">&#8249;</Button>
        </Link>  
        <Navbar.Brand className="mx-auto">
          {brand}
        </Navbar.Brand>
      </Navbar>
      )
} 
