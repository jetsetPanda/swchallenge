import React, { Component } from 'react';
import './App.css';
// import { render } from 'react-dom'
import { Route, Switch} from 'react-router-dom'
// import Drilldown from 'react-router-drilldown'
import Home from './views/Home';
import People from './views/People';
import Films from './views/Films';
import Filmsdetail from './views/Filmsdetail';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';
import Species from './views/Species';
import Planets from './views/Planets';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/starships" component={Starships} />
      <Route exact path="/vehicles" component={Vehicles} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/planets" component={Planets} />
      <Route path="/films/:id" exact component={Filmsdetail} />
    </Switch>      
  )
}

// const SWAPI = 'https://swapi.co/api/people/';
// class App extends Component {
//   state = {
//     people: []
//   }

// componentDidMount() {
//   const url = `${SWAPI}`;
//   axios.get(url).then(response => response.data)
//   .then((data) => {
//     this.setState({ people: data.results })
//     console.log(`Characters are: `,this.state.people)
//   })
// }
// function App() {

//   return (
//    <Router>
//      <Drilldown>
//        <Route exact path="/" component={Home} />
//        <Route exact path="/people" component={People} />
//        <Route exact path="/films" component={Films} />
//        <Route exact path="/starships" component={Starships} />
//        <Route exact path="/species" component={Species} />
//        <Route exact path="/planets" component={Planets} />
//      </Drilldown>
//    </Router>
   
//    );
 
//  }

// <div className="container">
// <div className="col-xs-6">
// <h1>Star Wars API</h1>

// {this.state.people.map((char) => (
//   <div className="card mb-1">
//     <div className="card-body">
//       <h3 className="card-title">{char.name}</h3>
//       <h4 className="card-subtitle mb-3 text-muted">
//         {char.gender}
//       </h4>
//     </div>
//   </div>
// ))}

// </div>
// </div>