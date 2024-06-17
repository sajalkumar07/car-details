// src/App.js
import React from 'react';
import { BrowserRoute
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
