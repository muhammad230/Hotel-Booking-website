import React from "react";

const RestaurantCard = () => {
  return (
   <div className="restaurant-detail">
      
      <div className="restaurant-hero">
        <div className="hero-image">
          <img 
            src="/images/image1.jpeg" 
            alt="The Coastal Grill Restaurant" 
          />
        </div>
        <div className="hero-content">
          <h1>The Coastal Grill</h1>
          <div className="restaurant-info">
            <span className="cuisine">Mediterranean · Downtown</span>
            <div className="rating">
              <span className="stars">★★★★★</span>
              <span className="rating-value">4.7</span>
              <span className="reviews">(324)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant-content">
        <div className="tags-section">
          <h3>Tags</h3>
          <div className="tags">
            <span className="tag">Seafood</span>
            <span className="tag">Outdoor Seating</span>
            <span className="tag">Fine Dining</span>
          </div>
        </div>

        <div className="availability-section">
          <h3>Available Times</h3>
          <div className="time-slots">
            <button className="time-slot">6:00 PM</button>
            <button className="time-slot">7:30 PM</button>
            <button className="time-slot">9:00 PM</button>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn-primary">Reserve Table</button>
          <button className="btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
