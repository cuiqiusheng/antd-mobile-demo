import React, { Component } from 'react';
import style from './style.css';
import MasterListItem from '../../components/MasterListItem';

class MasterList extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }

  render() {
    return (
      <div className={style.wrapper}>
        <MasterListItem
          name="张震岳"
          dsc="持牌人，对友邦保险有深入了解"
        />
      </div>
    );
  }
}

export default MasterList;
