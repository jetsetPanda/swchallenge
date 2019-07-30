import React from 'react';
import './Infobox.css';

const Infoboxarray = props => (

        <div>
            <h6>{props.name}</h6>
            {props.value.map((item) => (
                <span><h4>{item}</h4><br/></span> 
            ))}
            <div className="blackbar"></div>
        </div>
)
export default Infoboxarray;

// chose to define this presentational component as a constant vs regular react comp to help remove some dependencies and importing extra lines of code, helping cut down on app load time