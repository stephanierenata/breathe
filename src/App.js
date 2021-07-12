import React from 'react';
import './App.css';
import Home from './components/Home';
import Focus from './components/focus/Focus';
import Sleep from './components/sleep/Sleep';
import Meditation from './components/meditation/Meditation';
import Breath from './components/breath/Breath';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    
    <BrowserRouter>
    <div className ="App">
      <Switch>
        <Route path='/' component = {Home} exact/>
        <Route path='/Focus' component= {Focus} />
        <Route path='/Sleep' component= {Sleep} />
        <Route path='/Meditation' component= {Meditation} />
        <Route path='/Breath' component= {Breath} />
      </Switch>
    </div>
    </BrowserRouter>
   
  );
};

export default App;

