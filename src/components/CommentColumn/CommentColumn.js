/**
 * @summary 
 */
import React, { Component } from 'react';
import style from './style.css';
import brush from './brush.png';
import collection from './collection.png';
import message from './message.png';
import praise from './praise.png';

class CommentColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.buttonmod}>
          <div className={style.commentbtn}>
            <img src={brush} alt=""  className={style.penlic}/>
            <span>参与讨论...</span>
          </div>
          <div className={style.goodnum}>
            <img src={praise} alt=""  className={style.penlic}/>
            <span>607</span>
          </div>
          <div className={style.likenum}>
            <img src={collection} alt=""  className={style.penlic}/>
            <span>123</span>
          </div>
          <div className={style.commentnum}>
            <img src={message} alt=""  className={style.penlic}/>
            <span>10.</span>
          </div>
        </div>
        <div className={style.inputmod}></div>
      </div>
    );
  }
}

export default CommentColumn;
