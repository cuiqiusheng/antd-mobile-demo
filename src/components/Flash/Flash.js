/**
 * @summary 幻灯片
 */
import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';
import style from './style.css';

class Flash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ['', '', ''],
      initialHeight: 200,
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <Carousel
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={1}
          swipeSpeed={35}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((item, index) => (
            <a key={index}>
              <div className={style.block}>{index + 1}</div>
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default Flash;
