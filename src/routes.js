import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';

import Guide from './containers/Guide';                 // 向导页(前期用来跳转展示页面，后期删除)
import SinglePage from './containers/SinglePage';       // 首页
import Ask from './containers/Ask';                     // 提问
import ChooseMaster from './containers/ChooseMaster';   // 选择答主
import ReleaseTopic from './containers/ReleaseTopic';   // 发布新话题
import HotTopic from './containers/HotTopic';           // 热门话题
import TopicDetails from './containers/TopicDetails';   // 话题详情
import MasterList from './containers/MasterList';       // 答主列表
import RewardQuestion from './containers/RewardQuestion';  // 悬赏问题
import MasterIndex from './containers/MasterIndex';     // 答主主页
import PersonIndex from './containers/PersonIndex';     // 个人主页
import PersonalInfo from './containers/PersonalInfo'    // 个人信息
import ActivityApply from './containers/ActivityApply'  // 活动报名
import LessonDetail from './containers/LessonDetail'    // 课程详情
import MyWallet from './containers/MyWallet'            // 我的钱包
import TakeMoney from './containers/TakeMoney'          // 提现未绑定
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Guide} />
    <Route path="home" component={SinglePage} />
    <Route path="ask" component={Ask} />
    <Route path="choosemaster" component={ChooseMaster} />
    <Route path="releaseTopic" component={ReleaseTopic} />
    <Route path="hotTopic" component={HotTopic} />
    <Route path="topicDetails" component={TopicDetails} />
    <Route path="masterList" component={MasterList} />
    <Route path="rewardQuestion" component={RewardQuestion} />
    <Route path="masterIndex" component={MasterIndex} />
    <Route path="PersonalInfo" component={PersonalInfo} />
    <Route path="personIndex" component={PersonIndex} />
    <Route path="activityApply" component={ActivityApply} />
    <Route path="lessonDetail" component={LessonDetail} />
    <Route path="MyWallet" component={MyWallet} />
    <Route path="TakeMoney" component={TakeMoney} />
  </Route>
);
