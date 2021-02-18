import React, { useState } from 'react';
import moment from 'moment';

const Break = props => {
    const{ breakLength, incrementByOne, decrementByOne} = props;

    const breakInMin = moment.duration(breakLength, 's').minutes();

    return (
        <div className="Break">
            <h4>Break</h4>
            
            <button id="increment" onClick={incrementByOne}> + </button>
            <p>{breakInMin}</p>
            <button id="decrement" onClick={decrementByOne}> - </button>
            
        </div>
    );
};

export default Break;