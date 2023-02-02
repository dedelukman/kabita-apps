import './restaurant-item';

class RestaurantList extends HTMLElement {
  set items(items) {
    this._items = items;
    this.render();
  }

  render() {
    this._items.forEach((item) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.item = item;
      this.appendChild(restaurantItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
        <a >
         ${message}
        </a>   
        `;
  }
}

customElements.define('restaurant-list', RestaurantList);
