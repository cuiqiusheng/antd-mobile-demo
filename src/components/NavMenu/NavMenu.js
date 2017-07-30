/**
 * @summary 下方导航
 */
import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import {
  showlogin,
  // checkLoginStatus,
} from '../../containers/Login/Action'

class NavMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'homeTab',
      hidden: false,
    };


    this.loaded = this.loaded.bind(this);
  }

  loaded(selectedTab) {
    // console.log(selectedTab);
    const { dispatch } = this.props;
    switch (selectedTab) {
      case 'myTab':
        {
          const { login: { isLogin } } = this.props;
          // console.log(isLogin);
          if (!isLogin) {
            dispatch(showlogin());
          }
        }
        break;
      default:
        return;
    }

  }

  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={<Icon type="koubei-o" size="md" />}
            selectedIcon={<Icon type="koubei" size="md" />}
            title="首页"
            key="首页"
            selected={this.state.selectedTab === 'homeTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'homeTab',
              });
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '0.44rem',
                height: '0.44rem',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat'
              }}
              />
            }
            title="产品"
            key="产品"
            selected={this.state.selectedTab === 'proTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'proTab',
              });
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="我的"
            selected={this.state.selectedTab === 'myTab'}
            onPress={() => {
              this.loaded("myTab");
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default NavMenu;
