/**
 * @summary 四个专栏
 */
import React, { Component } from 'react';
import { Grid, Icon } from 'antd-mobile';
import style from './style.css';

class GridAds extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      { icon: <Icon type="koubei-o" />, text: '专栏' },
      { icon: <Icon type="koubei-o" />, text: '话题' },
      { icon: <Icon type="koubei-o" />, text: '课程' },
      { icon: <Icon type="koubei-o" />, text: '百宝箱' },
    ];
    return (
      <div className={style.grid}>
        <Grid data={data} columnNum={4} hasLine={false} />
      </div>
    );
  }
}

export default GridAds;
