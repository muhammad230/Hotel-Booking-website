import logo from './logo.svg';
import './App.css';
import RestaurantHeader from './component/RestaurantHeader';
import RestaurantCard from './component/RestaurantCard';

function App() {
  return (
     <div>
      <RestaurantHeader />
      <RestaurantCard/>
    </div>
  );
}

export default App;
