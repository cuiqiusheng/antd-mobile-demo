import React, { Component } from 'react';
import style from './style.css';
import {
  NavBar,
  // WhiteSpace,
  Tabs
} from 'antd-mobile';
// import Medal from '../../components/Medal';

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
            <div>内容1</div>
          </TabPane>
          <TabPane tab="保险" key="2">
            <div>内容2</div>
          </TabPane>
          <TabPane tab="债券" key="3">
            <div>内容3</div>
          </TabPane>
          <TabPane tab="基金" key="4">
            <div>内容4</div>
          </TabPane>
          <TabPane tab="海外房产" key="5">
            <div>内容5</div>
          </TabPane>
          <TabPane tab="护照" key="6">
            <div>内容6</div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default HotTopic;
