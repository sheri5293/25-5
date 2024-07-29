import React from 'react';

const BreakLength = ({ breakLength, setBreakLength }) => {
  return (
    <div>
      <div id="break-label">Break Length</div>
      <button
        id="break-decrement"
        onClick={() => setBreakLength(Math.max(breakLength - 1, 1))}
      >
        Decrement
      </button>
      <span id="break-length">{breakLength}</span>
      <button
        id="break-increment"
        onClick={() => setBreakLength(Math.min(breakLength + 1, 60))}
      >
        Increment
      </button>
    </div>
  );
};

export default BreakLength;
