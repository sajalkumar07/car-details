// src/components/CarDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars } from '../data';  // Adjusted path

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find(car => car.id === parseInt(id));

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Car Details</h1>
      {car ? (
        <div>
          <h2>{car.name}</h2>
          <p>{car.price}</p>
          <p>{car.description}</p>
          <button onClick={handleBack}>Back to Listing</button>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetails;