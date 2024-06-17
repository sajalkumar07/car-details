import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/cars');

        if (!response.ok) {
          throw new Error(`Error fetching car list: ${response.statusText}`);
        }

        const carData = await response.json();
        setCars(carData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCars();
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd' }} className='car-list'>
      <h1>Car Listing</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {cars.map(car => (
            <li key={car.id}>
              <Link to={`/car/${car.id}`}>
                {car.make} {car.model} - {car.price}$
              </Link>
            </li>
          ))}
        </>
      )}
    </div>
  );
};

export default CarList;
