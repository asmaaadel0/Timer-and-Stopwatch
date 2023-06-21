import React, { useState, useEffect } from "react";

import "./Stopwatch.css";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return (
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  };

  return (
    <div>
      <h1 className="stopwatch"> Stopwatch </h1>{" "}
      <div className="center">
        <p className="time"> {formatTime(elapsedTime)} </p>{" "}
        <button className="time-btn" onClick={handleStartStop}>
          {" "}
          {isRunning ? "Stop" : "Start"}{" "}
        </button>{" "}
        <button className="time-btn" onClick={handleReset}>
          {" "}
          Reset{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Stopwatch;
