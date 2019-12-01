import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';


export default function NaviCategoryDetail(props) {

      let category = props.category;
      let returnPath = `/${category}`;
      let dataset = props.dataset;
      let brand = category === 'films' ? dataset.title : 'meh';

      return (
          <Navbar bg="dark" variant="dark">
              <Link to={{ pathname: returnPath}}>
                  <Button variant="outline-light text-white">&#8249;</Button>
              </Link>
              <Navbar.Brand className="mx-auto">
                  {brand}
              </Navbar.Brand>
          </Navbar>
      )
}
