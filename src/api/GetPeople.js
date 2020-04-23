/**
 * SWAPI Call to Loop and Get All People Objects
 */
import axios from 'axios';

export default function GetPeople() {

    function APIPeople() {
        let people = [];
        // first page
        return axios("https://swapi.dev/api/people/")
            .then(response => {
                console.log("response from people call: ", response);
                // first page response
                people = response.data.results;
                return response.data.count;
            })
            .then(count => {
                // exclude first request
                const numberOfPagesLeft = Math.ceil((count - 1) / 10);
                let promises = [];
                // starting at 2 as first page has been called
                for (let i = 2; i <= numberOfPagesLeft; i++) {
                    promises.push(axios(`https://swapi.dev/api/people?page=${i}`));
                }
                return Promise.all(promises);
            })
            .then(response => {
                //get the rest of responses from pages 2 to n.
                people = response.reduce((acc, data) => [...acc, ...data.data.results], people);
                return people;
            })
            .catch(error => console.log("API / Transmission Error"));
    }

    (async () => {
        const starwarsPeople = await APIPeople();
        console.log("starwarsPeople", starwarsPeople.length);
    })();

}