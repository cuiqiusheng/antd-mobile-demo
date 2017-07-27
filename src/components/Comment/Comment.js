/**
 * @summary
 */
import React, { Component } from 'react';
import style from './style.css';
import img from './img1.jpg';

class Comment extends Component {

	constructor(props) {
		super(props);
		this.state = {
			focus: false,
		};
		this.handleFocus = this.handleFocus.bind(this);
	}

	handleFocus() {
		this.setState({ focus: !this.state.focus });
	}

	render() {
		return (
			<div className={style.box}>
				<div className={style.wrapper}>
					<div className={style.avatar}><img src={img} alt="img" /></div>
					<div className={style.info}>
						<p><span>金凯瑞</span><span className={style.job}>理财规划师</span></p>
						<p>07-16 00:34</p>
					</div>
					<div
						onClick={this.handleFocus}
						className={this.state.focus ? style.btnGray : style.btn}
					>60 <span></span></div>
				</div>
				<div className={style.commenttext}>
					<p className={style.paragraph}>在盈利的量化基金中，今年以来收益超过10%的有7只，占比约7.5%。其中，景顺长城量化新动力以20.11%的成绩位列榜首。</p>
					<p className={style.paragraph}>在亏损的量化基金中，19只基金跌幅超过5%，占比约两成；7只基金净值今年以来遭受10%以上回撤，跌幅最大的一只回撤14.12%。</p>
				</div>
			</div>
		);
	}
}

export default Comment;
