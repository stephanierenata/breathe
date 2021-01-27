import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "navbar">
            <Link to="/"><div className = "title">Breathe</div></Link>
            <div className = "navbar-links">
                <ul>
                    <li><Link to='/Focus'>Focus</Link></li>
                    <li><Link to='/Sleep'>Sleep</Link></li>
                    <li><Link to='Meditation'>Meditation</Link></li>
                    <li><Link to='/Breath'>Breath</Link></li>

                </ul>
            </div>


        </div>
    );
}

export default NavBar;
