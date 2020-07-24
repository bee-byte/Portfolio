import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/content/Home';
import Testimonials from './components/content/Testimonials';
import Contact from './components/content/Contact';
import Resume from './components/content/Resume';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Testimonials" component={Testimonials} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
