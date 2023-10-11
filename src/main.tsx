import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FunctionalComponent } from "./App";
// import { Props, Props2 } from "./App";
// import { Bmi3 } from "./practice/arrow-function";
// import Profile2 from "./practice/object";
// import Bmi2 from "./practice/anonymousfunction";
// import Bmi from "./practice/function";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FunctionalComponent message="FunctionalComponent!!" />
    {/* <Props message="Hello React!" key="1" /> */}
    {/* <Profile2 /> */}
    {/* <Bmi3 /> */}
    {/* <Bmi2 /> */}
    {/* <Bmi /> */}
    {/* <Props2 message="Hello React!" key="1" /> */}
  </React.StrictMode>
);
