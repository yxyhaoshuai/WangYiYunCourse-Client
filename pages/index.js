import Lunbo from "../components/lunbo";
import Navibar from "../components/naviBar";
import Categorylistings from "../components/categorylistings";
import PublicityItem from "../components/publicityitem";
import Livestreamingcard from "../components/card/livestreamingcard";
import Coursecardlayoutmore from "../components/layout/coursecardlayoutmore";
import Teacheritem from "../components/teacheritem";
import Coursecardlayout from "../components/layout/coursecardlayout";
import Coursecard from "../components/card/coursecard";
import Microprofessionlcard from "../components/card/microprofessionalcard";
import Activitytabslayout from "../components/layout/activitytabslayout";
import Selectionsort from "../components/selectionsort";
import Seriesofcourses from "../components/card/seriesofcourses";
import Excellentcoursecard from "../components/card/excellentcoursecard";
import Newcoursecard from "../components/card/newcoursecard";
import Gratiscoursecard from "../components/card/gratiscoursecard";
import Footerad from "../components/footerad";
import Wangyiyunfooter from "../components/wangyiyunfooter";

require("./index.less")

import React, {Component} from "react";
import Fixedfield from "../components/fixedfield";
import Leftminiad from "../components/leftminiad";
import Coverlogin from "../components/coverlogin";
import Interest from "../components/interest";
import {
    getCategoryList1, getCategoryList2,
    getHomeCourseList,
    getHomeSeriesCourseList,
    getLunBoList
} from "../api/homeApi";
import Head from "next/head";
import {getUser} from "../api/userApi";
import {message} from "antd";
import {globalMessage} from "../tools/globalMessage";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            showElem:true,
            showCoverLogin:false,
            showInterest:false,
            myInterestArray:[],
            searchBoxValue : ""

        }
        //课程分类列表数据处理
        const {categoryList1, categoryList2, lunbolist, homeCourseList, homeSeriesCourseList} = this.props;
        //初始化课程分类
        this.categoryList1=categoryList1;
        this.categoryList2=categoryList2;
        //初始化轮播图列表
        this.lunbolist=lunbolist;
        //初始化首页课程列表
        this.homeCourseList=homeCourseList;
        //初始化系列课程
        this.homeSeriesCourseList = homeSeriesCourseList;
        this.category = []
        for (let i = 1; i <= 8; i++) {
            let categoryid =categoryList1.filter(item=> item.id1 === i)
            this.category.push(categoryid)
        }
    }
    //在componentDidMount，进行scroll事件的注册，绑定一个函数，让这个函数进行监听处理
    componentDidMount() {
        window.addEventListener('scroll', this.bindHandleScroll);
    }
    //在componentWillUnmount，进行scroll事件的注销
    componentWillUnmount() {
        window.removeEventListener('scroll', this.bindHandleScroll);
    }
    bindHandleScroll = (event) => {
        document.documentElement.scrollTop>0 ? this.setState({
            showElem:true
        }) : this.setState({
            showElem:false
        });
    }
    _loginShow = () =>{
        if (this.state.showCoverLogin===false){
            this.setState({
                showCoverLogin : true
            })
        }else {
            this.setState({
                showCoverLogin : false
            })
        }

    }

    //未登录提示
    warnTip = () => {
        message.warn({
            content: '未登录，请先登录！',
            className: 'custom-class',
            style: {
                marginTop: '20vh',
            },
        });
    };

    _InterestShow = () =>{
        this.setState({
            myInterestArray:[]
        })
        getUser().then((result)=>{
            if (result.id){
                if (this.state.showInterest===false){
                    this.setState({
                        showInterest : true
                    })
                }else {
                    this.setState({
                        showInterest : false
                    })
                }
            }else if (result.id === undefined){
                this.warnTip();
                setTimeout(() => {
                    this._loginShow();
                }, 1000);
            }
        })
    }

    _pushInterestArray = (key) =>{
        if(this.state.myInterestArray.indexOf(key)===-1){
            this.state.myInterestArray.push(key)
            this.forceUpdate()
        }else{
            this.state.myInterestArray.splice(this.state.myInterestArray.indexOf(key), 1)
            //this.forceUpdate()强制刷新
            this.forceUpdate()
        }
    }

    _pushInterestNet = ()=>{
        this.setState({
            showInterest:!this.state.showInterest
        })

    }



    render(){
        const {showElem ,showCoverLogin,showInterest} =this.state;
        const myInterestArray = this.state.myInterestArray;
        return (
            <>
                <Head>
                    <title>网易云课堂-悄悄变强大</title>
                    <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"/>
                    <meta name="keyword" content="办公效率、PPT、Excel、Word、职场发展、个人提升、求职应聘、职场能力、商学院、职业岗位、设计软件、人力资源、平面设计、市场营销、IT&互联网、后端开发、编程语言、 前端开发、人工智能、区块链、数据科学、金融财会、理财、考试、语言留学、英语、留学、小语种、实用口语、职业考试、软考、建考、公考、摄影、健身、K12,云课堂"/>
                    <meta name="description" content="网易云课堂，一个专注于成人终身学习的在线教育平台。立足于实用性的要求, 与优质的教育内容创作者一起，为您提供全面、有效的在线学习内容。"/>
                </Head>
                {/*#####以下的代码在企业的实际开发当中会额外封装容器组件，但是在我这里没必要，要封装也是可以的#####*/}
                {/*#####以下的代码在企业的实际开发当中会额外封装容器组件，但是在我这里没必要，要封装也是可以的#####*/}
                {/*#####以下的代码在企业的实际开发当中会额外封装容器组件，但是在我这里没必要，要封装也是可以的#####*/}
                <Navibar  _loginShow={this._loginShow}/>
                <div className={"content bx"}>
                    <Categorylistings category={this.category} category2={this.categoryList2}/>
                    <Lunbo lunbolist={this.lunbolist}/>
                </div>
                <PublicityItem/>
                <div className={"content-big bx"}>
                    <div className={"left"}>
                        <Coursecardlayoutmore moreLink={"/talk"} titel={"直播公开课"} className={"card"}>
                            <div className={"display"}>
                                {
                                    this.homeCourseList.filter((item => item.specialid === 10)).slice(0, 3).map((item2, index) => {
                                        return <Livestreamingcard key={index} data={item2}/>
                                    })
                                }
                            </div>
                        </Coursecardlayoutmore>
                    </div>
                    <div onClick={()=>{globalMessage("success","直播及相关模块未扩展！")}} className={"right"}>
                        <Coursecardlayoutmore titel={"课堂直播"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===1)).slice(0, 3).map((item2,index)=>{
                                    return <Teacheritem key={index} data={item2}/>
                                })
                            }
                        </Coursecardlayoutmore>

                    </div>
                </div>
                <div className={"course-module_content bx"}>
                    <Coursecardlayout titel={"精品课"}>
                        <div className={"display"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===2)).slice(0, 4).map((item2,index)=>{
                                    return <Coursecard key={index} data={item2}/>
                                })
                            }

                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"course-module_content bx"}>
                    <Coursecardlayoutmore titel={"微专业"}>
                        <div className={"display special"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===4)).slice(0, 4).map((item2,index)=>{
                                    return <Microprofessionlcard key={index} data={item2}/>
                                })
                            }

                        </div>
                    </Coursecardlayoutmore>
                </div>
                <div className={"activitytabslayout bx"}>
                    <Coursecardlayout titel={"限时秒杀"}>
                        <Activitytabslayout/>
                    </Coursecardlayout>
                </div>


                <div onClick={this._InterestShow}>
                    <Selectionsort/>
                </div>

                <div className={"series-of-courses-bx bx"}>
                    <Coursecardlayout className="display-flex" titel={"系列课程"}>
                        <div className={"display-flex"}>
                            {
                                this.homeSeriesCourseList.slice(0, 4).map((item,index)=>{
                                    return <Seriesofcourses key={index} data={item}/>
                                })
                            }
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"excellent-course-module_content bx"}>
                    <Coursecardlayout titel={"精选好课"}>
                        <div className={"display"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===5)).slice(0, 4).map((item2,index)=>{
                                    return <Excellentcoursecard key={index} data={item2}/>
                                })
                            }
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"new-course-module_content bx"}>
                    <Coursecardlayout titel={"新课推荐"}>
                        <div className={"display"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===9)).slice(0, 4).map((item2,index)=>{
                                    return <Newcoursecard key={index} data={item2}/>
                                })
                            }

                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"Gratis-course-module_content bx"}>
                    <Coursecardlayout titel={"免费好课"}>
                        <div className={"display"}>
                            {
                                this.homeCourseList.filter((item=>item.specialid===8)).slice(0, 4).map((item2,index)=>{
                                    return <Gratiscoursecard key={index} data={item2}/>
                                })
                            }

                        </div>
                    </Coursecardlayout>
                </div>
                <Footerad/>
                <Wangyiyunfooter/>
                {
                    showElem ? <Fixedfield/> : ''
                }
                <Leftminiad/>
                {
                    showCoverLogin ? <Coverlogin _loginShow={this._loginShow}/> : ''
                }
                {
                    showInterest ? <Interest _pushInterestNet={this._pushInterestNet} myInterestArray={myInterestArray} _pushInterestArray={this._pushInterestArray} data={this.category} _InterestShow={this._InterestShow}/> : ''
                }
            </>
        )
    }
}
export const getServerSideProps = async (context) =>
{
    //如果同时发送好多个网络请求就在[]里填写网络请求方法，然后在下面的props中导出到页面的props
    let result = await Promise.all([getCategoryList1(),getCategoryList2(),getLunBoList(),getHomeCourseList(),getHomeSeriesCourseList()])
    const [categoryList1,categoryList2,lunbolist,homeCourseList,homeSeriesCourseList] = result.map(item=>item.data)
    return {
        props: {
            categoryList1,
            categoryList2,
            lunbolist,
            homeCourseList,
            homeSeriesCourseList

        }
    }
}



export default Home;


