import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantDetailsModal from "../components/RestaurantDetailsModal";

const restaurants = [
  { id: 1, name: "The Coastal Grill", desc: "Seafood specialties", details: "Fresh fish, crab, lobster and more!", image: "/images/image1.jpeg" },
  { id: 2, name: "Urban Spice", desc: "Indian cuisine", details: "Spicy curries, biryani, naan, and tandoori delights.", image: "/images/image2.jpeg" },
];

const Home = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleViewDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div>
      <div className="restaurants-wrapper">
        {restaurants.map((r) => (
          <RestaurantCard key={r.id} restaurant={r} onViewDetails={handleViewDetails} />
        ))}
      </div>

      {selectedRestaurant && (
        <RestaurantDetailsModal restaurant={selectedRestaurant} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
