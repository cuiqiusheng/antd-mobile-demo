import React, { Component } from 'react';
import style from './style.css';
import { NavBar, ImagePicker, TextareaItem, WhiteSpace, List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';
import Medal from '../../components/Medal';

class ReleaseTopic extends Component {
  constructor(props) {
    super(props);
    this.state ={
      files: [],
    };
  }

  onChange = (files, type, index) => {
    console.log(files, type, index);
    this.setState({
      files,
    });
	}

  render() {
    const { getFieldProps } = this.props.form;
    const { files } = this.state;
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="返回"
          rightContent={(
            <a onClick={() => console.log('发布')}>发布</a>
          )}
          mode="light"
          onLeftClick={() => console.log('取消')}
          className={style.navbar}
        >新话题</NavBar>

        <div>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '',
            })}
            rows={3}
            count={100}
            placeholder='请在这里简单描述你要发布的话题的标题'
            autoHeight={false}
          />
        </div>

        <WhiteSpace size="lg" />

        <div className={style.content}>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '',
            })}
            rows={5}
            count={200}
            placeholder='请在这里详细描述你的话题'
            className={style.text}
            autoHeight={false}
          />
          <div className={style.image}>
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 5}
            />
          </div>
        </div>

        <div className={style.tagBox}>
          <span className={style.icon}>
            <image />
          </span>
          <Medal fontSize="28">保险</Medal>
          <Medal fontSize="28" color="#d563f7">基金</Medal>
          <Medal fontSize="28" color="#f66390">债券</Medal>
          <Medal fontSize="28" color="#74b0f6">护照</Medal>
          <Medal fontSize="28" color="#32d15b">移民</Medal>
          <Medal fontSize="28" color="#f77f64">房产</Medal>
        </div>

        <WhiteSpace size="lg" />

        <List>
          <List.Item
						extra={<Switch
							{...getFieldProps('Switch1', {
								initialValue: true,
								valuePropName: 'checked',
							})}
							onClick={(checked) => { console.log(checked); }}
						/>}
					>匿名</List.Item>
        </List>

      </div>
    );
  }
}

ReleaseTopic = createForm()(ReleaseTopic);
export default ReleaseTopic;
