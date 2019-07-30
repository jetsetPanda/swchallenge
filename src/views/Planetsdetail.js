import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Circlejumbo from '../components/Circlejumbo';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Infobox from '../components/Infobox';
import Infoboxarray from '../components/Infoboxarray';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';

export default function Peopledetail(props) {
  // init state
  const initialState = {
    dataset: [],
      isLoading: true,
  }

  // user state getter and setter via useState()
  const [dataset, setDataset] = useState(initialState);

  const {url} = props.location.state;

  // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
  useEffect(() => {
      const fetchData = async () => {
          const { data } = await axios(url);

          setDataset(data);// results array to dataset: {} above
          console.log("Dataset is: ",data);
      }
      //asynchronious function is invoked by:
      fetchData();
  }, [url]) // "[]" prevents useEffect from executing infinite loop

  return dataset.isLoading? (
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <div className="container">
      <Navbar bg="dark" variant="dark">
        <Link to={{ pathname: '/planets'}}>
          <Button variant="outline-light text-white">&#8249;</Button>
        </Link>  

        <Navbar.Brand className="mx-auto">
          {dataset.name}
        </Navbar.Brand>
      </Navbar>

      <Jumbotron className="text-center bg-dark"><Circlejumbo text={dataset.name}/>
      <p className="swyellow">{dataset.diameter}</p>
      </Jumbotron>
      
      <Infobox name={'Rotation Period'} value={dataset.rotation_period} />
      <Infobox name={'Orbital Period'} value={dataset.orbital_period} />
      <Infobox name={'Diameter'} value={dataset.diameter} />
      <Infobox name={'Climate'} value={dataset.climate} />
      <Infobox name={'Gravity'} value={dataset.gravity} />
      <Infobox name={'Terrain'} value={dataset.surface_water} />  
      <Infobox name={'Surface Water'} value={dataset.gender} />
      <Infobox name={'Population'} value={dataset.population} />
      <Infoboxarray name={'Residents'} value={dataset.residents} />     
      <Infoboxarray name={'Films'} value={dataset.films} />
      <Infobox name={'Created'} value={dataset.created} />
      <Infobox name={'Edited'} value={dataset.edited} />
      <Infobox name={'URL'} value={dataset.url} />


    </div>
  )
}



