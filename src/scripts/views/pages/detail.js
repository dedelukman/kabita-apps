import DicodingRestaurantDbSource from '../../data/dicodingRestaurantDbSource';
import UrlParser from '../../routes/url-parser';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <section class="content">
  <div class="restaurant_list">
    <h1 class="restaurant_list__label">Detail Restaurant</h1>
    <div id="restaurant" class="restaurant"></div>
  </div>
</section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingRestaurantDbSource.detail(url.id);
    console.log(resto);
    const restoContainer = document.querySelector('#restaurant');
    restoContainer.innerHTML = createRestoDetailTemplate(resto.restaurant);
  },
};

export default Detail;
