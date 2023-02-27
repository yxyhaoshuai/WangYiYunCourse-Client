require("./index.less")
import React, {useState} from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Form,
    Input,
    Radio,
    Upload
} from 'antd';
const { TextArea } = Input;
const Usersettingbasic = () => {
    //下面的状态机要从外界传递过来
    const [mailbox,setmailbox] = useState("173198977@qq.com")
    const [name,setname] = useState("严秀钰")
    const [phoneNumber,setphoneNumber] =useState(15676611687)
    const [QqNumber,setQqNumber] = useState(173198977)

    const nameChange = (evt)=>{
        setname(evt.target.value)
    }

    const mailChange = (evt)=>{
        setmailbox(evt.target.value)
    }
    const phoneNumberChange = (evt)=>{
        setphoneNumber(evt.target.value)
    }
    const QqNumberChange = (evt)=>{
        setQqNumber(evt.target.value)
    }


    return (
        <div className={"tabs-content-one"}>
            <div className={"complete-information"}>
                完善个人资料是让别人认识你的第一步
            </div>
            <div className={"submit-form"}>
                <div className={"top-div"}>
            <div className={"basic-information-text"}>
                基本信息
            </div>
            <Form
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                // onFinish={}看官方文档
            >
                <Form.Item
                    label="昵称"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input style={{height:"36px",width:"186px"}} />
                </Form.Item>

                {/*下面的图片hover之后有bug没改。到时候做数据渲染的时候再改，查看antd官方文档*/}
                <Form.Item label="头像" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                更换头像
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item label="性别">
                    <Radio.Group>
                        <Radio value="male"> 男 </Radio>
                        <Radio value="female"> 女 </Radio>
                        <Radio value="secrecy"> 保密 </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="个人介绍">
                    <TextArea placeholder={"用一段话介绍你自己，会在你的个人页面显示，最多输入80字"} style={{resize: 'none',height:"86px",width:"406px"}}  rows={4} />
                </Form.Item>
            </Form>
            <div className={"basic-information-text"}>
                联系信息
            </div>
            <Form
                labelCol={{
                    span: 2,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                // onFinish={}看官方文档
            >
                <Form.Item style={{marginBottom: "0"}} label="真实姓名">
                    <Input onChange={nameChange} value={name} style={{width:"296px",height: "34px",marginBottom: "4px"}}/>
                </Form.Item>
                <div style={{color: "#cccccc",fontSize: "12px",margin:"0 0 20px 96px"}}>用于高等教育课程证书登记与发放，不会以任何形式向第三方透露</div>

                    <Form.Item
                        label="常用邮箱"
                        name="username"
                        style={{marginBottom: "0"}}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}

                    >
                        {/*后期在下面的代码渲染上qq邮箱*/}
                        <Input onChange={mailChange} value={mailbox} style={{height:"36px",width:"186px"}} />
                        <Button style={{marginLeft: "20px"}} type="primary">保存</Button>
                        <Button type="link">取消</Button>
                    </Form.Item>
                <div style={{fontSize: "12px",color:"#aaa",margin:"2px 0 20px 96px"}}>用于接收来自平台和课程的邮件通知，非常重要</div>
                <Form.Item style={{marginBottom: "0"}} label="手机号码">
                    <Input onChange={phoneNumberChange} value={phoneNumber} style={{width:"296px",height: "34px",marginBottom: "4px"}}/>
                </Form.Item>
                <div  style={{color: "#cccccc",fontSize: "12px",margin:"0 0 20px 96px"}}>用于优质课程的学习提醒等服务，手机号不会对外公开，请放心</div>
                <Form.Item style={{marginBottom: "0"}} label="QQ号码">
                    <Input onChange={QqNumberChange} value={QqNumber} style={{width:"296px",height: "34px",marginBottom: "4px"}}/>
                </Form.Item>
                <div style={{color: "#cccccc",fontSize: "12px",margin:"0 0 20px 96px"}}>用于课程的高效交流、方便机构及老师答疑解惑</div>
            </Form>
                </div>
                <div className={"bottom-div"}>
                    <Button className={"save-button"} type="primary">保存</Button>
                </div>
            </div>
        </div>
    );
};
export default () => <Usersettingbasic />;