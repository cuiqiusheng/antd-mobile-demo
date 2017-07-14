import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

import NavMenu from '../../components/NavMenu';
import Flash from '../../components/Flash';
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
        <NavMenu />
      </div>
    );
  }
}

export default SinglePage;
