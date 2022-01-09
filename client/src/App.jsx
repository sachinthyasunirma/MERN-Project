import React from "react";
// import {Route} from "react-router-dom";
//layout
import HomeLayoutHOC from "./HOC/Home.HOC";

//pages
import HomePage from "./Pages/HomePage";
function App() {
  return (
  <>
      <HomeLayoutHOC component={ HomePage } path="/" />
      <HomeLayoutHOC component={ HomePage } path="/:type" />
  </>
  );
}

export default App;
