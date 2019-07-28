import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';

export default function Peopledetail(props) {
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
          const { data } = await axios(`https://swapi.co/api/planets/${id}/`);

          setDataset(data);// results array to dataset: {} above
          console.log("Dataset is: ",data);
      }
      //asynchronious function is invoked by:
      fetchData();
  }, [id]) // "[]" prevents useEffect from executing infinite loop

  return dataset.isLoading? (
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      <div className="jumbotron"><Circlemenu/><h1>{dataset.name}</h1></div>
      <h2>      
          Name: {dataset.name} Rotation Period: {dataset.rotation_period} Orbital Period: {dataset.orbital_period} Diameter: {dataset.diameter} Climate: {dataset.climate} Gravity: {dataset.gravity} Terrain: {dataset.terrain} Surface Water: {dataset.surface_water}
      </h2>
    </div>
  )
}
