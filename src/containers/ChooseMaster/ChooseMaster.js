/**
 * @summary 选择答主
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Tabs, WhiteSpace } from 'antd-mobile';
import Masteritem from '../../components/Masteritem';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}

function handleTabClick(key) {
  console.log('onTabClick', key);
}

class ChooseMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          mode="light"
          onLeftClick={() => console.log('返回')}
        >选择答主</NavBar>
        <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
          <TabPane tab="热门答主" key="1">
            {/* <WhiteSpace size="xl" /> */}
            <div style={{ backgroundColor: '#fff', borderTop: '1px solid #bbbbbb' }}>
              <Masteritem
                name="张大龙"
                dsc="持牌人,队友帮保险有深入了解"
                hd="342"
                gz="487"
                zl="2"
              />
              <Masteritem
                name="小神龙"
                dsc="持牌人,队友帮保险有深入了解1"
                hd="85"
                gz="198"
                zl="4"
              />
              <Masteritem
                name="PGone"
                dsc="持牌人,队友帮保险有深入了解2"
                hd="328"
                gz="9990"
                zl="20"
              />
              <Masteritem
                name="布瑞吉"
                dsc="持牌人,队友帮保险有深入了解3"
                hd="546"
                gz="890"
                zl="12"
              />
              <Masteritem
                name="HipHopman"
                dsc="持牌人,队友帮保险有深入了解4"
                hd="324"
                gz="1988"
                zl="2"
              />
              <Masteritem
                name="叮当"
                dsc="持牌人,队友帮保险有深入了解5"
                hd="54"
                gz="3426"
                zl="2"
              />
              <Masteritem
                name="大笑"
                dsc="持牌人,队友帮保险有深入了解6"
                hd="67"
                gz="3452"
                zl="2"
              />
              <Masteritem
                name="VAVA"
                dsc="持牌人,队友帮保险有深入了解7"
                hd="12"
                gz="1988"
                zl="2"
              />
              <Masteritem
                name="辉子"
                dsc="持牌人,队友帮保险有深入了解8"
                hd="76"
                gz="765"
                zl="2"
              />
            </div>
          </TabPane>
          <TabPane tab="已关注用户" key="2">
            {/* <WhiteSpace size="xl" /> */}
            <div style={{ backgroundColor: '#fff', borderTop: '1px solid #bbbbbb' }}>
              <Masteritem
                name="万磁王"
                dsc="持牌人,队友帮保险有深入了解9"
                hd="234"
                gz="5675"
                zl="2"
              />
              <Masteritem
                name="GAI"
                dsc="持牌人,队友帮保险有深入了解10"
                hd="34"
                gz="45"
                zl="2"
              />
              <Masteritem
                name="张家辉"
                dsc="持牌人,队友帮保险有深入了解11"
                hd="845"
                gz="865"
                zl="2"
              />
              <Masteritem
                name="嘻哈侠"
                dsc="持牌人,队友帮保险有深入了解12"
                hd="32"
                gz="37"
                zl="2"
              />
              <Masteritem
                name="煎饼侠"
                dsc="持牌人,队友帮保险有深入了解13"
                hd="780"
                gz="1988"
                zl="2"
              />
              <Masteritem
                name="蜘蛛侠"
                dsc="持牌人,队友帮保险有深入了解14"
                hd="677"
                gz="743"
                zl="2"
              />
            </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default ChooseMaster;
