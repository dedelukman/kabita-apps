import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import './components/restaurant-list';
import DataSource from '../DATA.json';

const restaurantListElement = document.querySelector('restaurant-list');
const menu = document.querySelector('#hamburgerButton');
const drawer = document.querySelector('#navigationDrawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

const getRestaurantList = () => {
  restaurantListElement.items = DataSource.restaurants;
};

getRestaurantList();
