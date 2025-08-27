import React from "react";

const ReserveTable = ({ restaurantName, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Reserve Table at {restaurantName}</h2>
        <button className="btn-primary" onClick={onClose}>Close</button>

        <form
  onSubmit={(e) => {
    e.preventDefault();
    alert(`Reservation confirmed at ${restaurantName}!`);
    onClose();
  }}
  className="reservation-form"
>
  <h3>Presonal Information</h3>
  <div className="form-section">
    <input type="text" placeholder="Full Name*" required />
    <input type="email" placeholder="Email*" required />
    <input type="tel" placeholder="Phone Number*" required />
  </div>

  {/* Reservation Details */}
  <h3>Reaervation Details</h3>
  <div className="form-section">
    <input type="date" required />
    <input type="time" required />
    <select required>
      <option value="">Party Size*</option>
      <option value="1">1 Person</option>
      <option value="2">2 People</option>
      <option value="3">3 People</option>
      <option value="4">4 People</option>
      <option value="5+">5+ People</option>
    </select>
    <select>
      <option value="">Special Occasion</option>
      <option value="birthday">Birthday</option>
      <option value="anniversary">Anniversary</option>
      <option value="business">Business Meeting</option>
    </select>
  </div>

  {/* Additional Information */}
  <h3>Additional Information </h3>
  <div className="form-section">
    <select>
      <option value="">Any Seating Preference?</option>
      <option value="indoor">Indoor</option>
      <option value="outdoor">Outdoor</option>
      <option value="window">Window Seat</option>
    </select>

    <select>
      <option value="">Any Dietary Preference?</option>
      <option value="veg">Vegetarian</option>
      <option value="nonveg">Non-Vegetarian</option>
      <option value="vegan">Vegan</option>
      <option value="halal">Halal</option>
    </select>

    <input type="text" placeholder="Any Special Requests?" />
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
