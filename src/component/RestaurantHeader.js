import React from "react";

const RestaurantHeader = () => {
  return (
    <div>
      <div className="container">
        <header>
          <h1>Discover Restaurants</h1>
          <p>Find your perfect dining experience</p>

          <div className="search-filters">
            <div class="search-box">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search Instrument, Guitars..." />
            </div>

            <div className="filter">
              <span>Cuisine</span>
            </div>
            <div className="filter">
              <span> <i class="fa-solid fa-location-dot"></i>Locations</span>
            </div>
            <div className="filters">
              <span className="booking">View Booking</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default RestaurantHeader;
