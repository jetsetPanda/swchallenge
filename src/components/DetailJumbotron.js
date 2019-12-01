import React from 'react';
import './Infobox.css';
import Synopsys from "./Synopsys";
import Circlejumbo from "./Circlejumbo";
import {Jumbotron} from "react-bootstrap";

function DetailJumbotron (props) {
    const category = props.category;
    const dataset = props.dataset;
    let text = category === 'films' ? dataset.title
        : 'meh';
    let content = category === 'films' ? dataset.opening_crawl : 'meh';

    return (
        <Jumbotron className="text-center bg-dark"><Circlejumbo text={text}/>
            <p className="swyellow">{content}</p>
        </Jumbotron>
    )

}
export default DetailJumbotron;