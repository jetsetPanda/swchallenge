import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';
import Spinner from 'react-bootstrap/Spinner';
import Navicategory from '../components/Navicategory';
import Quote from '../components/Quote';

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
    <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>
  ) : (
    <div className="container">

      <Navicategory brand={'PLANETS'}/>
      <Quote />

        {dataset.map((planet, index) => (
        <Link to={{ pathname: '/planets/:id', state: { url : planet.url }}} style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                <div className="card-body">
                    <Circlemenu  text={planet.name}/><h3 className="card-title menufont">{planet.name}</h3>
                    <h4 className="card-subtitle mb-3  menufont">
                        {planet.diameter}            
                    </h4>
                </div>
            </div>
        </Link>
        ))}
    </div>
  )
}