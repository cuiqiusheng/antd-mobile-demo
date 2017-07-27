import React, { Component } from 'react';
import style from './style.css';
import { NavBar, Icon , WhiteSpace} from 'antd-mobile';
import ArticleTitle from '../../components/ArticleTitle';
import TopicDetailsMaster from '../../components/TopicDetailsMaster';
import Articlecontent from '../../components/Articlecontent';
import Comment from '../../components/Comment';
import CommentColumn from '../../components/CommentColumn';
class TopicDetails extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <NavBar 
          leftContent="返回"
          mode="light"
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="1" type="ellipsis" />
          ]}
        >热门话题</NavBar>
        <ArticleTitle>“广撒网”败给抱团 量化基金困局待破</ArticleTitle>
        <TopicDetailsMaster name="吴亦凡"></TopicDetailsMaster>
        <Articlecontent></Articlecontent>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <WhiteSpace/>
        <Comment></Comment>
        <CommentColumn></CommentColumn>
      </div>
    );
  }
}

export default TopicDetails;
