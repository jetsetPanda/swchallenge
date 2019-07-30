import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';
import Spinner from 'react-bootstrap/Spinner';

export default function Films(props) {
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
          const { data } = await axios(`https://swapi.co/api/films/`);

          setDataset(data.results);// results array to films: {} above
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

      <h1>Star Wars Films</h1>

        {dataset.map((film, index) => (
        <Link to={{ pathname: '/films/:id', state: { url : film.url }}}>
            <div className="card mb-1">
                <div className="card-body">
                <Circlemenu text={film.title}/><h3 className="card-title">Episode {film.episode_id}: {film.title}</h3>
                <h4 className="card-subtitle mb-3 text-muted">
                    {film.opening_crawl}<br/>
                    Id: {index+1}<br/>
                    Released: {film.release_date}
                </h4>
                </div>
            </div>
        </Link>
        ))}
    </div>
  )
}