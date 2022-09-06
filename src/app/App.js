import { Routes, Route } from "react-router-dom";
import HomeV1 from "../pages/homeV1";
import './App.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
    </Routes>
  );
}

export default App;
