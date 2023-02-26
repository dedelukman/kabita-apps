import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantDbSource {
  static async explore() {
    const response = await fetch(API_ENDPOINT.EXPLORE);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default DicodingRestaurantDbSource;
