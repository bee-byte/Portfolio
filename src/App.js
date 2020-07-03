import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Testimonials from './components/pages/Testimonials';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Resume" component={Resume} />
          <Route exact path="/Testimonials" component={Testimonials} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
