import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Service from "./service";
import Contact from "./contact";
import Navbar from "./Navbar";
import { Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Router basename={process.env.REACT_APP_URI}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </>
  )

}

export default App;
