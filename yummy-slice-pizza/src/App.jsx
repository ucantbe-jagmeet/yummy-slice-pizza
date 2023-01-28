import { useState } from "react";
import React from "react";
import "./index.css";
import Nav from "../src/components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Menu />
    </>
  );
}

export default App;
