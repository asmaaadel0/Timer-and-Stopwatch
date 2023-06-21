import React, { useState } from "react";

import TheHeader from "./component/layout/TheHeader";
import StopWatch from "./component/StopWatch";
import Timer from "./component/Timer";

function App() {
  const [isTimer, setIsTimer] = useState(true);
  const clickHandler = (title) => {
    if (title === "timer") {
      setIsTimer(true);
    } else {
      setIsTimer(false);
    }
  };
  return (
    <div>
      {" "}
      <TheHeader onClickHandler={clickHandler} /> {!isTimer && <StopWatch />}{" "}
      {isTimer && <Timer />}{" "}
    </div>
  );
}

export default App;
