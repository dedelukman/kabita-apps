import DicodingRestaurantDbSource from '../../data/dicodingRestaurantDbSource';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
    <section class="content">
  <div class="restaurant_list">
    <h1 class="restaurant_list__label">Detail Restaurant</h1>
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>
  </div>
</section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingRestaurantDbSource.detail(url.id);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        rating: resto.restaurant.rating,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
      },
    });
  },
};

export default Detail;
