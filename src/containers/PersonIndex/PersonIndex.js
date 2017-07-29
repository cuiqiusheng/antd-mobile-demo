import React, { Component } from 'react';
import style from './style.css';
import { NavBar, WhiteSpace } from 'antd-mobile';

import avatar from './conpic.jpg';
import girl from './girl.png';
import Medal from '../../components/Medal';
import Like from '../../components/Like';
import Watch from '../../components/Watch';
import Title from '../../components/Title';
import ArticalPreview from '../../components/ArticalPreview';

class PersonIndex extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          rightContent={<a onClick={() => console.log('rightClick')}>···</a>}
          onLeftClick={() => console.log('left')}
        />

        <div className={style.personInfo}>
          <div className={style.avatarBox}>
            <img className={style.avatar} src={avatar} alt="头像"/>
            <span className={style.sex}><img src={girl} alt="女性"/></span>
          </div>
          <p className={style.name}>理财规划师</p>
          <p className={style.dsc}>理财规划师 | 对友邦保险产品有深入研究</p>
          <p className={style.content}>国内领先理财服务平台号规划网首席理财师，拥有6年理财行业经验，累计为上万人之作理财规划方案，在个人理财规划和保险领域有深入研究，风趣幽默，知书达理。</p>
          <div className={style.blank}>
            <div><Watch num="52" /></div>
            <div><Like num="52" /></div>
          </div>
        </div>

        <div className={style.wallet}>
          <div onClick={() => console.log('钱包')}>
            <p>钱包</p>
            <p className={style.balance}>￥234,234</p>
          </div>
          <div onClick={() => console.log('充值')}>充值</div>
          <div onClick={() => console.log('提现')}>提现</div>
        </div>

        <WhiteSpace size="sm" />

        <Title>我的回答</Title>

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

        <Title>我的提问</Title>

        <ArticalPreview
          medal={<Medal>信托</Medal>}
          title="对于犹豫期的规定，不同的保险公司有不同的规定吗？"
          wg="244 回答"
          pl="9 围观"
          date="8月8日"
        />

        <WhiteSpace size="sm" />

        <Title>我的话题</Title>

        <ArticalPreview
          medal={<Medal>保险</Medal>}
          title="对于犹豫期的规定，不同的保险公司有不同的规定吗？"
          wg="244 关注"
          pl="9 参与"
          date="8月8日"
        >
          <div className={style.articalImg}></div>
        </ArticalPreview>

        <WhiteSpace size="sm" />

        <Title>我的评论</Title>

        <ArticalPreview
          title="评论了专栏#唐宁：独立理财师时代远未到来#"
          wg="244 围观"
          pl="9 赞"
          date="8月8日"
        >
          对于犹豫期的规定，不同的保险公司有不同的规定，不同的保险公司有不同的规定，国内领先理财服务平台号规划网首席理财师，拥有6年理财行业经验，累计为上万人之作理财规划方案，在个人理财规划和保险领域有深入研究，风趣幽默，知书达理，武功高强...
        </ArticalPreview>
      </div>
    );
  }
}

export default PersonIndex;
