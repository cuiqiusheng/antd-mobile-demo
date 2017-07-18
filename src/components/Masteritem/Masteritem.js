/**
 * @white
 */
import React, { Component } from 'react';
import style from './style.css';
import { Checkbox } from 'antd-mobile';
import Medal from '../../components/Medal'

import testphotojpg from './testphotojpg.jpg';

class Masteritem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.masteritembox}>
        <div className={style.headportrait}>
          <div className={style.imgbox}>
            <img src={testphotojpg} alt="" className={style.portrait}/>
          </div>
        </div>
        <div className={style.mastercontent}>
          <div className={style.mastername}>何佳佳&nbsp;&nbsp;<Medal fontSize="18" color="#65d1f7">保险</Medal> <Medal fontSize="18" color="#d764f7">基金</Medal></div>
          <div className={style.masterillustrate}>持牌人,队友帮保险有深入了解</div>
          <div className={style.message}>230 回答 · 1788 关注 · 1 专栏</div>

        </div>
        <div className={style.mastercheckbox}>
          <Checkbox onChange={() => console.log('选中')}>
          </Checkbox>
        </div>
      </div>
    );
  }
}

export default Masteritem;
