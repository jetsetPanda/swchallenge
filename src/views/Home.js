import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const categories = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <p>
        <Link to="/films"><button>Films</button></Link><br></br>
        <Link to="/people"><button>People</button></Link>
        <Link to="/planets"><button>Planets</button></Link>
        <Link to="/species"><button>Species</button></Link>
        <Link to="/starships"><button>Starships</button></Link>
        <Link to="/vehicles"><button>Vehicles</button></Link>
      </p>
    </div>
  )
}