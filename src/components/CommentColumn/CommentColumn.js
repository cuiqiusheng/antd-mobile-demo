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
    this.state = {
      editing: false
    };
    this.handlecomment = this.handlecomment.bind(this);
  }
  handlecomment() {
    this.setState({editing: !this.state.editing});
  }
  render() {
    const { editing } = this.state;
    const show = editing ? 'none' : '';
    const hide = editing ? '' : 'none';
    return (
        <div>
          <div className={style.wrapper}>
            <div className={style.buttonmod}  style={{display: show}}>
              <div className={style.commentbtn} onClick={this.handlecomment}>
                <img src={brush} alt=""  className={style.penlic} />
                <span>参与讨论...</span>
              </div>
              <div className={style.goodnum}>
                <img src={praise} alt=""  className={style.penlic} />
                <span>607</span>
              </div>
              <div className={style.likenum}>
                <img src={collection} alt=""  className={style.penlic} />
                <span>123</span>
              </div>
              <div className={style.commentnum}>
                <img src={message} alt=""  className={style.penlic} />
                <span>10.</span>
              </div>
            </div>
            <div className={style.inputmod}  style={{display: hide}}>
              <input type="text" placeholder="请在此输入您的观点..." className={style.inp} />
              <span className={style.submit}>发布</span>
            </div>
          </div>
          <div style={{display: hide}} className={style.mask} onClick={this.handlecomment}></div>
        </div>

    );
  }
}

export default CommentColumn;
