import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon } from 'antd-mobile';

class Model extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="1" type="ellipsis" />
                ]}
        >热门话题</NavBar>
      </div>
    );
  }
}

export default Model;
