import React from "react";
import { MdAccountCircle } from "react-icons/md"; 

const RestaurantHeader = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="profile-icon">
          <MdAccountCircle size={36} />
        </div>

        <h1>Discover Restaurants</h1>
        <p>Find your perfect dining experience</p>

        <div className="search-filters">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Instrument, Guitars..." />
          </div>

          <div className="filter">
            <span>Cuisine</span>
          </div>
          <div className="filter">
            <span>
              <i className="fa-solid fa-location-dot"></i> Locations
            </span>
          </div>
          <div className="filters">
            <span className="booking">View Booking</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RestaurantHeader;
