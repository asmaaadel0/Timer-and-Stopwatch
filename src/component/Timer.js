import React, { useState, useEffect } from "react";

import "./Stopwatch.css";
import "./Timer.css";

function Timer() {
  const [time, setTime] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime("");
    setIsRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    if (timeInSeconds === "") {
      return "00:00:00";
    }
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
  const handleTime = (event) => {
    setTime(event.target.value);
  };

  return (
    <div>
      <h1 className="stopwatch"> Timer </h1>{" "}
      <div className="center">
        <div className="input">
          <label> Set Timer in Minutes </label>{" "}
          <input value={time} onChange={handleTime} type="number" />
        </div>{" "}
        <p className="time"> {formatTime(time)} </p>{" "}
        {!isRunning ? (
          <button className="time-btn" onClick={handleStart}>
            {" "}
            Start{" "}
          </button>
        ) : (
          <button className="time-btn" onClick={handleStop}>
            {" "}
            Stop{" "}
          </button>
        )}{" "}
        <button className="time-btn" onClick={handleReset}>
          {" "}
          Reset{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default Timer;
