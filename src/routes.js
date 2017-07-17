import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';

import SinglePage from './containers/SinglePage';
import Guide from './containers/Guide';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Guide} />
    <Route path="home" component={SinglePage} />
  </Route>
);
