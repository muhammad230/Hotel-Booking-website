import React, { useState } from "react";

const ReserveTable = ({ restaurantName, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    seating: "",
    dietary: "",
    requests: "",
  });

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      restaurant: restaurantName,
      ...formData,
    };

    // send data to App.js
    onSuccess(reservationData);

    // close popup
    onClose();
  };

  // helper to update form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Reserve Table at {restaurantName}</h2>
        <button className="btn-primary" onClick={onClose}>
          Close
        </button>

        <form onSubmit={handleSubmit} className="reservation-form">
          <h3>Personal Information</h3>
          <div className="form-section">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name*"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Reservation Details */}
          <h3>Reservation Details</h3>
          <div className="form-section">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">Party Size*</option>
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5+">5+ People</option>
            </select>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option value="">Special Occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="business">Business Meeting</option>
            </select>
          </div>

          {/* Additional Information */}
          <h3>Additional Information</h3>
          <div className="form-section">
            <select
              name="seating"
              value={formData.seating}
              onChange={handleChange}
            >
              <option value="">Any Seating Preference?</option>
              <option value="indoor">Indoor</option>
              <option value="outdoor">Outdoor</option>
              <option value="window">Window Seat</option>
            </select>

            <select
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
            >
              <option value="">Any Dietary Preference?</option>
              <option value="veg">Vegetarian</option>
              <option value="nonveg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="halal">Halal</option>
            </select>

            <input
              type="text"
              name="requests"
              placeholder="Any Special Requests?"
              value={formData.requests}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="reserve-btn">
            Confirm Reservation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveTable;
