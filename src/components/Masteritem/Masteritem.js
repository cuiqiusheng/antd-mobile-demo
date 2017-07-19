/**
 * @summary 选择答主页面
 * @author white
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
            <div className={style.portrait}></div>
          </div>
        </div>
        <div className={style.mastercontent}>
          <div className={style.mastername}>
            <span className={style.personName}>{ this.props.name }</span>
            <Medal fontSize="18" color="#65d1f7">保险</Medal>
            <Medal fontSize="18" color="#d764f7">基金</Medal>
          </div>
          <div className={style.masterillustrate}>{ this.props.dsc }</div>
          <div className={style.message}>
            {this.props.hd} 回答 · {this.props.gz} 关注 · {this.props.zl} 专栏
          </div>
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
