import {message, Rate} from "antd";

require("./index.less")
import React, {useState} from "react";
import {addComment} from "../../api/courseMainApi";
import {useRouter} from "next/router";
import {getUser} from "../../api/userApi";


export default function Commenttextarea() {

    const router = useRouter()

    //字数
    const [wordNumber, setWordNumber] = useState(200)
    //字内容
    const [inputBoxWord, setInputBoxWord] = useState("")

    //评分分数
    const [scores,setScores] = useState(0)

    //输入字数时重新计算还可以输入的字数
    const setWordNumberFunc = (e) => {
        setInputBoxWord(e)
        setWordNumber(200 - e.length)
    }

    //全局消息
    const tip = (code,tipContent) => {
        if (code === -1){
            message.warn({
                content: tipContent,
                className: 'custom-class',
                style: {
                    marginTop: '20vh',
                },
            });
        } else {
            message.success({
                content: tipContent,
                className: 'custom-class',
                style: {
                    marginTop: '20vh',
                },
            });
        }

    };

    //发送网络请求
    const sendFunc = ()=>{
        if (scores === 0){
            tip(-1,"您还没给该课程打分哦！")
        } else {
            if (router.query.id !== undefined){
                getUser().then((result)=>{
                    addComment(router.query.id,result.id,inputBoxWord,scores).then((result2)=>{
                        if (result2.code === -1){
                            tip(-1,result2.msg)
                        }else {
                            tip(0,result2.msg)
                            setTimeout(()=>{
                                router.reload()
                            },300)

                        }
                    })
                })
            }
        }
    }

    //清空文本框内的字并且初始化字数
    const cleanWord = ()=>{
        setInputBoxWord('')
        setWordNumber(200)
    }

    return (
        <div className={"user-comment-textarea"}>
            <div className={"score"}>
                <span className={"user-comment-textarea-text"}>给该课程打分：</span>
                <Rate onChange={(e)=>{setScores(e)}} className={"rate-size"} allowHalf defaultValue={scores}/>
            </div>
            <textarea
                onChange={(e) => {
                    if (e.target.value.length <= 200) {
                        setWordNumberFunc(e.target.value)
                    }
                }}
                style={{resize: "none"}}
                className={"note-txt"}
                value={inputBoxWord}
                placeholder="请尽可能详尽描述你的学习经历，例如学习成果、课程内容、讲师风格、教学服务等。"
            >
            </textarea>
                <div className={"publish-button"}>
                    <div className={"word-count"}>
                        <span>还可以输入</span>
                        <span>{wordNumber}</span>
                        <span>字</span>
                    </div>
                    <span className={"cancel"}>
                        <a onClick={cleanWord}>清空</a>
                    </span>
                    <span className={"publish"}>
                        <a onClick={(e)=>{
                            sendFunc(e)
                        }}>发表</a>
                    </span>
                </div>

        </div>
    )
}