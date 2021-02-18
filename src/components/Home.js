import React from 'react';
import { Link } from "react-router-dom";
import NavBar from './NavBar';
import './Home.css';


const Home = () => {
  return (
    <div className="Home">
      <NavBar />

      <div className="top-element">
        <h1 className="headings">breathe</h1>
        <hr />

        <h3 className="desc">what can i help you with today?</h3>

      </div>
      <div className="option">
        <Link to="/Focus">

          <div className="focus-circle">
    
          </div>
          <label className="focus-label">focus </label>
        </Link>

        <Link to="/Sleep">
          <div className="sleep-circle">
            
          </div>
          <label className="sleep-label">sleep</label>
        </Link>

        <Link to="/Meditation">
          <div className="meditation-circle">
            
          </div>
          <label className="meditation-label">meditation</label>
        </Link>

        <Link to="/Breath">
          <div className="breath-circle">
            
          </div>
          <label className="breath-label">breath</label>
        </Link>


      </div>
    </div>
  );
};

export default Home;
