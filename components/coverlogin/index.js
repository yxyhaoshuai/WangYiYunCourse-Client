import {useRouter} from "next/router";

require("./index.less")
import {Button, Checkbox, Form, Input, message, Tabs} from "antd";
import React from "react";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login, register, saveUser} from "../../api/userApi";
import {globalMessage} from "../../tools/globalMessage";


export default function Coverlogin({_loginShow}) {

    const router = useRouter()

    //注册成功提示
    const success = () => {
        message.success({
            content: '注册成功！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //注册失败提示
    const error = () => {
        message.error({
            content: '账号已存在，注册失败！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //登录成功提示
    const loginSuccess = () => {
        message.success({
            content: '登录成功！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };




    //登录请求
    const onFinish = (values) => {
        if (values.account !== undefined){
            login(values.account,values.password).then((result)=>{
                if (result.data.id !== -1 ){
                    saveUser(result.data)
                    loginSuccess()
                    _loginShow()
                    router.reload()
                } else if (result.data.id === -1){
                    globalMessage("error","用户名或密码错误！")
                    _loginShow()
                }
            })
        } else {
            register(values.registeredAccount,values.registeredPassword).then((result)=>{
                if (result.code === 0 ){
                    success()
                    _loginShow()
                }else if (result.code === -2 ){
                    error()
                    _loginShow()
                }
            })
        }
    };

    return (
        <div className={"cover"}>
            <div className={"ux-modal_dialog"}>
                <div className={"close"}>
                    <span onClick={_loginShow} className={"iconfont"}>&#xe614;</span>
                </div>
                <div className={"form_biaodan"}>
                    <Tabs defaultActiveKey="1" centered size={"large"} tabBarGutter={50} style={{marginBottom: 32}}>
                        <Tabs.TabPane tab={<div className={"left_tabs"}>账号密码登录</div>} key="1">
                            <Form
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="account"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入账号',
                                        },
                                        {
                                            min: 6,
                                            message: '请输入长度为6~10位数的账号！'
                                        },
                                        {
                                            max: 10,
                                            message: '请输入长度为6~10位数的账号！'
                                        }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon username_size"/>}
                                           placeholder="请输入账号"/>
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码',
                                        },
                                        {
                                            min: 6,
                                            message: '请输入长度为6~18位数的密码！'
                                        },
                                        {
                                            max: 18,
                                            message: '请输入长度为6~18位数的密码！'
                                        }
                                    ]}
                                >
                                    <Input
                                        prefix={<LockOutlined className="site-form-item-icon password_size"/>}
                                        type="password"
                                        placeholder="请输入密码"
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit"
                                            className="login-form-button button_size">
                                        登录
                                    </Button>
                                </Form.Item>
                                <Form.Item valuePropName="checked" noStyle>
                                    <Checkbox>十天内免登录</Checkbox>
                                    <a className="login-form-forgot" href="">
                                        &nbsp;忘记密码？
                                    </a>
                                </Form.Item>

                            </Form>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab={<div className={"left_tabs"}>注册新的账号</div>} key="2">
                            <Form
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="registeredAccount"

                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入账号',
                                        },
                                        {
                                            min: 6,
                                            message: '请输入长度为6~10位数的账号！'
                                        },
                                        {
                                            max: 10,
                                            message: '请输入长度为6~10位数的账号！'
                                        }
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon username_size"/>}
                                           placeholder="请输入账号"/>
                                </Form.Item>
                                <Form.Item
                                    name="registeredPassword"
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码',
                                        },
                                        {
                                            min: 6,
                                            message: '请输入长度为6~18位数的密码！'
                                        },
                                        {
                                            max: 18,
                                            message: '请输入长度为6~18位数的密码！'
                                        }
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder="请输入密码" className={"register-password"}/>
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: '请输入密码',
                                        },
                                        {
                                            min: 6,
                                            message: '请输入长度为6~18位数的密码！'
                                        },
                                        {
                                            max: 18,
                                            message: '请输入长度为6~18位数的密码！'
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('registeredPassword') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error('您两次输入的密码不一致！'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder="请再次输入密码" className={"register-password"}/>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit"
                                            className="login-form-button button_size">
                                        注册账号
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Tabs.TabPane>

                    </Tabs>


                </div>
            </div>

        </div>
    )
}

