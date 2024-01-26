import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './Home'; // Replace 'Home' with your actual component for the home section
import About from './About'; // Replace 'About' with your actual component for the about section
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
