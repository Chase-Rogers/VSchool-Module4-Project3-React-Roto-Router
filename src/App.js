import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
            <Route exact path='/about'>
              <About/>
            </Route>
            <Route exact path='/services'>
              <Services/>
            </Route>
        </Switch>
      <Footer/>
    </div>
  );
}

export default App;
