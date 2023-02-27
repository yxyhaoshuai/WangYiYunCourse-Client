require("./index.less")
import React, {useState} from "react";
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
const { TextArea } = Input;

const Usersettingaddress = () => {
    //下面的状态机要从外界传递过来

    const [name,setname] = useState("严秀钰")
    const [phonenum,setphonenum] = useState(15676611687)



    const nameChange = (evt)=>{
        setname(evt.target.value)
    }

    const phonenumChange = (evt)=>{
        setphonenum(evt.target.value)

    }
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
                // onFinish={}看官方文档
            >
                <Form.Item label="收货人">
                    <Input onChange={nameChange} value={name} style={{width:"296px",height: "34px",marginBottom: "4px"}}/>
                </Form.Item>
                <Form.Item label="手机号码">
                    <Input onChange={phonenumChange} value={phonenum} style={{width:"296px",height: "34px",marginBottom: "4px"}}/>
                </Form.Item>
                <Form.Item label="所在地区">
                    <Select>
                        <Select.Option value="广东">广东</Select.Option>
                    </Select>
                </Form.Item>

                {/*下面的图片hover之后有bug没改。到时候做数据渲染的时候再改，查看antd官方文档*/}
                <Form.Item label="详情地址">
                    <TextArea placeholder={"用一段话介绍你自己，会在你的个人页面显示，最多输入80字"} style={{resize: 'none',height:"86px",width:"406px"}}  rows={4} />
                </Form.Item>
            </Form>
            <div className={"bottom-div"}>
                <Button className={"save-button-save"} type="primary">保存</Button>
                <Button className={"save-button-cancel"}>取消</Button>
            </div>
        </div>
    )
}

export default () => <Usersettingaddress />;


