import React, { Component } from 'react';
import style from './style.css';
import { NavBar,Tabs, WhiteSpace } from 'antd-mobile';

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
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('返回')}
        >选择答主</NavBar>
        <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
          <TabPane tab="热门答主" key="1">
            <WhiteSpace size="xl"/>
            <div style={{backgroundColor: '#fff',borderTop:'1px solid #bbbbbb' }}>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>
                <Masteritem></Masteritem>

            </div>
          </TabPane>
          <TabPane tab="已关注用户" key="2">
            <WhiteSpace size="xl"/>
              <div style={{backgroundColor: '#fff',borderTop:'1px solid #bbbbbb' }}>
                  <Masteritem></Masteritem>
                  <Masteritem></Masteritem>
                  <Masteritem></Masteritem>
                  <Masteritem></Masteritem>
                  <Masteritem></Masteritem>
                  <Masteritem></Masteritem>
              </div>
          </TabPane>
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}

export default ChooseMaster;
