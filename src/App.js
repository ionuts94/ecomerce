import React from 'react';
import HomePage from './pages/homepage/homepage.js';
import ShopPage from './pages/shoppage/shoppage.js';
import Header from './components/header/header.js';
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
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/shop" component={ ShopPage } />
      </Switch>
    </div>
  );
}

export default App;
