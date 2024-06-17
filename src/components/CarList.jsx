// src/components/CarList.jsx
import React from 'react';
import { Lin
      <h1>Car Listing</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <Link to={`/car/${car.id}`}>{car.name} - {car.price}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
