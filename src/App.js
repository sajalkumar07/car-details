// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
