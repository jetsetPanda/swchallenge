import React from 'react';
import './App.css';
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Drilldown from 'react-router-drilldown'



function App() {

 return (
  <Router>
    <Drilldown>
      <Route exact path="/" component={Home} />
      <Route exact path="/people" component={People} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/starships" component={Starships} />
      <Route exact path="/species" component={Species} />
      <Route exact path="/planets" component={Planets} />
    </Drilldown>
  </Router>
  
  );

}

export default App;
