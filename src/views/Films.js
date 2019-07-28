import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Films(props) {
  // init state
  const initialState = {
      films: [],
      isLoading: true,
  }

  // user state getter and setter
  const [films, setFilm] = useState(initialState);

  // useEffect method to get SWAPI data (my alternative to class style 'componentDidMount')
  useEffect(() => {
      const fetchFilms = async () => {
          const { data } = await axios(`https://swapi.co/api/films/`);

          setFilm(data.results);// results array to films: {} above
          console.log(data.results);
      }

      //async function is invoked by:
      fetchFilms();
  }, []) // "[]" prevents useEffect from executing infinite loop

  return films.isLoading? (
      <div><h1>Now Loading...</h1></div>
  ) : (
    <div className="container">
      <h1>FILMS!</h1>

        {films.map((film, index) => (
        <div className="card mb-1">
            <div className="card-body">
            <h3 className="card-title">Movie: {film.title}</h3>
            <h4 className="card-subtitle mb-3 text-muted">
                Episode: {film.episode_id} | Id: {index+1}
            </h4>
            </div>
        </div>
        ))}

    </div>
  )
}