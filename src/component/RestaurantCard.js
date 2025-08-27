import React, { useState } from "react";
import { restaurants } from "./RestaurantData";
import ReserveTable from "./RestaurantTable";

const RestaurantCard = () => {
  const [popupData, setPopupData] = useState(null);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <>
      <div className="restaurants-wrapper">
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
              <button
                className="btn-primary"
                onClick={() => {
                  setSelectedRestaurant("The coastel Grill ");
                  setShowReservation(true);
                }}
              >
                Reserve Table
              </button>
              <button
                className="btn-secondary"
                onClick={() =>
                  setPopupData({
                    name: "The Costal Grrill",
                    cuisine: "Mediterrean  · Down City",
                    rating: "4.7",
                    reviews: 324,
                    contact: "XXX XX XX XXX",
                    hours: "Until 1:00 AM",
                    location: "Get Directions",
                    description:
                      "A seaside inspired dining experience blending fresh, seasonal ingredients with warm coastal ambiance.",
                    photos: [
                      "/images/image1.jpeg",
                      "/images/image.jpeg",
                      "/images/image3.jpg",
                      "/images/image5.webp",
                    ],
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Second Restaurant */}
        <div className="restaurant-detail">
          <div className="restaurant-hero">
            <div className="hero-image">
              <img src="/images/image.jpeg" alt="Sakura Sushi" />
            </div>
            <div className="hero-content">
              <h1>Sakura Sushi</h1>
              <div className="restaurant-info">
                <span className="cuisine">Japanese · City Center</span>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.5</span>
                  <span className="reviews">(210)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="restaurant-content">
            <div className="tags-section">
              <h3>Tags</h3>
              <div className="tags">
                <span className="tag">Sushi</span>
                <span className="tag">Premium</span>
                <span className="tag">Chif`s Special</span>
              </div>
            </div>

            <div className="availability-section">
              <h3>Available Times</h3>
              <div className="time-slots">
                <button className="time-slot">5:30 PM</button>
                <button className="time-slot">7:00 PM</button>
                <button className="time-slot">9:15 PM</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary"
               onClick={() => {
                  setSelectedRestaurant("Sakura Sushi ");
                  setShowReservation(true);
                }}
              >Reserve Table</button>
              <button
                className="btn-secondary"
                onClick={() =>
                  setPopupData({
                    name: "Sakura Sushi",
                    cuisine: "Japanese · City Center",
                    rating: "4.7",
                    reviews: 324,
                    contact: "XXX XX XX XXX",
                    hours: "Until 1:00 AM",
                    location: "Get Directions",
                    description:
                      "A seaside inspired dining experience blending fresh, seasonal ingredients with warm coastal ambiance.",
                    photos: [
                      "/images/image1.jpeg",
                      "/images/image.jpeg",
                      "/images/image3.jpg",
                      "/images/image5.webp",
                    ],
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>
        {/* Third Restaurant */}
        <div className="restaurant-detail">
          <div className="restaurant-hero">
            <div className="hero-image">
              <img src="/images/image3.jpg" alt="Nonna's Kitchen" />
            </div>
            <div className="hero-content">
              <h1>Nonna's Kitchen</h1>
              <div className="restaurant-info">
                <span className="cuisine">Italian · Oldtown</span>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.7</span>
                  <span className="reviews">(415)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="restaurant-content">
            <div className="tags-section">
              <h3>Tags</h3>
              <div className="tags">
                <span className="tag">Pasta</span>
                <span className="tag">Family Style</span>
                <span className="tag">Traditional</span>
              </div>
            </div>

            <div className="availability-section">
              <h3>Available Times</h3>
              <div className="time-slots">
                <button className="time-slot">12:30 PM</button>
                <button className="time-slot">6:30 PM</button>
                <button className="time-slot">8:30 PM</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary"
               onClick={() => {
                  setSelectedRestaurant("Nonna's Kitchen ");
                  setShowReservation(true);
                }}
              >Reserve Table</button>
              <button
                className="btn-secondary"
                onClick={() =>
                  setPopupData({
                    name: "Nonna's Kitchen",
                    cuisine: "Italian · Oldtown",
                    rating: "4.7",
                    reviews: 415,
                    contact: "XXX XX XX XXX",
                    hours: "Until 11:00 PM",
                    location: "Get Directions",
                    description:
                      "Family-style Italian meals with traditional recipes and fresh ingredients.",
                    photos: [
                      "/images/image5.webp",
                      "/images/image3.jpg",
                      "/images/image1.jpeg",
                    ],
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Fourth Restaurant */}
        <div className="restaurant-detail">
          <div className="restaurant-hero">
            <div className="hero-image">
              <img src="/images/image5.webp" alt="Spice Villa" />
            </div>
            <div className="hero-content">
              <h1>Green Garden</h1>
              <div className="restaurant-info">
                <span className="cuisine">Salad · Mircle Graden</span>
                <div className="rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.6</span>
                  <span className="reviews">(298)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="restaurant-content">
            <div className="tags-section">
              <h3>Tags</h3>
              <div className="tags">
                <span className="tag">Planet Based</span>
                <span className="tag">Organic</span>
                <span className="tag">Health</span>
              </div>
            </div>

            <div className="availability-section">
              <h3>Available Times</h3>
              <div className="time-slots">
                <button className="time-slot">1:00 PM</button>
                <button className="time-slot">7:00 PM</button>
                <button className="time-slot">9:00 PM</button>
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-primary"
               onClick={() => {
                  setSelectedRestaurant("Green Garden");
                  setShowReservation(true);
                }}
              >Reserve Table</button>
              <button
                className="btn-secondary"
                onClick={() =>
                  setPopupData({
                    name: "Spice Villa",
                    cuisine: "Indian · Uptown",
                    rating: "4.6",
                    reviews: 298,
                    contact: "XXX XX XX XXX",
                    hours: "Until 12:00 AM",
                    location: "Get Directions",
                    description:
                      "Rich flavors and aromatic spices served in a vibrant Indian dining atmosphere.",
                    photos: [
                      "/images/image.jpeg",
                      "/images/image5.webp",
                      "/images/image.jpeg",
                    ],
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popupData && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="btn-new">
              <button
                className="btn-primary"
                onClick={() => setPopupData(null)}
              >
                Close
              </button>
              <h2>{popupData.name}</h2>
            </div>

            <p>
              {popupData.cuisine} · {popupData.rating} ★ ({popupData.reviews})
            </p>
            <button className="btn-primary2">Make Reservation</button>

            <div className="restaurant-info-cards">
              <div className="contact">
                {" "}
                <i class="fa-solid fa-phone"></i> Contact
                <div>{popupData.contact}</div>
              </div>
              <div className="open-now">
                {" "}
                <i class="fa-solid fa-clock"></i> Open Now
                <div>{popupData.hours}</div>
              </div>

              <div className="location">
                {" "}
                <i class="fa-solid fa-location-dot"></i> Location
                <div>{popupData.location}</div>
              </div>
            </div>

            <div className="about-section">
              <h3>About</h3>
              <p>{popupData.description}</p>
              <h3>Photos</h3>
              <div className="popup-photos">
                {popupData.photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index}`} />
                ))}
              </div>
              <div className="reviews-container">
                <div className="reviews">
                  <h2>Reviews</h2>
                </div>
                <div className="reviews-conter">
                  <h3>Armen Sargsyan</h3>
                  <p>lorem Ipsum</p>
                  <div className="rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus fugiat doloremque mollitia ipsa aliquam neque
                    quam eius eaque, harum nesciunt quisquam quo obcaecati
                    reprehenderit, dolorum atque! Porro temporibus nostrum eum.
                  </p>
                </div>
                <div className="reviews-conter">
                  <h3>Armen Sargsyan</h3>
                  <p>lorem Ipsum</p>
                  <div className="rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus fugiat doloremque mollitia ipsa aliquam neque
                    quam eius eaque, harum nesciunt quisquam quo obcaecati
                    reprehenderit, dolorum atque! Porro temporibus nostrum eum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showReservation && (
        <ReserveTable
          restaurantName={selectedRestaurant}
          onClose={() => setShowReservation(false)}
        />
      )}
    </>
  );
};

export default RestaurantCard;
