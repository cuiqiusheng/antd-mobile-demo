import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, hashHistory as historyProvider } from 'react-router';
import routes from './routes';
// import registerServiceWorker from './registerServiceWorker';

import configureStore from './store';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

export const store = configureStore(historyProvider, {});
// const routes = createRoutes(store);
export const history = syncHistoryWithStore(historyProvider, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
,document.getElementById('root'));
// registerServiceWorker();
