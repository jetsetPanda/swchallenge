import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Circlejumbo from '../components/Circlejumbo';

export default function Starshipsdetail(props) {
  // init state
  const initialState = {
    dataset: [],
      isLoading: true,
  }

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
      <div className="jumbotron"><h1>Now Loading...</h1><h3>by jetsetEngine</h3></div>
  ) : (
    <div className="container">
      <div className="jumbotron"><Circlejumbo text={dataset.name}/><h1>{dataset.name}</h1></div>
      <h2>      
          Name: {dataset.name} Model: {dataset.model} Manufacturer: {dataset.manufacturer} Cost in Credits: {dataset.cost_in_credits} Length: {dataset.length} max Atmospheric Speed: {dataset.max_atmosphering_speed} Crew: {dataset.crew} Passengers: {dataset.passengers}
      </h2>
    </div>
  )
}
