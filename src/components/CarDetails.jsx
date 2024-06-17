import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css'

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await fetch(`https://freetestapi.com/api/v1/cars/${id}`);

        if (!response.ok) {
          throw new Error(`Error fetching car details: ${response.statusText}`);
        }

        const carData = await response.json();
        setCar(carData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='car-details'>
      <h1>Car Details</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : car ? (
        <div>
          <h2>{car.make} {car.model}</h2> {/* Display model in parentheses */}
          <p>Price - {car.price}$ </p>
          <p>Fule Type - {car.fuelType}</p>
          <p>Transmission - {car.transmission}</p>
          <p>Engine - {car.engine}</p>
          <button onClick={handleBack}>Back to Listing</button>
        </div>
      ) : (
        <p>Loading car details...</p>
      )}
    </div>
  );
};

export default CarDetails;
