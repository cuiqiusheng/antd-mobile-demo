import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';

import Guide from './containers/Guide'; // 向导页(前期用来跳转展示页面，后期删除)
import SinglePage from './containers/SinglePage';       // 首页
import Ask from './containers/Ask';                     // 提问
import ChooseMaster from './containers/ChooseMaster';   // 选择答主

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Guide} />
    <Route path="home" component={SinglePage} />
    <Route path="ask" component={Ask} />
    <Route path="choosemaster" component={ChooseMaster} />
  </Route>
);
