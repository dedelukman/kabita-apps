import DicodingRestaurantDbSource from '../../data/dicodingRestaurantDbSource';

const Explore = {
  async render() {
    return `
          <h2>Explore Page</h2>
        `;
  },

  async afterRender() {
    console.log('test');
    const resto = await DicodingRestaurantDbSource.explore();
    console.log(resto);
  },
};

export default Explore;
