import React from 'react'
import {NavBar,InputItem,Flex,Button,WhiteSpace,WingBlank} from 'antd-mobile'
import { createForm } from 'rc-form';
import style from './style.css'

/**
 * 兑换码页
 */
class Convert extends React.Component{


    render(){
        const { getFieldProps } = this.props.form;
        return(
            <div className={style.body}>
                <NavBar iconName="left"
                        leftContent="返回"
                        mode="light"
                        className={style.nav}
                        onLeftClick={this.hideLogin}
                >兑换码</NavBar>
                <WingBlank style={{marginTop:'0.44rem'}} size="lg">
                   <div>
                      <InputItem
                          className={style.input}
                          {...getFieldProps('input3')}
                          placeholder="请输入10位兑换码"/>
                   </div>
                </WingBlank>
                <WhiteSpace size="md"/>
                <Button type="primary" size="small" style={{marginLeft:'0.22rem'}} inline>确认兑换</Button>
            </div>
        );
    }
}

const ConvertWrapper = createForm()(Convert);

export default ConvertWrapper