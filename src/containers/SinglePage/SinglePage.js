/**
 * @summary 页面
 */
import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

import NavMenu from '../../components/NavMenu';
import Flash from '../../components/Flash';
import GridAds from '../../components/GridAds';

import style from './style.css';

class SinglePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.box}>
        <SearchBar placeholder="搜索" />
        <Flash />
        <GridAds />
        <div className={style.notice}>
          系统管理员：第一次买保险是买人寿保险还是理财保险
        </div>
        <NavMenu />
      </div>
    );
  }
}

export default SinglePage;
