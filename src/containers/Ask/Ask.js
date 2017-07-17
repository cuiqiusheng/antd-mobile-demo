import React, { Component } from 'react';
import style from './style.css';
import { NavBar } from 'antd-mobile';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="取消"
          rightContent={(
            <a onClick={() => console.log('支付')}>支付并发布</a>
          )}
          mode="light"
          onLeftClick={() => console.log('取消')}
          iconName={null}
        >提问</NavBar>
      </div>
    );
  }
}

export default Ask;
