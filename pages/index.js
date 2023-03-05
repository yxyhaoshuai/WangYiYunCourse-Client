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
import {getCategoryList, getLunBoList} from "../api/homeApi";
import Head from "next/head";

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            showElem:true,
            showCoverLogin: false,
            showInterest:false
        }
        //课程分类列表数据处理
        const { categoryList, lunbolist} = this.props;
        this.lunbolist=lunbolist

        this.category = []
        for (let i = 1; i <= 8; i++) {
            let categoryid =categoryList.filter(item=> item.id === i)
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
    _InterestShow = () =>{
        if (this.state.showInterest===false){
            this.setState({
                showInterest : true
            })
        }else {
            this.setState({
                showInterest : false
            })
        }

    }


    render(){
        const {showElem ,showCoverLogin,showInterest} =this.state;
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
                    <Categorylistings category={this.category}/>
                    <Lunbo lunbolist={this.lunbolist}/>
                </div>
                <PublicityItem/>
                <div className={"content-big bx"}>
                    <div className={"left"}>
                        <Coursecardlayoutmore titel={"直播公开课"} className={"card"}>
                            <div className={"display"}>
                                <Livestreamingcard/>
                                <Livestreamingcard/>
                                <Livestreamingcard/>
                            </div>
                        </Coursecardlayoutmore>
                    </div>
                    <div className={"right"}>
                        <Coursecardlayoutmore titel={"课堂直播"}>
                            <Teacheritem/>
                            <Teacheritem/>
                            <Teacheritem/>
                        </Coursecardlayoutmore>

                    </div>
                </div>
                <div className={"course-module_content bx"}>
                    <Coursecardlayout titel={"精品课"}>
                        <div className={"display"}>
                            <Coursecard/>
                            <Coursecard/>
                            <Coursecard/>
                            <Coursecard/>
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"course-module_content bx"}>
                    <Coursecardlayoutmore titel={"微专业"}>
                        <div className={"display special"}>
                            <Microprofessionlcard/>
                            <Microprofessionlcard/>
                            <Microprofessionlcard/>
                            <Microprofessionlcard/>
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
                            <Seriesofcourses/>
                            <Seriesofcourses/>
                            <Seriesofcourses/>
                            <Seriesofcourses/>
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"excellent-course-module_content bx"}>
                    <Coursecardlayout titel={"精选好课"}>
                        <div className={"display"}>
                            <Excellentcoursecard/>
                            <Excellentcoursecard/>
                            <Excellentcoursecard/>
                            <Excellentcoursecard/>
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"new-course-module_content bx"}>
                    <Coursecardlayout titel={"新课推荐"}>
                        <div className={"display"}>
                            <Newcoursecard/>
                            <Newcoursecard/>
                            <Newcoursecard/>
                            <Newcoursecard/>
                        </div>
                    </Coursecardlayout>
                </div>
                <div className={"Gratis-course-module_content bx"}>
                    <Coursecardlayout titel={"免费好课"}>
                        <div className={"display"}>
                            <Gratiscoursecard/>
                            <Gratiscoursecard/>
                            <Gratiscoursecard/>
                            <Gratiscoursecard/>
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
                    showInterest ? <Interest _InterestShow={this._InterestShow}/> : ''
                }
            </>
        )
    }
}
export const getServerSideProps = async (context) =>
{
    // 此处发送网络请求
    // let focusCourseData = await getFocusCourses()
    //
    // let hotCourseData = await getHotCourses()
    //
    // let starTeacherData = await getStarTeachers()
    //
    // let lastArticleData = await getLastArticle()


    //如果同时发送好多个网络请求就在[]里填写网络请求方法，然后在下面的props中导出到页面的props
    let result = await Promise.all([getCategoryList(),getLunBoList()])
    const [categoryList,lunbolist] = result.map(item=>item.data)
    return {
        props: {
            categoryList,
            lunbolist
        }
    }
}



export default Home;


