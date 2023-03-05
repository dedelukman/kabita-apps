/* eslint-disable comma-dangle */
import FavoriteRestoSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestoShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
      expect(favoriteRestos.getAllRestos).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(
            document.querySelectorAll('.restaurant-item__not__found').length
          ).toEqual(1);
          done();
        });

      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb);
      favoriteRestos.getAllRestos.and.returnValues([]);

      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document
        .getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant-item').length).toEqual(
            2
          );
          done();
        });
      const favoriteRestos = spyOnAllFunctions(FavoriteRestoIdb, false);
      favoriteRestos.getAllRestos.and.returnValues([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah film A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah film B',
        },
      ]);
      new FavoriteRestoShowPresenter({
        view,
        favoriteRestos,
      });
    });
  });
});
