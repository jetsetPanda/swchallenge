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

export default function Speciesdetail(props) {
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
        <Link to={{ pathname: '/species'}}>
          <Button variant="outline-light text-white">&#8249;</Button>
        </Link>  
        <Navbar.Brand className="mx-auto">
          {dataset.name}
        </Navbar.Brand>
      </Navbar>

      <Jumbotron className="text-center bg-dark"><Circlejumbo text={dataset.name}/>
      <p className="swyellow">{dataset.classification}</p>
      </Jumbotron>
      
      <Infobox name={'Designation'} value={dataset.designation} />
      <Infobox name={'Average Height'} value={dataset.average_height} />
      <Infobox name={'Skin Colors'} value={dataset.skin_colors} />
      <Infobox name={'Hair Colors'} value={dataset.hair_colors} />
      <Infobox name={'Eye Colors'} value={dataset.eye_colors} />
      <Infobox name={'Average Lifespan'} value={dataset.average_lifespan} />
      <Infobox name={'Gender'} value={dataset.gender} />
      <Infobox name={'Homeworld'} value={dataset.homeworld} />
      <Infobox name={'Language'} value={dataset.language} />     
      <Infoboxarray name={'People'} value={dataset.people} />
      <Infoboxarray name={'Films'} value={dataset.films} />
      <Infobox name={'Created'} value={dataset.created} />
      <Infobox name={'Edited'} value={dataset.edited} />
      <Infobox name={'URL'} value={dataset.url} />

    </div>
  )
}