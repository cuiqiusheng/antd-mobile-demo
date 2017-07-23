/**
 * @summary 热门话题页面
 */
import React, { Component } from 'react';
import style from './style.css';
import {
  NavBar,
  // WhiteSpace,
  Tabs
} from 'antd-mobile';
import Medal from '../../components/Medal';
import HotTopicItem from '../../components/HotTopicItem';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}

class HotTopic extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.navbar}>
          <NavBar
            leftContent="返回"
            rightContent={(
              <a onClick={() => console.log('发布')}>发布新话题</a>
            )}
            mode="light"
            onLeftClick={() => console.log('取消')}
            className={style.navbar}
          >热门话题</NavBar>
        </div>

        <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
          <TabPane tab="推荐" key="1">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<div><Medal>基金</Medal><Medal>保险</Medal></div>}
              cy="45"
            >
              <img src={img1} alt="img1"/>
              <img src={img2} alt="img2"/>
              <img src={img3} alt="img3"/>
            </HotTopicItem>
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="234"
            >
            </HotTopicItem>
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="234"
            >
            </HotTopicItem>
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="234"
            >
            </HotTopicItem>
          </TabPane>
          <TabPane tab="保险" key="2">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="23"
            >
            </HotTopicItem>
          </TabPane>
          <TabPane tab="债券" key="3">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="654"
            >
              <img src={img1} alt="img1"/>
              <img src={img2} alt="img2"/>
              <img src={img3} alt="img3"/>
            </HotTopicItem>
          </TabPane>
          <TabPane tab="基金" key="4">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="234"
            >
            </HotTopicItem>
          </TabPane>
          <TabPane tab="海外房产" key="5">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="54"
            >
              <img src={img1} alt="img1"/>
              <img src={img2} alt="img2"/>
              <img src={img3} alt="img3"/>
            </HotTopicItem>
          </TabPane>
          <TabPane tab="护照" key="6">
            <HotTopicItem
              content="# 中航信托 天启（2017）82号硅谷产业基金集合信托 # 信中利达股东汪潮涌承诺回购的股权投资项目靠谱么？"
              medal={<Medal>基金</Medal>}
              cy="234"
            >
            </HotTopicItem>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default HotTopic;
