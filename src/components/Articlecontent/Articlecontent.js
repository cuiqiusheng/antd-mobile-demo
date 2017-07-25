/**
 * @summary
 */
import React, { Component } from 'react';
import style from './style.css';
import conpic from './conpic.jpg'


class model extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={style.box}>
                <p className={style.text}>今年以来平均收益率不到1%，远远跑输基准指数，前几年因收益颇丰而名噪一时的主动型量化基金如今正遭遇困局。分析人士指出，量化基金光环褪去的原因是市场风格急转，“抱团”行情下，量化模型对于历史数据的筛选判断，以及技术面上的广度优势难以发挥。不过，尽管量化基金整体短期表现欠佳，但仍有部分基金取得超过10%的收益。</p>
                <p className={style.text}>中国证券记者统计发现，量化基金今年以来的收益好坏与否，与各只基金持仓集中度或有相关性。部分机构指出，看好量化基金模型的进化过程，建议投资者从更长期的区间来看待量化基金的表现。</p>
                <img src={conpic} alt="" className={style.pic}/>
                <h4 className={style.tit}>业绩分化或与集中度有关</h4>
                <p className={style.text}>据wind数据，截至7月13日，全市场名称中含有“量化”字样的基金，目前在存续期可统计的有93只（各类份额分开统计，不包含被动指数型）。这93只量化基金今年以来平均收益约为0.67%，同期沪深300涨幅约为11.38%，上证综指涨幅约3.69%。名单中，有37只基金今年以来收益为负，亏损基金占比近4成。</p>
            </div>
        );
    }
}

export default model;