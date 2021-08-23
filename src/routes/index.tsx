import { Route, Switch } from 'react-router-dom';
import Favorites from '../pages/Favoritos';
import WatchLater from '../pages/WatchLater';

import Home from '../pages/Home';
import { MovieInfo } from '../pages/MovieInfo';
import Categories from '../pages/Categories';
import NotFound from '../pages/NotFound';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/filme/:id" component={MovieInfo} exact />
      <Route path="/categorias" component={Categories} exact />
      <Route path="/favoritos" component={Favorites} exact />
      <Route path="/assistirdepois" component={WatchLater} exact />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
