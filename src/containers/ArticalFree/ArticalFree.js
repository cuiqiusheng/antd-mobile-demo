/**
 * @summary 专栏文章-免费
 * @date    2017-08-02
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Button } from 'antd-mobile';
import banner from './titpic.png';
import like from './like.jpg';
import comment from './comment.jpg';
import collect from './collect.jpg';

class ArticalFree extends Component {
  constructor(props) {
    super(props);
    this.state ={};
    this.onLike = this.onLike.bind(this);
    this.onComment = this.onComment.bind(this);
    this.onCollect = this.onCollect.bind(this);
  }

  // 点赞
  onLike() {
    console.log('赞');
  }

  // 评论
  onComment() {
    console.log('评论');
  }

  // 收藏
  onCollect() {
    console.log('收藏');
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar
          mode="light"
          leftContent="返回"
          onLeftClick={() => console.log('返回')}
        >专栏文章</NavBar>

        <div className={style.banner}>
          <img src={banner} alt="banner" />
        </div>

        <div className={style.articalBox}>
          <h2>《唐宁：独立理财师时代远未到来》</h2>
          <p className={style.artical}>
            据英国路透社8月2日报道，美国司法部特别检察官穆勒团队的发言人证实，一名前美国司法部官员将成为穆勒团队的最新成员。该团队主要负责调查俄罗斯干涉2016年美国大选一案。
            穆勒的发言人约翰•司图夫说，格雷戈•安德烈斯（Greg Andres）在8月1日成为这个团队的第16名成员。
            据报道，安德烈斯现年50岁，曾经在2010年到2012年服务于司法部。在司法部刑事部门，他曾担任副助理总检察长，负责监督欺诈案件工作并管理主要瞄准非法海外行贿的项目。
            穆勒在5月份被司法部委任为特别检察官，负责调查在大选中特朗普和俄罗斯之间的可能存在的串通以及其他事务。美国国会委员会也同样在调查这些事务。
            据英国路透社8月2日报道，美国司法部特别检察官穆勒团队的发言人证实，一名前美国司法部官员将成为穆勒团队的最新成员。该团队主要负责调查俄罗斯干涉2016年美国大选一案。
            穆勒的发言人约翰•司图夫说，格雷戈•安德烈斯（Greg Andres）在8月1日成为这个团队的第16名成员。
            据报道，安德烈斯现年50岁，曾经在2010年到2012年服务于司法部。在司法部刑事部门，他曾担任副助理总检察长，负责监督欺诈案件工作并管理主要瞄准非法海外行贿的项目。
            穆勒在5月份被司法部委任为特别检察官，负责调查在大选中特朗普和俄罗斯之间的可能存在的串通以及其他事务。美国国会委员会也同样在调查这些事务。
            据英国路透社8月2日报道，美国司法部特别检察官穆勒团队的发言人证实，一名前美国司法部官员将成为穆勒团队的最新成员。该团队主要负责调查俄罗斯干涉2016年美国大选一案。
            穆勒的发言人约翰•司图夫说，格雷戈•安德烈斯（Greg Andres）在8月1日成为这个团队的第16名成员。
            据报道，安德烈斯现年50岁，曾经在2010年到2012年服务于司法部。在司法部刑事部门，他曾担任副助理总检察长，负责监督欺诈案件工作并管理主要瞄准非法海外行贿的项目。
            穆勒在5月份被司法部委任为特别检察官，负责调查在大选中特朗普和俄罗斯之间的可能存在的串通以及其他事务。美国国会委员会也同样在调查这些事务。
            据英国路透社8月2日报道，美国司法部特别检察官穆勒团队的发言人证实，一名前美国司法部官员将成为穆勒团队的最新成员。该团队主要负责调查俄罗斯干涉2016年美国大选一案。
            穆勒的发言人约翰•司图夫说，格雷戈•安德烈斯（Greg Andres）在8月1日成为这个团队的第16名成员。
            据报道，安德烈斯现年50岁，曾经在2010年到2012年服务于司法部。在司法部刑事部门，他曾担任副助理总检察长，负责监督欺诈案件工作并管理主要瞄准非法海外行贿的项目。
            穆勒在5月份被司法部委任为特别检察官，负责调查在大选中特朗普和俄罗斯之间的可能存在的串通以及其他事务。美国国会委员会也同样在调查这些事务。
          </p>
        </div>
        
        <div className={style.footer}>
          <div onClick={this.onLike}>
            <img src={like} alt="like" />
            <br />
            <span>赞 607</span>
          </div>
          <div onClick={this.onComment}>
            <img src={comment} alt="comment" />
            <br />
            <span>评论 10</span>
          </div>
          <div onClick={this.onCollect}>
            <img src={collect} alt="collect" />
            <br />
            <span>收藏 123</span>
          </div>
        </div>

      </div>
    );
  }
}

export default ArticalFree;
