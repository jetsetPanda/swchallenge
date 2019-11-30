import React from 'react';
import './Circlemenu.css';

export default function Circlemenu(props) {
    
    let str = props.text.toUpperCase();
    
    // console.log('String is: ',str);

    let initials = str.split(/\s/).slice(0,2).reduce((res,word)=> res+=word.slice(0,1),''); // regex '/\s/' covers white space as string params on .split() 
    
    // console.log('CircleMenu initials are: ',initials);

    return (
        <div id="circle">
            <div id="circletext"><h3>{initials}</h3></div>
        </div>
    )

};