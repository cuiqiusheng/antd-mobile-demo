/**
 * @summary
 */
import React, { Component } from 'react';
import style from './style.css';
import Medal from '../Medal';


class model extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.box}>
              <i className={style.type}><Medal fontSize="23" color="#007ae4">基金</Medal></i>
              <h3 className={style.title}>{ this.props.children }</h3>
            </div>
        );
    }
}

export default model;