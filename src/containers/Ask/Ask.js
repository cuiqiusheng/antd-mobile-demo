import React, { Component } from 'react';
import style from './style.css';
import { NavBar, ImagePicker, TextareaItem, WhiteSpace, List, Switch, InputItem, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import tag from './image/tag.png';
import Medal from '../../components/Medal';

class Ask extends Component {
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
	
	data = [
		{
			label: '张大龙',
			value: '张大龙',
		},
		{
			label: '小神龙',
			value: '小神龙',
		},
		{
			label: 'PGone',
			value: 'PGone',
		},
		{
			label: '布瑞基',
			value: '布瑞基',
		},
	];

  render() {
		console.log(this.data)
    const { getFieldProps } = this.props.form;
    const { files } = this.state;
    return (
      <div className={style.wrapper}>
        <NavBar
          leftContent="取消"
          rightContent={(
            <a onClick={() => console.log('支付')}>支付并发布</a>
          )}
          mode="light"
          onLeftClick={() => console.log('取消')}
          iconName={null}
          className={style.navbar}
        >提问</NavBar>

        <div className={style.content}>
          <TextareaItem
            {...getFieldProps('count', {
              initialValue: '',
            })}
            rows={5}
            count={200}
            placeholder='请详细描述你的问题，如有必要可附带图片以补充说明。详细介绍背景有利于获得全面有效的解答。48小时内无人作答，将退换提问金至你的账户余额。'
            className={style.text}
            autoHeight={false}
          />
          <div className={style.image}>
            <ImagePicker
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 5}
            />
          </div>
        </div>

        <div className={style.tagBox}>
          <span className={style.icon}><image src={tag} /></span>
          <Medal fontSize="28">保险</Medal>
          <Medal fontSize="28" color="#d563f7">基金</Medal>
          <Medal fontSize="28" color="#f66390">债券</Medal>
          <Medal fontSize="28" color="#74b0f6">护照</Medal>
          <Medal fontSize="28" color="#32d15b">移民</Medal>
          <Medal fontSize="28" color="#f77f64">房产</Medal>
        </div>

        <WhiteSpace size="xl" />

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

					<InputItem
            {...getFieldProps('money2', {
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            })}
            type="money"
						// placeholder="最低￥2元"
						extra="元"
            onFocus={() => {
              this.setState({
                moneyfocused: false,
              });
            }}
            focused={this.state.moneyfocused}
          >设置提问金</InputItem>
				</List>

				<WhiteSpace size="lg" />

				<List>
					<Picker data={this.data} cols={1} {...getFieldProps('asker')} className="forss">
						<List.Item arrow="horizontal">指定提问人</List.Item>
					</Picker>
					
					<List.Item
						extra={<Switch
							{...getFieldProps('Switch1', {
								initialValue: true,
								valuePropName: 'checked',
							})}
							onClick={(checked) => { console.log(checked); }}
						/>}
					>私密提问</List.Item>

					<List.Item arrow="horizontal">
						查看问题细则及责任声明
					</List.Item>
				</List>

      </div>
    );
  }
}

Ask = createForm()(Ask);
export default Ask;
