/**
 * @summary 答主主页
 * @date    2017-07-30
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, WhiteSpace, Button } from 'antd-mobile';

import avatar from './conpic.jpg';
import girl from './girl.png';
import Medal from '../../components/Medal';
import FocusButton from '../../components/FocusButton';
import Like from '../../components/Like';
import Watch from '../../components/Watch';
import Title from '../../components/Title';
import ArticalPreview from '../../components/ArticalPreview';

class MasterIndex extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          onLeftClick={() => console.log('left')}
        >赵敏</NavBar>

        <div className={style.personInfo}>
          <p className={style.job}>理财规划师</p>
          <p className={style.dsc}>对友邦保险产品有深入研究</p>
          <div className={style.avatar}><img src={avatar} alt="头像"/></div>
          <div className={style.opacity}>
            <div>
              <span className={style.sex}><img src={girl} alt="女性"/></span>
              <FocusButton />
            </div>
            <p className={style.content}>国内领先理财服务平台号规划网首席理财师，拥有6年理财行业经验，累计为上万人之作理财规划方案，在个人理财规划和保险领域有深入研究，风趣幽默，知书达理。</p>
          </div>
          <div className={style.blank}>
            <div><Watch num="52" /></div>
            <div><Like num="52" /></div>
          </div>
        </div>

        <WhiteSpace size="sm" />

        <Title>她的回答</Title>

        <ArticalPreview
          medal={<Medal>保险</Medal>}
          title="对于犹豫期的规定，不同的保险公司有不同的规定吗？"
          wg="244 围观"
          pl="9 评论"
          date="8月8日"
        >
          对于犹豫期的规定，不同的保险公司有不同的规定，不同的保险公司有不同的规定，国内领先理财服务平台号规划网首席理财师，拥有6年理财行业经验，累计为上万人之作理财规划方案，在个人理财规划和保险领域有深入研究，风趣幽默，知书达理，武功高强...
        </ArticalPreview>

        <WhiteSpace size="sm" />

        <Title>她的提问</Title>

        <ArticalPreview
          medal={<Medal>信托</Medal>}
          title="对于犹豫期的规定，不同的保险公司有不同的规定吗？"
          wg="244 围观"
          pl="9 评论"
          date="8月8日"
        />

        <WhiteSpace size="sm" />

        <Title>她的话题</Title>

        <ArticalPreview
          medal={<Medal>保险</Medal>}
          title="对于犹豫期的规定，不同的保险公司有不同的规定吗？"
          wg="244 围观"
          pl="9 评论"
          date="8月8日"
        >
          <div className={style.articalImg}></div>
        </ArticalPreview>

        <div className={style.askBtnBox}>
          <Button type="primary">向她提问</Button>
        </div>
      </div>
    );
  }
}

export default MasterIndex;
