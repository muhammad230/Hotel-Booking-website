import React from "react";

const ConfirmationPopup = ({ data, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img className="img" src="/images/image6.webp" alt="" />
        <h2 className="h2-com">You're all set!</h2>
        <p className="para">
          Your reservation at <strong>{data.restaurant}</strong> is confirmed.
        </p>

        {/* Reservation Details Grid */}
        <div className="details-grid">
          <div className="detail-card">
            <span className="icon">📅</span>
            <div>
              <p className="label">Date</p>
              <p className="value">{data.date}</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="icon">⏰</span>
            <div>
              <p className="label">Time</p>
              <p className="value">{data.time}</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="icon">👥</span>
            <div>
              <p className="label">Party Size</p>
              <p className="value">{data.guests} Guests</p>
            </div>
          </div>

          <div className="detail-card">
            <span className="icon">✉️</span>
            <div>
              <p className="label">Confirmation sent to</p>
              <p className="value">{data.email}</p>
            </div>
          </div>
        </div>

      

        <button className="btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
