import React, { useState, useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import Circlejumbo from '../components/Circlejumbo';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import Infobox from '../components/Infobox';
import Infoboxarray from '../components/Infoboxarray';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';


export default function Filmsdetail(props) {
  // init state
  const initialState = {
    dataset: [],
      isLoading: true,
  }
    console.log('MX PROPS ARE: ',props);
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
      <Link to={{ pathname: '/films'}}>
          <Button variant="outline-light text-white">&#8249;</Button>
        </Link>  
        <Navbar.Brand className="mx-auto">
          {dataset.title}
        </Navbar.Brand>
      </Navbar>

        <Jumbotron className="text-center bg-dark"><Circlejumbo text={dataset.title}/>
            <p className="swyellow">{dataset.opening_crawl}</p>
        </Jumbotron>

        <Infobox name={'Episode ID'} value={dataset.episode_id} />
        <Infobox name={'Director'} value={dataset.director} />
        <Infobox name={'Producer'} value={dataset.producer} />
        <Infobox name={'Release Date'} value={dataset.release_date} />
        <Infoboxarray name={'Characters'} value={dataset.characters} />
        <Infoboxarray name={'Planets'} value={dataset.planets} />
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