import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';
import Films from '../views/Films';

export default function Filmsdetail(props) {
  // init state
  const initialState = {
      film: [],
      isLoading: true,
  }

  // user state getter and setter via useState()
  const [film, setFilm] = useState(initialState);

  const {id} = props.location.state;

  // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
  useEffect(() => {
      const fetchFilm = async () => {
          const { data } = await axios(`https://swapi.co/api/films/${id}/`);

          setFilm(data);// results array to films: {} above
          console.log(data);
      }
      //asynchronious function is invoked by:
      fetchFilm();
  }, [id]) // "[]" prevents useEffect from executing infinite loop

  return film.isLoading? (
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      <div className="jumbotron"><h1>{film.title}</h1></div>
      <h2>Episode {film.episode_id} | Release: {film.release_date}</h2>
    </div>
  )
}