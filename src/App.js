import React from "react";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";
import Error from "./Pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
