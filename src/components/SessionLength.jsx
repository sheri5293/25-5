import React from 'react';

const SessionLength = ({ sessionLength, setSessionLength }) => {
  return (
    <div>
      <div id="session-label">Session Length</div>
      <button
        id="session-decrement"
        onClick={() => setSessionLength(Math.max(sessionLength - 1, 1))}
      >
        Decrement
      </button>
      <span id="session-length">{sessionLength}</span>
      <button
        id="session-increment"
        onClick={() => setSessionLength(Math.min(sessionLength + 1, 60))}
      >
        Increment
      </button>
    </div>
  );
};

export default SessionLength;
