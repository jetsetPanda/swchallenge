import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Drilldown from 'react-router-drilldown'

import Home from './views/Home';

import Category from "./views/Category";
import CategoryDetail from "./views/CategoryDetail";

import People from './views/People';
import Films from './views/Films';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';
import Species from './views/Species';
import Planets from './views/Planets';
import Filmsdetail from './views/Filmsdetail';
import Peopledetail from './views/Peopledetail';
import Planetsdetail from './views/Planetsdetail';
import Speciesdetail from './views/Speciesdetail';
import Starshipsdetail from './views/Starshipsdetail';
import Vehiclesdetail from './views/Vehiclesdetail';


export default function App() {

const PeopleRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/people" component={People} />
      <Route path="/people/:id" exact component={Peopledetail} />  
  </Drilldown>
)

const FilmRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/films" render={(props) => <Category {...props} category={'films'}/>} />
      <Route path="/films/detail" exact component={CategoryDetail} />
      {/*render={(props) => <CategoryDetail {...props} category={'films'}/>} />*/}
  </Drilldown>
)

const StarshipsRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/starships" component={Starships} />
      <Route path="/starships/:id" exact component={Starshipsdetail} />    
  </Drilldown>
)

const VehiclesRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/vehicles" component={Vehicles} />
      <Route path="/vehicles/:id" exact component={Vehiclesdetail} />  
  </Drilldown>
)

const SpeciesRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/species" component={Species} />
      <Route path="/species/:id" exact component={Speciesdetail} />    
  </Drilldown>
)

const PlanetsRoute = ({ match }) => (
  <Drilldown>
      <Route exact path="/planets" component={Planets} />
      <Route path="/planets/:id" exact component={Planetsdetail} />
  </Drilldown>
)

  return (
    <Router>
      <Drilldown>
        <Route exact path="/" component={Home} />
        <Route path="/people" component={PeopleRoute} />
        <Route path="/films" component={FilmRoute} />
        <Route path="/starships" component={StarshipsRoute} />
        <Route path="/vehicles" component={VehiclesRoute} />
        <Route path="/species" component={SpeciesRoute} />
        <Route path="/planets" component={PlanetsRoute} />    
      </Drilldown>

    </Router>      
  )
}