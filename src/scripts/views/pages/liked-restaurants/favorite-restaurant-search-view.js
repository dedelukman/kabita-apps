/* eslint-disable operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `        
        <div class="content">
          <input id="query" type="text">
          <h2 class="content__heading">Your Liked Restaurant</h2>
          <div id="restaurant-search-container">
            <div id="restaurants" class="restaurants">
            </div>
          </div>
        </div>
      `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestos(restos) {
    let html;
    if (restos.length > 0) {
      html = restos.reduce(
        (carry, resto) => carry.concat(createRestoItemTemplate(resto)),
        ''
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }

    document.querySelector('.restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  showFavoriteRestos(restos = []) {
    let html;
    if (restos.length) {
      html = restos.reduce(
        (carry, resto) => carry.concat(createRestoItemTemplate(resto)),
        ''
      );
    } else {
      html = this._getEmptyRestoTemplate();
    }
    document.getElementById('restaurants').innerHTML = html;
    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestoTemplate() {
    return '<div class="restaurant-item__not__found">Tidak ada Restaurant untuk di tampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
