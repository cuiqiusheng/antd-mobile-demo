/**
 * @summary 热门话题复用组件
 */
import React, { Component } from 'react';
import style from './style.css';
import { Card } from 'antd-mobile';

class HotTopicItem extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Card full>
          <Card.Body>
            <div>{this.props.content}</div>
            <div>{this.props.children}</div>
          </Card.Body>
          <Card.Footer
            content={this.props.medal}
            extra={<div>{this.props.cy} 人参与</div>} />
        </Card>
      </div>
    );
  }
}

export default HotTopicItem;
