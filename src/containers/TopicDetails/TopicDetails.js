import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon } from 'antd-mobile';
import ArticleTitle from '../../components/ArticleTitle';
import TopicDetailsMaster from '../../components/TopicDetailsMaster';

class Model extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                  <Icon key="1" type="ellipsis" />
                ]}
        >热门话题</NavBar>
          <ArticleTitle>“广撒网”败给抱团 量化基金困局待破</ArticleTitle>
          <TopicDetailsMaster name="吴亦凡"></TopicDetailsMaster>
      </div>
    );
  }
}

export default Model;
