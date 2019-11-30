import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Circlemenu from '../components/Circlemenu';
import Spinner from 'react-bootstrap/Spinner';
import Navicategory from '../components/Navicategory';
import Quote from '../components/Quote';
import CategorySnippet from "../components/CategorySnippet";

export default function Category(props) {
    // init state
    const initialState = {
        dataset: [],
        isLoading: true,
    }

    // user state getter and setter via useState()
    const [dataset, setDataset] = useState(initialState);
    const [isLoading, setIsLoading] = useState(initialState);

    let categoryDetailPath = `${props.category}/detail`;

    // useEffect method to get SWAPI data (my alternative to LM componentDidMount)
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(`https://swapi.co/api/${props.category}/`);

            setDataset(data.results);// results array to dataset: {} above
            // setIsLoading(false);  // investigate
            console.log('Data Results: ',data.results);
            console.log('is it loading? ',isLoading);
        }
        //asynchronious function is invoked by:
        fetchData();
    }, []); // "[]" prevents useEffect from executing infinite loop

    console.log('dataset 3 :', dataset);
    // console.log('loading 3 :', isLoading); // investigate isLoading

    return dataset.isLoading? (
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
    ) : (
        <div className="container">

            <Navicategory brand={`${props.category}`}/>
            <Quote />

            {dataset.map((categoryData, index) => (

                <Link to={{ pathname: categoryDetailPath, state: { url : categoryData.url }}} style={{textDecoration: 'none'}} >
                    <div className="card mb-1">
                        <div className="card-body ">
                            <div className="d-inline">
                                <Circlemenu text={categoryData.title}/>
                            </div>
                            <div className="d-inline">
                                <h3 className="card-title menufont">{categoryData.title}</h3>
                                <p className="card-subtitle mb-3 menufont">
                                    <CategorySnippet category={props.category} data={categoryData} />
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}