/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<img class="restaurant__poster" src="${
  CONFIG.BASE_IMAGE_MEDIUM_URL + resto.pictureId
}" alt="${resto.name}" />
<div class="restaurant__info">
  <h3>Information</h3>
  <h4>Name</h4>
  <p>${resto.name}</p>
  <h4>Address</h4>
  <p>${resto.address}</p>
  <h4>City</h4>
  <p>${resto.city}</p>
  <h4>Foods</h4>
  <p>${resto.menus.foods.map((food) => food.name)}</p>
  <h4>Drinks</h4>
  <p>${resto.menus.drinks.map((drink) => drink.name)}</p>
</div>
<div class="restaurant__overview">
  <h3>Description</h3>
  <p>${resto.description}</p>
</div>
<div class="restaurant__overview">
  <h3>Customer Reviews</h3>
  <p>${resto.customerReviews.map(
    (review) =>
      `<p><b>${review.name}</b></p><p style="margin-top: -10px;"><small>${review.date}</small></p><p>${review.review}</p>`
  )}</p>
</div>
`;

const createRestoItemTemplate = (resto) => `
<article class="restaurant restaurant-item">
<div class="restaurant-item__image">
  <img
    class="restaurant-item__thumbnail"
    src="${
      resto.pictureId
        ? CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${resto.name || '-'}"
  />
  <div class="restaurant-item__city">Kota. ${resto.city || '-'}</div>
</div>

<div class="restaurant-item__content">
  <p class="restaurant-item__rating">⭐️ Rating: ${resto.rating || '-'}</p>
  <h1 class="restaurant-item__title">
  <a href="/#/detail/${resto.id}">${resto.name || '-'}</a>
  </h1>
  <p class="restaurant-item__description">
  ${resto.description || '-'}.
  </p>
</div>
</article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
