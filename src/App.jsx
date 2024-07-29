import React, { useState, useEffect, useRef } from 'react';
import BreakLength from './components/BreakLength';
import SessionLength from './components/SessionLength';
import TimerFormat from './components/TimerFormat';
import './styles/App.css';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRun, setIsRun] = useState(false);
  const [timerLabel, setTimerLabel] = useState('Session');
  const beepRef = useRef(null);

  useEffect(() => {
    if (isRun) {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength, isRun]);

  const handleReset = () => {
    setIsRun(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimeLeft(25 * 60);
    setTimerLabel('Session');
    if (beepRef.current) {
      beepRef.current.pause();
      beepRef.current.currentTime = 0;
    }
  };

  return (
    <div className="App">
      <BreakLength breakLength={breakLength} setBreakLength={setBreakLength} />
      <SessionLength
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
      />
      <TimerFormat
        timeLeft={timeLeft}
        isRun={isRun}
        setTimeLeft={setTimeLeft}
        setIsRun={setIsRun}
        sessionLength={sessionLength}
        breakLength={breakLength}
        timerLabel={timerLabel}
        setTimerLabel={setTimerLabel}
        setBreakTime={setTimeLeft}
        setSessionTime={setTimeLeft}
      />
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
