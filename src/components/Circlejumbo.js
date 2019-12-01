import React from 'react';
import './Circlejumbo.css';

export default function Circlemenu(props) {
    
    let str = props.text.toUpperCase();
    
    // console.log('String is: ',str);

    let initials = str.split(/\s/).slice(0,2).reduce((res,word)=> res+=word.slice(0,1),''); // regex '/\s/' covers white space as string params on .split() 
    
    // console.log('CircleMenu initials are: ',initials);

    return (
        <div id="jumbocircle">
            <div id="jumbofont"><h1>{initials}</h1></div>
        </div>
    )

};