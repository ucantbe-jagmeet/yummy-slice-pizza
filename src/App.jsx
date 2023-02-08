import { React } from "react";
import "./index.css";
import Nav from "../src/components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
