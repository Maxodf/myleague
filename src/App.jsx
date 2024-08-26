// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Footus from './pages/Footus';
import Navbar from './components/Nav';
import '../src/styles/bases/headings.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/football-americain" element={<Footus />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
