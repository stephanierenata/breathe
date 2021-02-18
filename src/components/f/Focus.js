import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar'
import Break from './Break';
import Session from './Session';
import TimeLeft from './TimeLeft';

const Focus = () => {

  const [currentSessionType, setCurrentSessionType] = useState('Session');
  const [intervalId, setIntervalId] = useState(null);

  const [sessionLength, setSessionLength] = useState(300)
  const decrementByOne = () => {
    const newSessionLength = sessionLength - 60;

    if (newSessionLength < 0) {
      setSessionLength(0);
    } else {
      setSessionLength(newSessionLength);
    }
  }

  const incrementByOne = () => {
    setSessionLength(sessionLength + 60);
  }

  const [breakLength, setBreakLength] = useState(300)
  const decrementBreakByOne = () => {
    const newBreakLength = breakLength - 60;

    if (newBreakLength < 0) {
      setBreakLength(0);
    } else {
      setBreakLength(newBreakLength);
    }
  }

  const incrementBreakByOne = () => {
    setBreakLength(breakLength + 60);
  }

  const handleResetButton = () => {
    setIntervalId(null);
    setCurrentSessionType('Session');
    setSessionLength(60*25);
    setBreakLength(60*5);
    setTimeLeft(60*25);
  }

  const isStarted = intervalId !== null;

  const handleStartStopClick = () => {
    //start mode
    if (isStarted) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      //stop mode
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1;
          if (newTimeLeft >= 0) {
            return prevTimeLeft - 1;
          }
          //switch between session and break
          if (currentSessionType === 'Session') {
            setCurrentSessionType('Break');
            setTimeLeft(breakLength);
          } else if (currentSessionType === 'Break') {
            setCurrentSessionType('Session');
            setTimeLeft(sessionLength);
          }
          return prevTimeLeft;
        });
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const [timeLeft, setTimeLeft] = useState(sessionLength);

  useEffect(() => {
    setTimeLeft(sessionLength);
  }, [sessionLength])

  return (
    <div className="Focus">
      <NavBar />
      <h1>Focus</h1>
      <Break breakLength={breakLength} 
      incrementByOne={incrementBreakByOne} 
      decrementByOne={decrementBreakByOne} />

      <Session sessionLength={sessionLength} 
      incrementByOne={incrementByOne} 
      decrementByOne={decrementByOne} />

      <TimeLeft breakLength={breakLength}
        sessionLength={sessionLength}
        timerLabel={currentSessionType}
        handleStartStopClick={handleStartStopClick}
        isStarted={isStarted}
        timeLeft={timeLeft}
        intervalId={intervalId}
        timeLeft={timeLeft} />
      
      <button onClick={handleResetButton}>Reset</button>
    
    </div>
  );
};

export default Focus;