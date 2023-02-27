/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
<article class="restaurant-item">
<div class="restaurant-item__image">
  <img
    class="restaurant-item__thumbnail"
    src="${
      resto.pictureId
        ? CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${resto.name}"
  />
  <div class="restaurant-item__city">Kota. ${resto.city}</div>
</div>

<div class="restaurant-item__content">
  <p class="restaurant-item__rating">⭐️Rating: ${resto.rating}</p>
  <h1 class="restaurant-item__title">
  <a href="/#/detail/${resto.id}">${resto.name}</a>
  </h1>
  <p class="restaurant-item__description">
  ${resto.description}.
  </p>
</div>
</article>
`;

const createRestoItemTemplate = (resto) => `
<article class="restaurant-item">
<div class="restaurant-item__image">
  <img
    class="restaurant-item__thumbnail"
    src="${
      resto.pictureId
        ? CONFIG.BASE_IMAGE_SMALL_URL + resto.pictureId
        : 'https://picsum.photos/id/666/800/450?grayscale'
    }" alt="${resto.name}"
  />
  <div class="restaurant-item__city">Kota. ${resto.city}</div>
</div>

<div class="restaurant-item__content">
  <p class="restaurant-item__rating">⭐️Rating: ${resto.rating}</p>
  <h1 class="restaurant-item__title">
  <a href="/#/detail/${resto.id}">${resto.name}</a>
  </h1>
  <p class="restaurant-item__description">
  ${resto.description}.
  </p>
</div>
</article>
`;

export { createRestoItemTemplate, createRestoDetailTemplate };
