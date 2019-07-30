import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import Circlejumbo from '../components/Circlejumbo';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Infobox from '../components/Infobox';
import Infoboxarray from '../components/Infoboxarray';

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
        <Navbar.Brand className="mx-auto">
          {dataset.name}
        </Navbar.Brand>
      </Navbar>

      <Jumbotron className="text-center bg-dark"><Circlejumbo text={dataset.name}/>
      <p className="swyellow">{dataset.birth_year}</p>
      </Jumbotron>
      
      <Infobox name={'Height'} value={dataset.height} />
      <Infobox name={'Mass'} value={dataset.mass} />
      <Infobox name={'Hair Color'} value={dataset.hair_color} />
      <Infobox name={'Skin Color'} value={dataset.skin_color} />
      <Infobox name={'Eye Color'} value={dataset.eye_color} />
      <Infobox name={'Birth Year'} value={dataset.birth_year} />  
      <Infobox name={'Gender'} value={dataset.gender} />
      <Infobox name={'Homeworld'} value={dataset.homeworld} />
      <Infoboxarray name={'Films'} value={dataset.films} />     
      {/* <Infoboxarray name={'Planets'} value={dataset.planets} /> */}
      <Infoboxarray name={'Starships'} value={dataset.starships} />
      <Infoboxarray name={'Vehicles'} value={dataset.vehicles} />
      <Infoboxarray name={'Species'} value={dataset.species} />
      <Infobox name={'Created'} value={dataset.created} />
      <Infobox name={'Edited'} value={dataset.edited} />
      <Infobox name={'URL'} value={dataset.url} />

      {/* <Infobox name={''} value={dataset.} /> */}

    </div>
  )
}