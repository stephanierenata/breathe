import React from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

const TimeLeft = ({ breakLength, sessionLength, timerLabel, handleStartStopClick, isStarted, timeLeft }) => {
    
    const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: 'false' });

    
    return (
        <div className="TimeLeft">
            <h4>Time Left for {timerLabel}</h4>
            <p>{formattedTimeLeft}</p>
            <button onClick={handleStartStopClick}>{isStarted? 'Stop' : 'Start'}</button>

        </div>
    );
};

export default TimeLeft;