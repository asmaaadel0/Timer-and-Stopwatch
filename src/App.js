import React from "react";

import TheHeader from "./component/layout/TheHeader";
import StopWatch from "./component/StopWatch";
import Timer from "./component/Timer";

function App() {
  return (
    <div>
      {" "}
      <TheHeader /> <StopWatch />
      <Timer />
    </div>
  );
}

export default App;
