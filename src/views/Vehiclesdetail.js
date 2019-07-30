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

export default function Vehiclesdetail(props) {
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
        <Link to={{ pathname: '/vehicles'}}>
          <Button variant="outline-light text-white">&#8249;</Button>
        </Link>  
        <Navbar.Brand className="mx-auto">
          {dataset.name}
        </Navbar.Brand>
      </Navbar>

      <Jumbotron className="text-center bg-dark"><Circlejumbo text={dataset.name}/>
      <p className="swyellow">{dataset.model}</p>
      </Jumbotron>
      
      <Infobox name={'Manufacturer'} value={dataset.manufacturer} />
      <Infobox name={'Cost in Credits'} value={dataset.cost_in_credits} />
      <Infobox name={'Length'} value={dataset.length} />
      <Infobox name={'Max Atmosphering Speed'} value={dataset.max_atmosphering_speed} />
      <Infobox name={'Crew'} value={dataset.crew} />
      <Infobox name={'Passengers'} value={dataset.passengers} />  
      <Infobox name={'Cargo Capacity'} value={dataset.cargo_capacity} />
      <Infobox name={'Consumables'} value={dataset.consumables} />
      <Infobox name={'Vehicle Class'} value={dataset.vehicle_class} />
      <Infoboxarray name={'Films'} value={dataset.films} />     
      <Infobox name={'Created'} value={dataset.created} />
      <Infobox name={'Edited'} value={dataset.edited} />
      <Infobox name={'URL'} value={dataset.url} />

    </div>
  )
}