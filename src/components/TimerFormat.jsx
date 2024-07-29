import React, { useState, useEffect, useRef } from 'react';

const TimerFormat = ({
  timeLeft,
  isRun,
  setTimeLeft,
  setIsRun,
  sessionLength,
  breakLength,
  timerLabel,
  setTimerLabel,
  setBreakTime,
  setSessionTime,
}) => {
  const beepRef = useRef(null);

  useEffect(() => {
    let intervalId;
    if (isRun && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      if (beepRef.current) {
        beepRef.current.play();
      }
      if (timerLabel === 'Session') {
        setTimerLabel('Break');
        setTimeLeft(breakLength * 60);
        setBreakTime(breakLength * 60);
      } else {
        setTimerLabel('Session');
        setTimeLeft(sessionLength * 60);
        setSessionTime(sessionLength * 60);
      }
      setIsRun(false);
    }
    return () => clearInterval(intervalId);
  }, [
    isRun,
    timeLeft,
    setTimeLeft,
    setIsRun,
    breakLength,
    sessionLength,
    timerLabel,
    setTimerLabel,
    setBreakTime,
    setSessionTime,
  ]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div id="timer-label">{timeLeft === 0 ? 'Break' : 'Session'}</div>
      <div id="time-left">{formatTime(timeLeft)}</div>
      <button id="start_stop" onClick={() => setIsRun(!isRun)}>
        {isRun ? 'Pause' : 'Start'}
      </button>
      <audio id="beep" ref={beepRef} src="./beep.mp3" />
    </div>
  );
};

export default TimerFormat;
