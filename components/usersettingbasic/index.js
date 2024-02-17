import {BaseURL} from "../../config/serverConfig";

require("./index.less")
import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    Input, message,
    Radio
} from 'antd';
import {getUser, getUserInfoApi, saveUser, setUserInformation} from "../../api/userApi";
import {useRouter} from "next/router";
import axios from "axios";

const {TextArea} = Input;


const Usersettingbasic = () => {

    const router = useRouter()
    //下面的状态机要从外界传递过来
    const [nick_name, setNick_name] = useState("")
    const [sex, setSex] = useState(0)
    const [intro, setIntro] = useState("")
    const [name, setName] = useState("")
    const [qq_number, setQq_number] = useState("")
    const [shipping_address, setShipping_address] = useState("")
    const [mailbox, setMailbox] = useState("")
    const [phone_number, setPhone_number] = useState("")

    const nick_nameChange = (evt) => {
        setNick_name(evt.target.value)
    }
    const introChange = (evt) => {
        setIntro(evt.target.value)
    }
    const nameChange = (evt) => {
        setName(evt.target.value)
    }
    const qq_numberChange = (evt) => {
        setQq_number(evt.target.value)
    }
    const mailboxChange = (evt) => {
        setMailbox(evt.target.value)
    }
    const phone_numberChange = (evt) => {
        setPhone_number(evt.target.value)
    }

    const [userInfo, setUserInfo] = useState({})

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



    useEffect(() => {
        getUser().then(userInfo => {
            if (userInfo.id === undefined) {
                router.replace("/")
            } else {
                setUserInfo(userInfo)
            }
        })
    }, [])

    useEffect(()=>{
        if (userInfo.id !== undefined){
            getUserInfoApi(userInfo.id).then((result)=>{
                setNick_name(result.data[0].nick_name)
                setSex(result.data[0].sex)
                setIntro(result.data[0].intro)
                setName(result.data[0].name)
                setQq_number(result.data[0].qq_number)
                setMailbox(result.data[0].E_mail)
                setPhone_number(result.data[0].phone_number)
            })
        }
    },[userInfo])



    useEffect(() => {
        let upBtn = document.querySelector(".header-wrap>.mask");
        let headerFile = document.querySelector(".header-wrap>.header-file")
        upBtn.onclick = function () {
            headerFile.click()
        }
        headerFile.onchange = function () {
            let files = headerFile.files;
            if (files.length === 0) return;
            let fileNameArr = files[0].name.split(".");
            let fileExtName = fileNameArr[fileNameArr.length - 1];
            if (!["jpg", "jpeg", "png"].includes(fileExtName)) {
                message.warn("请上传jpg | jpeg | png 图片文件!")
                return;
            }
            // image.src = getObjectURL(files[0])
            // 执行更新头像的请求, 并赋值 newImageSrc
            let formData = new FormData()
            formData.append("user_id", userInfo.id)
            formData.append("header", files[0], files[0].name)
            axios.post(`${BaseURL}/update_header`, formData, {
                headers: {"Content-Type": "multipart/form-data"}
            }).then(response => {

                success("当前头像更新成功！")
                setUserInfo(response.data.data)
                saveUser(response.data.data)

                setTimeout(() => {
                    router.reload()
                }, 500)
            }).catch(err => {
                error("修改内容后再保存哦！")
            })

        }


        window.basic.onsubmit = function (evt) {
            evt.preventDefault()
            let nick_name = window.basic.nick_name.value;
            let sex = window.basic.sex.value;
            let intro = window.basic.intro.value;
            let name = window.basic.name.value;
            let E_mail = window.basic.E_mail.value;
            let phone_number = window.basic.phone_number.value;
            let qq_number = window.basic.qq_number.value;
            setUserInformation(nick_name,sex,intro,name,E_mail,phone_number,qq_number,userInfo.id).then(result => {
                if (result.code === 0) {
                    setUserInfo(result.data)
                    saveUser(result.data)
                    success("保存成功！")
                    setTimeout(() => {
                        router.reload()
                    }, 500)
                } else {
                    error("修改信息后才可以保存哦！")
                }
            })


        }

    }, [userInfo])


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
                        id={"basic"}
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
                            id={"nick_name"}

                            label="昵称"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入昵称！',
                                },
                            ]}
                        >
                            <Input name="nick_name" onChange={nick_nameChange} value={nick_name} style={{height: "36px", width: "186px"}}/>
                        </Form.Item>

                        <Form.Item label="头像">
                            <div className="header-wrap">
                                <img className="header-img" src={BaseURL + userInfo.header_url}/>
                                <div className="mask">点击上传头像</div>
                                <input className="header-file" type="file" name="header"/>
                            </div>
                        </Form.Item>

                        <Form.Item id={"sex"} label="性别">
                                    <Radio.Group value={""+sex} name="sex" onChange={(e)=>{setSex(+e.target.value)}}>
                                        <Radio value="1"> 男 </Radio>
                                        <Radio value="2"> 女 </Radio>
                                        <Radio value="0"> 保密 </Radio>
                                    </Radio.Group>
                        </Form.Item>
                        <Form.Item id={"intro"} label="个人介绍">
                            <TextArea onChange={introChange} value={intro} name="intro" placeholder={"用一段话介绍你自己，会在你的个人页面显示，最多输入80字"}
                                      style={{resize: 'none', height: "86px", width: "406px"}} rows={4}/>
                        </Form.Item>
                        <div className={"basic-information-text"}>
                            联系信息
                        </div>

                        <Form.Item id={"name"} style={{marginBottom: "0"}} label="真实姓名">
                            <Input name="name" onChange={nameChange} value={name}
                                   style={{width: "296px", height: "34px", marginBottom: "4px"}}/>
                        </Form.Item>
                        <div style={{
                            color: "#cccccc",
                            fontSize: "12px",
                            margin: "0 0 20px 96px"
                        }}>用于高等教育课程证书登记与发放，不会以任何形式向第三方透露
                        </div>

                        <Form.Item
                            label="常用邮箱"
                            id={"E_mail"}
                            style={{marginBottom: "0"}}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}

                        >
                            {/*后期在下面的代码渲染上qq邮箱*/}
                            <Input name="E_mail" onChange={mailboxChange} value={mailbox} style={{height: "36px", width: "186px"}}/>
                        </Form.Item>
                        <div
                            style={{fontSize: "12px", color: "#aaa", margin: "2px 0 20px 96px"}}>用于接收来自平台和课程的邮件通知，非常重要
                        </div>
                        <Form.Item id={"phone_number"} style={{marginBottom: "0"}} label="手机号码">
                            <Input name="phone_number" onChange={phone_numberChange} value={phone_number}
                                   style={{width: "296px", height: "34px", marginBottom: "4px"}}/>
                        </Form.Item>
                        <div style={{
                            color: "#cccccc",
                            fontSize: "12px",
                            margin: "0 0 20px 96px"
                        }}>用于优质课程的学习提醒等服务，手机号不会对外公开，请放心
                        </div>
                        <Form.Item id={"qq_number"} style={{marginBottom: "0"}} label="QQ号码">
                            <Input name="qq_number" onChange={qq_numberChange} value={qq_number}
                                   style={{width: "296px", height: "34px", marginBottom: "4px"}}/>
                        </Form.Item>
                        <div
                            style={{color: "#cccccc", fontSize: "12px", margin: "0 0 20px 96px"}}>用于课程的高效交流、方便机构及老师答疑解惑
                        </div>
                        <div className={"bottom-div"}>
                            <Form.Item>
                                <Button className={"save-button"} type="primary" htmlType="submit">
                                    保存
                                </Button>
                            </Form.Item>

                        </div>
                    </Form>
                </div>

            </div>
        </div>
    );
};
export default () => <Usersettingbasic/>;