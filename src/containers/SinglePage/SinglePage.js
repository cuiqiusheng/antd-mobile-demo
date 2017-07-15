/**
 * @summary 页面
 */
import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

import NavMenu from '../../components/NavMenu';
import Notice from '../../components/Notice';
import Flash from '../../components/Flash';
import GridAds from '../../components/GridAds';
import Title from '../../components/Title';
import Reward from '../../components/Reward';
import Answer from '../../components/Answer';
import Zhihu from '../../components/Zhihu';
import TipGray from '../../components/TipGray';
import TipBlue from '../../components/TipBlue';

import style from './style.css';

class SinglePage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.box}>
        <div className={style.scroll}>

          <SearchBar placeholder="搜索" />

          <div className={style.flashwrapper}>
            <Flash />
          </div>

          <GridAds />
          
          <Notice num="3">系统管理员：第一次买保险是买人寿保险还是理财保险</Notice>

          <div className={style.reward}>
            <Title>问题悬赏</Title>
            <Reward
              sign="15.0"
              medal="保险"
              num="190"
              time="5小时前"
            >
              保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？
            </Reward>
            <Reward
              sign="4.0"
              medal="基金"
              num="190"
              time="6月19日 17:45:05"
              color="#d662f7"
            >
              保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？
            </Reward> 
          </div>

          <div className={style.answer}>
            <Title>知名答主</Title>
            <div className={style.answerContent}>
              <Answer
                color="#9cf"
                name="张大龙"
                dsc="持牌人，对友邦保险有深入了解"
                q="230"
                g="1788"
              ></Answer>
              <Answer
                color="#0fc"
                name="小神龙"
                dsc="持牌人，对友邦保险有深入了解"
                q="230"
                g="1788"
              ></Answer>
              <Answer
                color="#399"
                name="PGone"
                dsc="持牌人，对友邦保险有深入了解"
                q="230"
                g="1788"
              ></Answer>
              <Answer
                color="#6cc"
                name="布瑞基"
                dsc="持牌人，对友邦保险有深入了解"
                q="230"
                g="1788"
              ></Answer>
            </div>
          </div>

          <div className={style.zhihu}>
            <Title>精彩问答</Title>
            <Zhihu
              title="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？"
              name="张大龙"
              dsc="持牌人，对友邦保险有深入了解"
              z="60"
              w="235"
            >
              <TipGray>对于犹豫期的规定，不同的保险公司有不同的规定，所以针对不同的保险公司应该有不同的策略...</TipGray>
            </Zhihu>
            <Zhihu
              title="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？"
              name="小神龙"
              dsc="持牌人，对友邦保险有深入了解"
              z="60"
              w="235"
              color="#0fc"
            >
              <TipBlue>2.00</TipBlue>
            </Zhihu>
            <Zhihu
              title="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？"
              name="PGone"
              dsc="持牌人，对友邦保险有深入了解"
              z="60"
              w="235"
              color="#399"
            >
              <TipGray>对于犹豫期的规定，不同的保险公司有不同的规定，所以针对不同的保险公司应该有不同的策略...</TipGray>
            </Zhihu>
            <Zhihu
              title="保单的21天犹豫期到底是工作日还是自然日？21天内客户退保如何申请，客户有什么损失吗？"
              name="布瑞基"
              dsc="持牌人，对友邦保险有深入了解"
              z="60"
              w="235"
              color="#6cc"
            >
              <TipBlue>2.00</TipBlue>
            </Zhihu>
          </div>

        </div>

        <NavMenu />
      </div>
    );
  }
}

export default SinglePage;
