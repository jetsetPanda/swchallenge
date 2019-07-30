import React, { useState, useEffect } from 'react';
import axios from 'axios';

let linkarr = props.urls;

linkarr.forEach(url => {

    async () => {
        const {data} = await axios (url);

        return (
            <h1>{data.name}</h1>
        )
    }

})