import React, { useState } from 'react';
import moment from 'moment';
import './Focus.css'

const Session = props => {

    const{
        sessionLength, incrementByOne, decrementByOne
    } = props;
    
    const sessionInMin = moment.duration(sessionLength, 's').minutes();

    return (
        <div className="Session section-block">
            <h4>Session</h4>
            
            <button id="increment" onClick={incrementByOne} class="counter-button"> + </button>
            <p>{sessionInMin}</p>
            <button id="decrement" onClick={decrementByOne} class="counter-button"> - </button>
            
        </div>
    );
};

export default Session;