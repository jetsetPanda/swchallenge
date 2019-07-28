import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';

export default function Filmsdetail(props) {
  // init state
  const initialState = {
    dataset: [],
      isLoading: true,
  }

  // user state getter and setter via useState()
  const [dataset, setDataset] = useState(initialState);

  const {id} = props.location.state;

  // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
  useEffect(() => {
      const fetchData = async () => {
          const { data } = await axios(`https://swapi.co/api/films/${id}/`);

          setDataset(data);// results array to dataset: {} above
          console.log(data);
      }
      //asynchronious function is invoked by:
      fetchData();
  }, [id]) // "[]" prevents useEffect from executing infinite loop

  return dataset.isLoading? (
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      <div className="jumbotron"><Circlemenu/><h1>{dataset.title}</h1></div>
      <h2>Episode {dataset.episode_id} | Release: {dataset.release_date}</h2>
    </div>
  )
}