/**
 * @summary 课程详情C
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon, WhiteSpace } from 'antd-mobile';
import banner from './banner.jpg';
import banner2 from './banner2.jpg';
import Title from '../../components/Title';
import local from './local.jpg';
import time from './time.jpg';

class CourseDetailC extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          mode="light"
          leftContent="返回"
          onLeftClick={() => console.log('返回')}
          rightContent={<div onClick={() => {console.log('查找')}}><Icon type="search" /></div>}
        >课程</NavBar>

        <div className={style.bannerBox}><img src={banner} alt="banner"/></div>

        <Title>近期课程</Title>

        <div className={style.bannerBox}><img src={banner2} alt="banner"/></div>

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
          <div className={style.apply}>
            <button onClick={this.onApply}>立即报名</button>
            <p><span>123</span>人已报名</p>
          </div>
        </div>

        <WhiteSpace size="sm" />

        <Title>精品课程</Title>
        <div className={style.bannerBox}><img src={banner} alt="banner"/></div>
        <WhiteSpace size="sm" />
        <div className={style.bannerBox}><img src={banner2} alt="banner2"/></div>

      </div>
    );
  }
}

export default CourseDetailC;
