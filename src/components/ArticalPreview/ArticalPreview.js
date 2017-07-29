/**
 * @summary 回答(提问)预览条目
 * @date    2017-07-29
 * @author  cuiqs
 */
import React, { Component } from 'react';
import style from './style.css';

class ArticalPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.title}>
          {this.props.medal}
          {this.props.title}
        </div>
        <div className={style.content}>
          {this.props.children}
        </div>
        <div className={style.bottom}>
          <div className={style.comment}>
            {this.props.wg} 围观
            <span>·</span>
            {this.props.pl} 评论
          </div>
          <div className={style.date}>
            {this.props.date}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticalPreview;
