import React, { Component } from 'react';
import style from './style.css';
import { Link } from 'react-router';

class Guide extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div>点击链接跳转到对应页面</div>
        <hr />
        <Link to="login">登录</Link><br />
        <Link to="convert">兑换</Link><br />
        <Link to="home">1、首页</Link><br />
        <Link to="ask">2、提问</Link><br />
        <Link to="chooseMaster">3、选择答主</Link><br />
        <Link to="releaseTopic">4、发布新话题</Link><br />
        <Link to="hotTopic">5、热门话题</Link><br />
        <Link to="topicDetails">6、话题详情</Link><br />
        <Link to="masterList">7、答主列表</Link><br />
        <Link to="masterIndex">8、答主主页</Link><br />
        <Link to="rewardQuestion">9、悬赏问题</Link><br />
        <Link to="personIndex">10、个人主页</Link><br />
        <Link to="PersonalInfo">11、个人信息</Link><br />
        <Link to="MyWallet">12、我的钱包</Link><br />
        <Link to="TakeMoney">13、未绑定提现</Link><br />
        <Link to="activityApply">14、活动报名</Link><br />
        <Link to="courseDetail">15、课程详情</Link><br />
        <Link to="recentCourse">16、近期课程</Link><br />
        <Link to="courseDetailB">17、课程详情B</Link><br />
        <Link to="courseDetailC">18、课程详情C</Link><br />
      </div>
    );
  }
}
// console.log(document.documentElement.clientWidth);
export default Guide;
