class RestaurantItem extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = ` 
      <article class="restaurant-item">
      <div class="restaurant-item__image">
        <img
          class="restaurant-item__thumbnail"
          src="${this._item.pictureId}"
          alt="${this._item.name}"
        />
        <div class="restaurant-item__city">Kota. ${this._item.city}</div>
      </div>

      <div class="restaurant-item__content">
        <p class="restaurant-item__rating">Rating: ${this._item.rating}</p>
        <h1 class="restaurant-item__title">
          <a href="#">${this._item.name}</a>
        </h1>
        <p class="restaurant-item__description">
        ${this._item.description}.
        </p>
      </div>
    </article>
          `;
  }

  renderError(message) {
    this.innerHTML = `
        <a >
         ${message}
        </a>   
        `;
  }
}
customElements.define('restaurant-item', RestaurantItem);
