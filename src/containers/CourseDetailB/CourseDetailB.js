/**
 * @summary 课程详情B
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Button } from 'antd-mobile';
import share from './share.png';
import banner from './banner.jpg';
import TitleB from '../../components/TitleB';

class CourseDetailB extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          mode="light"
          rightContent={
            <div onClick={() => console.log('分享')}>
              <img src={share} alt="分享"/>
            </div>
          }
        />

        <div className={style.bannerBox}>
          <img src={banner} alt="banner"/>
          <p>中国职联 私银三人行系列活动-财联邦</p>
        </div>

        <TitleB>课程介绍</TitleB>

        <div className={style.dsc}>
          <p>1.给你一张资产配置的口诀表</p>
          <p>2.同样的产品，不同的销售视角</p>
          <p>3.客户是上帝，上帝的需求你需要揣摩</p>
        </div>

        <div className={style.btnBox}>
          <Button className={style.btn} type="primary">立即观看(10元)</Button>
        </div>

      </div>
    );
  }
}

export default CourseDetailB;
