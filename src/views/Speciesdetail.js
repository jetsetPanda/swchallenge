import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Circlejumbo from '../components/Circlejumbo';

export default function Speciesdetail(props) {
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
          Name: {dataset.name} Classification: {dataset.classification} Designation: {dataset.designation} Average Height: {dataset.average_height} Skin Colors: {dataset.skin_colors} Hair Colors: {dataset.hair_colors} Terrain: {dataset.terrain} Language: {dataset.language}
      </h2>
    </div>
  )
}
