import React from 'react'
import {NavBar,Tabs,ListView} from 'antd-mobile'
import style from './style.css'

/**
 * 收支记录
 */


const data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
    },
];

let index = data.length - 1;

const NUM_ROWS = 20;
let pageIndex = 0;

class InOutHistory extends React.Component{
    constructor(props){
        super(props);

        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.genData = (pIndex = 0) => {
            const dataBlob = {};
            for (let i = 0; i < NUM_ROWS; i++) {
                const ii = (pIndex * NUM_ROWS) + i;
                dataBlob[`${ii}`] = `row - ${ii}`;
            }
            return dataBlob;
        };

        this.state = {
            dataSource: dataSource.cloneWithRows({}),
            isLoading: true,
        }
    }

    callback(key) {
        console.log('onChange', key);
    }
    handleTabClick(key) {
        console.log('onTabClick', key);
    }

    componentDidMount() {
        // you can scroll to the specified position
        // setTimeout(() => this.refs.lv.refs.listview.scrollTo(0, 200), 800); // also work
        // setTimeout(() => this.refs.lv.scrollTo(0, 200), 800); // recommend usage

        // simulate initial Ajax
        setTimeout(() => {
            this.rData = this.genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    render() {
        const TabPane = Tabs.TabPane;

        const separator = (sectionID, rowID) => (
            <div key={`${sectionID}-${rowID}`}
                 style={{
                     backgroundColor: '#F5F5F9',
                     height: 8,
                     borderTop: '1px solid #ECECED',
                     borderBottom: '1px solid #ECECED',
                 }}
            />
        );
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];
            return (
                <div key={rowID} className="row">
                    <div className="row-title">{obj.title}</div>
                    <div style={{ display: '-webkit-box', display: 'flex', padding: '0.3rem 0' }}>
                        <img style={{ height: '1.28rem', marginRight: '0.3rem' }} src={obj.img} alt="icon" />
                        <div className="row-text">
                            <div style={{ marginBottom: '0.16rem', fontWeight: 'bold' }}>{obj.des}</div>
                            <div><span style={{ fontSize: '0.6rem', color: '#FF6E27' }}>{rowID}</span>¥</div>
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div className={style.body}>
                <NavBar iconName="left"
                        leftContent="返回"
                        mode="light"
                        className={style.nav}
                        onLeftClick={this.hideLogin}
                >收支记录</NavBar>
                <Tabs defaultActiveKey="2" onChange={this.callback} onTabClick={this.handleTabClick}>
                    <TabPane tab="账户收入" key="1">

                        <ListView ref="lv"
                                  dataSource={this.state.dataSource}
                                  renderHeader={() => <span>header</span>}
                                  renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                      {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                  </div>)}
                                  renderRow={row}
                                  renderSeparator={separator}
                                  className="am-list"
                                  pageSize={15}
                                  useBodyScroll
                                  onScroll={() => { console.log('scroll'); }}
                                  scrollRenderAheadDistance={500}
                                  scrollEventThrottle={200}
                                  onEndReached={this.onEndReached}
                                  onEndReachedThreshold={10}
                        />
                    </TabPane>
                    <TabPane tab="账户支出" key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            <ListView ref="lv"
                                      dataSource={this.state.dataSource}
                                      renderHeader={() => <span>header</span>}
                                      renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                                          {this.state.isLoading ? 'Loading...' : 'Loaded'}
                                      </div>)}
                                      renderRow={row}
                                      renderSeparator={separator}
                                      className="am-list"
                                      pageSize={15}
                                      useBodyScroll
                                      onScroll={() => { console.log('scroll'); }}
                                      scrollRenderAheadDistance={500}
                                      scrollEventThrottle={200}
                                      onEndReached={this.onEndReached}
                                      onEndReachedThreshold={10}
                            />
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default InOutHistory