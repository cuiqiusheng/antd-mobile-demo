/**
 * @summary 活动报名
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Button } from 'antd-mobile';
import share from './share.png';
import banner from './banner.jpg';
import local from './local.jpg';
import time from './time.jpg';
import TitleB from '../../components/TitleB';
import FocusButtonB from '../../components/FocusButtonB';

class LessonDetail extends Component {
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
        >课程详情</NavBar>

        <div className={style.banner}>
          <img src={banner} alt="banner"/>
          <p>中国职联 私银三人行系列活动-财联邦</p>
        </div>

        <div className={style.info}>
          <div className={style.infoLeft}>
            <div>
              <span className={style.local}><img src={local} alt="local"/>深圳罗湖</span>
              <span><img src={time} alt="local"/>2017-06-07</span>
            </div>
            <div className={style.infoBottom}>
              活动名额 40人
              <span>|</span>
              剩余名额 5人
              <span>|</span>
              距报名结束 15天
            </div>
          </div>
          <div className={style.btnBox}><FocusButtonB /></div>
        </div>

        <TitleB>课程介绍</TitleB>

        <div className={style.contentBox}>
          <div className={style.liveAddr}>
            <div>直播平台：</div>
            <a href="http://www.baidu.com" className={style.addr}>http://m.alchat.com/topic/1718972123243419.html</a>
          </div>
          <div className={style.liveAddr}>
            <div>嘉宾名单：</div>
            <div>周星驰、刘德华、周润发</div>
          </div>
          <div className={style.liveDsc}>
            <p>1个人的独立工作室</p>
            <p>5个人的家族办公室</p>
            <p>30个人的财富团队</p>
          </div>
          <div className={style.price}>
            <p>线下报名：<span>￥99</span></p>
            <p>线上直播：<span>￥10</span></p>
          </div>
        </div>

        <div className={style.bottom}>
          <Button type="primary" className={style.applyBtn}>立即报名</Button>
        </div>

      </div>
    );
  }
}

export default LessonDetail;
