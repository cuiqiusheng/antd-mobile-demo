/**
 * @summary 近期课程
 * @date    07-30
 * @author  cuiqs@knownsec.com
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import local from './local.jpg';
import time from './time.jpg';

class RecentCourse extends Component {
  constructor(props) {
    super(props);
    this.state ={
      applied: false,
    };
    this.onApply = this.onApply.bind(this);
  }

  onApply() {
    this.setState({ applied: !this.state.applied });
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          mode="light"
          leftContent="返回"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<div onClick={() => console.log('onRightClick')}><Icon type="search" /></div>}
        >近期课程</NavBar>

        <WhiteSpace size="sm" />

        <div className={style.banner1}><img src={banner1} alt="banner1"/></div>

        <div className={style.content}>
          <p className={style.courseName}>中理职联 私银三人行系列活动-财联邦</p>
          <div className={style.dsc}>
            <p>1个人的独立工作室</p>
            <p>5个人的家族办公室</p>
            <p>30个人的财富团队</p>
          </div>
          <p className={style.guest}>嘉宾：张震岳、热狗、潘玮柏、吴亦凡</p>
          <p className={style.local}>
            <span><img src={local} alt="local"/></span>深圳罗湖
            <span><img src={time} alt="time"/></span>2017/06/18
          </p>
          <p className={style.apply}>
            <button onClick={this.onApply}>立即报名</button>
            <p><span>123</span>人已报名</p>
          </p>
        </div>

        <WhiteSpace size="sm" />

        <div className={style.banner2}><img src={banner2} alt="banner"/></div>

        <div className={style.content}>
          <p className={style.courseName}>中理职联 私银三人行系列活动-财联邦</p>
          <div className={style.dsc}>
            <p>让主讲敞开讲</p>
            <p>5个人的家族办公室</p>
            <p>30个人的财富团队</p>
          </div>
          <p className={style.guest}>嘉宾：刘德华、周星驰、周润发</p>
          <p className={style.local}>
            <span><img src={local} alt="local"/></span>深圳罗湖
            <span><img src={time} alt="time"/></span>2017/06/18
          </p>
          <p className={style.apply}>
            <button className={style.applyOver} onClick={this.onApply}>活动结束</button>
            <p><span>123</span>人已报名</p>
          </p>
        </div>

      </div>
    );
  }
}

export default RecentCourse;
