import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';
import App from './App';


import Login from './containers/Login';//登陆
import Convert from './containers/Convert'//兑换
import InOutHistory from './containers/InOutHistory'//收支记录


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
import PersonalInfo from './containers/PersonalInfo';   // 个人信息
import ActivityApply from './containers/ActivityApply'; // 活动报名
import CourseDetail from './containers/CourseDetail';   // 课程详情A
import MyWallet from './containers/MyWallet';           // 我的钱包
import TakeMoney from './containers/TakeMoney';         // 提现未绑定
import RecentCourse from './containers/RecentCourse';   // 近期课程
import CourseDetailB from './containers/CourseDetailB'; // 课程详情B
import CourseDetailC from './containers/CourseDetailC'; // 课程详情C
import ApplyNow from './containers/ApplyNow';           // 立即报名
import AllComment from './containers/AllComment';       // 所有评论
import PasswordModify from './containers/PasswordModify';  // 修改密码  
import ColumnList from './containers/ColumnList';       // 专栏列表
import ArticalPay from './containers/ArticalPay';       // 专栏文章-付费

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Guide} />

    <Route path="login" component={Login}/>
    <Route path="convert" component={Convert}/>
    <Route path="inout" component={InOutHistory}/>

    <Route path="home" component={SinglePage} />
    <Route path="ask" component={Ask} />
    <Route path="choosemaster" component={ChooseMaster} />
    <Route path="releaseTopic" component={ReleaseTopic} />
    <Route path="hotTopic" component={HotTopic} />
    <Route path="topicDetails" component={TopicDetails} />
    <Route path="masterList" component={MasterList} />
    <Route path="rewardQuestion" component={RewardQuestion} />
    <Route path="masterIndex" component={MasterIndex} />
    <Route path="personalInfo" component={PersonalInfo} />
    <Route path="personIndex" component={PersonIndex} />
    <Route path="activityApply" component={ActivityApply} />
    <Route path="courseDetail" component={CourseDetail} />
    <Route path="myWallet" component={MyWallet} />
    <Route path="TakeMoney" component={TakeMoney} />
    <Route path="recentCourse" component={RecentCourse} />
    <Route path="courseDetailB" component={CourseDetailB} />
    <Route path="courseDetailC" component={CourseDetailC} />
    <Route path="applyNow" component={ApplyNow} />
    <Route path="allComment" component={AllComment} />
    <Route path="passwordModify" component={PasswordModify} />
    <Route path="columnList" component={ColumnList} />
    <Route path="articalPay" component={ArticalPay} />
  </Route>
);
