import DicodingRestaurantDbSource from '../../data/dicodingRestaurantDbSource';
import { createRestoItemTemplate } from '../templates/template-creator';

const Explore = {
  async render() {
    return `
    <div class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Info Tempat Makan yang Instagramable</h1>
      <p class="hero__tagline">
        Dapatkan info terlengkap restoran - restoran terbaik di Indonesia.
      </p>
    </div>
  </div>
          <section class="content">
        <div class="restaurant_list">
          <h1 class="restaurant_list__label">Explore Restaurant</h1>
          <div id="restaurants" class="restaurants"></div>
        </div>
      </section>
        `;
  },

  async afterRender() {
    const restos = await DicodingRestaurantDbSource.explore();
    const restosContainer = document.querySelector('#restaurants');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Explore;
