import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';

export default function Films(props) {
  // init state
  const initialState = {
      films: [],
      isLoading: true,
  }

  // user state getter and setter via useState()
  const [films, setFilm] = useState(initialState);

  // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
  useEffect(() => {
      const fetchFilms = async () => {
          const { data } = await axios(`https://swapi.co/api/films/`);

          setFilm(data.results);// results array to films: {} above
          console.log(data.results);
      }
      //asynchronious function is invoked by:
      fetchFilms();
  }, []) // "[]" prevents useEffect from executing infinite loop

  return films.isLoading? (
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      <h1>Star Wars Films</h1>

        {films.map((film, index) => (
        <Link to={{ pathname: '/films/:id', state: { id : index+1 }}}>
            <div className="card mb-1">
                <div className="card-body">
                <Circlemenu/><h3 className="card-title">Episode {film.episode_id}: {film.title}</h3>
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