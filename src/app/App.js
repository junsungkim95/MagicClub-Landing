import { Routes, Route } from 'react-router-dom';
import HomeV1 from '../pages/homeV1';
import './App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Minting from '../pages/Minting';

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Routes>
      <Route path="/" element={<HomeV1 />} exact />
      <Route path="/minting" element={<Minting />} exact />
    </Routes>
  );
}

export default App;
