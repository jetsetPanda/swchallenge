import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';

export default function People(props) {
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
          const { data } = await axios(`https://swapi.co/api/planets/`);

          setDataset(data.results);// results array to dataset: [] above
          console.log(data.results);
      }
      //asynchronious function is invoked by:
      fetchData();
  }, []) // "[]" prevents useEffect from executing infinite loop

  return dataset.isLoading? (
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      
      <h1>PLANETS</h1>

        {dataset.map((planet, index) => (
        <Link to={{ pathname: '/planets/:id', state: { id : index+1 }}}>
            <div className="card mb-1">
                <div className="card-body">
                    <Circlemenu/><h3 className="card-title">{planet.name}</h3>
                    <h4 className="card-subtitle mb-3 text-muted">
                        {planet.diameter}            
                    </h4>
                </div>
            </div>
        </Link>
        ))}
    </div>
  )
}