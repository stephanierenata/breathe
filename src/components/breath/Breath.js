import React from 'react';
import NavBar from '../NavBar';
import './Breath.css';

const Breath = () =>{
  return(
    <div className = "Breath">
      <NavBar />
        <h1>Breath</h1>

        <div className = "outer">
          <div className = "inhale"></div>
          <label className = "inhale-text">inhale</label>
          <div className = "exhale"></div>
          <label className = "exhale-text">exhale</label>
        </div>
    </div>
  );    
};

export default Breath;