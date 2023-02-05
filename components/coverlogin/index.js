import {Button, Checkbox, Form, Input, Tabs} from "antd";

require("./index.less")
import React, {Component} from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

class Coverlogin extends Component{
    render(){
        const _loginShow = this.props._loginShow;
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
        return (
                <div className={"cover"}>
                    <div className={"ux-modal_dialog"}>
                        <div className={"close"}>
                            <span onClick={_loginShow} className={"iconfont"}>&#xe614;</span>
                        </div>
                        <div className={"form_biaodan"}>
                            <Tabs defaultActiveKey="1" centered size={"large"} tabBarGutter={50} style={{ marginBottom: 32 }}>
                                <Tabs.TabPane tab={<div className={"left_tabs"}>账号密码登录</div>} key="1">
                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        initialValues={{
                                            remember: true,
                                        }}
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入账号',
                                                },
                                            ]}
                                        >
                                            <Input prefix={<UserOutlined className="site-form-item-icon username_size" />} placeholder="请输入账号"/>
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: '请输入密码',
                                                },
                                            ]}
                                        >
                                            <Input
                                                prefix={<LockOutlined className="site-form-item-icon password_size" />}
                                                type="password"
                                                placeholder="请输入密码"
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button button_size">
                                                登录
                                            </Button>
                                        </Form.Item>
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>十天内免登录</Checkbox>
                                            <a className="login-form-forgot" href="">
                                                &nbsp;忘记密码？
                                            </a>
                                        </Form.Item>

                                    </Form>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab={<div className={"left_tabs"}>注册新的账号</div>} key="2">
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入账号',
                                            },
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon username_size" />} placeholder="请输入账号"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入账号',
                                            },
                                        ]}
                                        >
                                        <Input.Password placeholder="请输入密码" className={"register-password"}/>
                                    </Form.Item>
                                    <Form.Item
                                        name="username_again"
                                        rules={[
                                            {
                                                required: true,
                                                message: '请输入账号',
                                            },
                                        ]}
                                    >
                                        <Input.Password placeholder="再次确认密码" className={"register-password"}/>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button button_size">
                                            注册账号
                                        </Button>
                                    </Form.Item>
                                </Tabs.TabPane>
                            </Tabs>



                        </div>
                    </div>

                </div>
        )
    }
}
export default Coverlogin;

