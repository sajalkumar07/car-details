import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css' // Import CSS module

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(6);
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

  // Calculate the total number of pages
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Get the starting index for the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Pagination button click handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null; // No pagination needed for 1 page or less

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <ul className={styles.pagination}>
        {currentPage > 1 && (
          <li key="prev" onClick={() => handlePageChange(currentPage - 1)}>
            <Link to="#">Previous</Link>
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`${styles.page} ${pageNumber === currentPage ? styles.active : ''}`}>
            <Link to="#" onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </Link>
          </li>
        ))}
        {currentPage < totalPages && (
          <li key="next" onClick={() => handlePageChange(currentPage + 1)}>
            <Link to="#">Next</Link>
          </li>
        )}
      </ul>
    );
  };

  return (
    <div className={styles.carList}>
      <h1>Car Listing</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul className={styles.carListItems}>
            {currentCars.map((car) => (
              <li key={car.id} className={styles.carItem}>
                <Link to={`/car/${car.id}`}>
                  {car.make} {car.model} - {car.price}
                </Link>
              </li>
            ))}
          </ul>
          {renderPagination()}
        </>
      )}
    </div>
  );
};

export default CarList;
