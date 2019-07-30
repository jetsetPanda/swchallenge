import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';
import Spinner from 'react-bootstrap/Spinner';
import Navicategory from '../components/Navicategory';

export default function Starships(props) {
  // init state
  const initialState = {
      dataset: [],
      isLoading: true,
  }

  // user state getter and setter via useState()
  const [dataset, setDataset] = useState(initialState);

  // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
  useEffect(() => {
      const fetchData = async () => {
          const { data } = await axios(`https://swapi.co/api/starships/`);

          setDataset(data.results);// results array to dataset: [] above
          console.log(data.results);
      }
      //asynchronious function is invoked by:
      fetchData();
  }, []) // "[]" prevents useEffect from executing infinite loop

  return dataset.isLoading? (
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <div className="container">

      <Navicategory brand={'STARSHIPS'}/>

        {dataset.map((starship, index) => (
        <Link to={{ pathname: '/starships/:id', state: { url : starship.url }}}>
            <div className="card mb-1">
                <div className="card-body">
                    <Circlemenu text={starship.name}/><h3 className="card-title">{starship.name}</h3>
                    <h4 className="card-subtitle mb-3 text-muted">
                        {starship.model}            
                    </h4>
                </div>
            </div>
        </Link>
        ))}
    </div>
  )
}