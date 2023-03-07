import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestoShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestoSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteRestos: FavoriteRestoIdb });
    new FavoriteRestoSearchPresenter({
      view,
      favoriteRestos: FavoriteRestoIdb,
    });
  },
};

export default Favorite;
