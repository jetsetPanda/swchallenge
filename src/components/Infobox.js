import React from 'react';
import './Infobox.css';



const Infobox = props => (
        <div>
            <h6>{props.name}</h6>
            <h4>{props.value}<br/></h4>
            <div className="blackbar"></div>
        </div>
)
export default Infobox;

// chose to define this presentational component as a constant vs regular react comp to help remove some dependencies and importing extra lines of code, helping cut down on app load time