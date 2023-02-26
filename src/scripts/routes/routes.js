import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Explore from '../views/pages/explore';

const routes = {
  '/': Explore, // default page
  '/explore': Explore,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
