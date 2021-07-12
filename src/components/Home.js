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
            <label className="focus-label">focus </label>
          </div>
          
        </Link>

        <Link to="/Sleep">
          <div className="sleep-circle">
            <label className="sleep-label">sleep</label>
          </div>
          
        </Link>

        <Link to="/Meditation">
          <div className="meditation-circle">
            <label className="meditation-label">meditation</label>
          </div>
          
        </Link>

        <Link to="/Breath">
          <div className="breath-circle">
            <label className="breath-label">breath</label>
          </div>
          
        </Link>


      </div>
    </div>
  );
};

export default Home;
