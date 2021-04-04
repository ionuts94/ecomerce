import React from 'react';
import HomePage from './pages/homepage/homepage.js';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const Hats = () => {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/hats" component={ Hats  } />
      </Switch>
    </div>
  );
}

export default App;
