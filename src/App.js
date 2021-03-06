
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <Router>
        <div>
          <Navbar/>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    ) 
  }
}

export default App;
