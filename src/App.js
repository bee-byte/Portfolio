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
          <Route exact path="/bee-byte/Portfolio" component={Home} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Testimonials" component={Testimonials} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
