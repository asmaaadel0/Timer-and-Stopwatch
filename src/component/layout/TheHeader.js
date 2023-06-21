import React, { useState } from "react";

import "./TheHeader.css";
const TheHeader = () => {
  const [clicked, setClicked] = useState("timer");

  const clickHandler = (title) => {
    setClicked(title);
  };
  return (
    <ul>
      <li>
        <button
          className={clicked === "timer" ? "active" : ""}
          onClick={(event) => clickHandler("timer")}
        >
          Timer{" "}
        </button>{" "}
      </li>{" "}
      <li>
        <button
          className={clicked === "stopwatch" ? "active" : ""}
          onClick={(event) => clickHandler("stopwatch")}
        >
          {" "}
          Stopwatch{" "}
        </button>{" "}
      </li>{" "}
    </ul>
  );
};
export default TheHeader;
