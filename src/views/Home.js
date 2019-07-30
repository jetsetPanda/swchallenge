import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

export default function Home() {
//   const categories = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
  return (
    <div className="container bggray">
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="mx-auto">
                <h4>STAR WARS API</h4>
            </Navbar.Brand>
        </Navbar>

        <div className="hero">
            <h5 className="textbtm">Explore the Star Wars Universe</h5>
            <p className="textbtm2">Orbiting the planet at maximum velocity. The moon with the Rebel base will be in range in thirty minutes. This will be a day long remembered.</p> 
        </div>

        <Link to="/films" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                    <div className="card-body">
                    <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469160/swapi/noun_Film_1666495_2x_laysnj.png"   width="48" height="45" align="left"/>Films</h2>
                    </div>
            </div>
        </Link>

        <Link to="/people" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                    <div className="card-body">
                    <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469161/swapi/noun_person_1880095_2x_bzqoae.png"   width="48" height="45" align="left"/>People</h2>
                    </div>
            </div>
        </Link>
        <Link to="/planets" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                    <div className="card-body">
                    <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469161/swapi/noun_Planet_1867071_2x_j5twre.png"   width="48" height="45" align="left"/>Planets</h2>
                    </div>
            </div>
        </Link>
        <Link to="/species" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                    <div className="card-body">
                    <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469162/swapi/noun_alien_627223_2x_lpq0rg.png"   width="48" height="45" align="left"/>Species</h2>
                    </div>
            </div>
        </Link>
        <Link to="/starships" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                <div className="card-body">
                <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469162/swapi/noun_spaceship_1311585_hnpr12.png"   width="48" height="45" align="left"/>Starships</h2>
                </div>
            </div>
        </Link>
        <Link to="/vehicles" style={{textDecoration: 'none'}}>
            <div className="card mb-1">
                <div className="card-body">
                <h2 className="menufont"><img className="padright" src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469162/swapi/noun_Car_1881053_2x_cbqyu4.png"   width="48" height="40" align="left"/>Vehicles</h2>
                </div>
            </div>
        </Link>

        <div className="text-center mt-3 pb-3"> 
            <img src="https://res.cloudinary.com/jetsetengine/image/upload/v1564469161/swapi/ensigns_zoy6dt.png" align="center"/>
        </div>
    </div>
  )
}