import FavoriteRestoIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div class="restaurant_list">
      <h1 class="restaurant_list__label">Favorite Restaurant</h1>
      <div id="restaurants" class="restaurants"></div>
    </div>
  </section>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restaurants');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Favorite;
