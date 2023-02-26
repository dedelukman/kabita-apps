import DicodingRestaurantDbSource from '../../data/dicodingRestaurantDbSource';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h2>Detail Page</h2>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DicodingRestaurantDbSource.detail(url.id);
    console.log(resto);
  },
};

export default Detail;
