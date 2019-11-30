import React from 'react';
import './Infobox.css';
import Synopsys from "./Synopsys";

function CategorySnippet (props) {
    const category = props.category;
    const data = props.data;

    return category === 'films' ? (
            <Synopsys crawl={data.opening_crawl}/>)
        : (<h1>'MEH!'</h1>)
}
export default CategorySnippet;