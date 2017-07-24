/**
 * @summary 答主列表组件
 */
import React, { Component } from 'react';
import style from './style.css';
import img from './img1.jpg';

class MasterListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focus: false,
        };
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus() {
        this.setState({focus: !this.state.focus});
    }

    render() {
        return (
            <div className={style.wrapper}>
              <div className={style.avatar}><img src={img} alt="img"/></div>
              <div className={style.info}>
                <p>{this.props.name}</p>
                <p>1677 人关注</p>
              </div>
              <div
                  onClick={this.handleFocus}
                  className={this.state.focus ? style.btnGray : style.btn}
              ><span></span>{this.state.focus ? '已关注' : '关注'}</div>
            </div>
        );
    }
}

export default MasterListItem;
