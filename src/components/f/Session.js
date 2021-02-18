import React, { useState } from 'react';
import moment from 'moment';

const Session = props => {

    const{
        sessionLength, incrementByOne, decrementByOne
    } = props;
    
    const sessionInMin = moment.duration(sessionLength, 's').minutes();

    return (
        <div className="Session">
            <h4>Session</h4>
            
            <button id="increment" onClick={incrementByOne}> + </button>
            <p>{sessionInMin}</p>
            <button id="decrement" onClick={decrementByOne}> - </button>
            
        </div>
    );
};

export default Session;