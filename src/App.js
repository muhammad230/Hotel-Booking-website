import { useState } from "react";   // <-- import useState
import './App.css';
import RestaurantHeader from './component/RestaurantHeader';
import RestaurantCard from './component/RestaurantCard';
import ConfirmationPopup from './component/ConfirmationPopup'; // <-- we’ll make this later

function App() {
  // 🔹 New state to store confirmed reservation
  const [reservationSuccess, setReservationSuccess] = useState(null);

  return (
    <div>
      <RestaurantHeader />
      <RestaurantCard 
        onSuccess={(data) => setReservationSuccess(data)} 
      />

      
      {reservationSuccess && (
        <ConfirmationPopup 
          data={reservationSuccess} 
          onClose={() => setReservationSuccess(null)} 
        />
      )}
    </div>
  );
}

export default App;
