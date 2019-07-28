import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
//   const categories = ['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles'];
  return (
    <div className="container">
      <h1>Star Wars API</h1>
      <p>
        <Link to="/films">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">Films</h3>
                </div>
            </div>
        </Link>
        <Link to="/people">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">People</h3>
                </div>
            </div>
        </Link>
        <Link to="/planets">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">Planets</h3>
                </div>
            </div>
        </Link>
        <Link to="/species">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">Species</h3>
                </div>
            </div>
        </Link>
        <Link to="/starships">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">Starships</h3>
                </div>
            </div>
        </Link>
        <Link to="/vehicles">
            <div className="card mb-1">
                <div className="card-body">
                    <h3 className="card-title">Vehicles</h3>
                </div>
            </div>
        </Link>
      </p>
    </div>
  )
}