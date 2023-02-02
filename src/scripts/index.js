import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/components/restaurant-list';
import DataSource from '../DATA.json';

const restaurantListElement = document.querySelector('restaurant-list');

const getRestaurantList = () => {
  restaurantListElement.items = DataSource.restaurants;
};

getRestaurantList();
