import React from "react";

const ConfirmationPopup = ({ data, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <img src="/images/image6.webp" alt="" />
        <h2 className="h2-com">You're all set!</h2>
       <p className="para" >Your reservation at      <strong>{data.restaurant}</strong> is confirmed.</p>
        <p>
          Date: {data.date} | Time: {data.time} | Guests: {data.guests}
        </p>
        {data.occasion && <p>Occasion: {data.occasion}</p>}
        {data.seating && <p>Seating: {data.seating}</p>}
        {data.dietary && <p>Dietary Preference: {data.dietary}</p>}
        {data.requests && <p>Special Requests: {data.requests}</p>}

        <button className="btn-primary" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
