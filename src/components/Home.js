import React from 'react';
import{Link} from "react-router-dom"

const Home = () =>{
  return(
    <div className = "Home">
        <div className = "option">
            <label><Link to="/Focus">Focus </Link></label>

            <label><Link to="/Sleep">Sleep </Link></label>

            <label><Link to="/Meditation">Meditation </Link></label>

            <label><Link to="/Breath">Breath</Link></label>
            
        </div>
    </div>
  );    
};

export default Home;
