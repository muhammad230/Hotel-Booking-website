import { useState } from "react"; 
import "./App.css";
import RestaurantHeader from "./component/RestaurantHeader";
import RestaurantCard from "./component/RestaurantCard";
import ConfirmationPopup from "./component/ConfirmationPopup";


function App() {
  const [reservationSuccess, setReservationSuccess] = useState(null);

  return (
    <div>
      <RestaurantHeader />
      <RestaurantCard onSuccess={(data) => setReservationSuccess(data)} />

      {reservationSuccess && (
        <ConfirmationPopup
          data={reservationSuccess}
          onClose={() => setReservationSuccess(null)}
        />
      )}
      {/* <Reservations/> */}
    </div>
  );
}

export default App;
