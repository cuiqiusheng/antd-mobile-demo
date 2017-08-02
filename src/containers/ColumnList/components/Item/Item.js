import React, { Component } from 'react';
import style from './style.css';
import egg from './egg.png';
import { Flex } from 'antd-mobile';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state ={
    };
  }

  render() {
    return (
      <div className={style.wrapper}>
        <Flex>
          <Flex.Item>
            <img src={egg} className={style.pic}/>
          </Flex.Item>
          <Flex.Item className={style.flexitem}>
            <div className={style.box}>
              <h3 className={style.tit}>"广撒网"败给抱团,量化基金困局待破</h3>
              <span className={style.time}>07-11 00:00</span>
            </div>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

export default Item;
