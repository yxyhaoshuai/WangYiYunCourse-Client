import {login, updatePassword} from "../../api/userApi";
import React from "react";
import {Button, Form, Input, message} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";

require("./index.less")

const Usersettingaddress = () => {

    const success = (content) => {
        message.success({
            content: content,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    const error = (content) => {
        message.error({
            content: content,
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //修改账号请求
    const onFinish = (values) => {
        updatePassword(values.account, values.oldPassword, values.newPassword).then((result)=>{
            if (result.data.code === 0){
                success("修改密码成功！")
            }else if (result.data.code === -1){
                error("账号或密码错误！")
            }
        })
    };
    return (
        <div className={"tabs-content-two"}>
            <Form
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
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
                    label="账号"
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon username_size"/>}
                        placeholder="请输入账号"
                        style={{width: "296px", height: "34px", marginBottom: "4px"}}
                    />
                </Form.Item>
                <Form.Item
                    name="oldPassword"
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
                    label="旧密码"
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon password_size"/>}
                        type="password"
                        placeholder="请输入旧密码"
                        style={{width: "296px", height: "34px", marginBottom: "4px"}}
                    />
                </Form.Item>
                <Form.Item
                    name="newPassword"
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
                    label="新密码"
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon password_size"/>}
                        type="password"
                        placeholder="请输入新密码"
                        style={{width: "296px", height: "34px", marginBottom: "4px"}}
                    />
                </Form.Item>
                <div className={"bottom-div"}>
                    <Form.Item>
                        <Button htmlType="submit" className={"save-button-save"} type="primary">保存</Button>
                    </Form.Item>
                </div>
            </Form>

        </div>
    )
}

export default () => <Usersettingaddress/>;


