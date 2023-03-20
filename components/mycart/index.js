import {getCartApi, removeMyCartCartApi} from "../../api/cartApi";

require("./index.less")
import {Checkbox, message} from "antd";
import React, {useEffect, useState} from "react";
import {BaseURL} from "../../config/serverConfig";

export default function Mycart() {
    //先假设用户的id为1，后期删掉
    const userid =1;

    //发送网络请求发送错误时发生错误的提示
    const info = () => {
        message.info({
            content: '发送网络请求时发生错误！',
            style: {
                marginTop: '20vh',
            },
        });
    };

    //删除课程成功是的提示
    const remove = () => {
        message.success({
            content: '课程删除成功',
            style: {
                marginTop: '20vh',
            },
        });
    };


    //默认全选按钮
    const [indeterminate, setIndeterminate] = useState(true);

    //是否全选
    const [CheckboxStatus,setCheckboxStatus] = useState(false)

    //每个按钮的状态机
    const [everyCheckedStatus,setEveryCheckedStatus] = useState([])



    //子按钮
    const onChange = (course_id) => {
        everyCheckedStatus.push(course_id)
        setEveryCheckedStatus(everyCheckedStatus)
        console.log(everyCheckedStatus)

    };





    //购物车列表数据
    const [cartData,setCartData] = useState([])

    //改变全选按钮状态
    const changeAllCheckbox = () => {
        setIndeterminate(!indeterminate)
        setCheckboxStatus(!CheckboxStatus)
    };

    //获取的购物车列表数据作为依赖项[]
    useEffect(()=>{
        getCartApi(userid).then((result)=>{
            if (result){
                setCartData(result.data)
            }else {
                info()
            }
        })
    },[userid])


    //移除购物车网络请求
    const _removeMyCart = (course_id)=>{
        removeMyCartCartApi(course_id,userid).then((result)=>{
            if (result.data.affectedRows !== 0){
                remove()
            }
        })
        setCartData(cartData.filter((item)=>{
            return item.id !==course_id

        }))

    }


    return (
        <>
            <div className={"my-cart"}>
                    <span>
                        我的购物车

                    </span>
                <span>
                        共4门课程
                    </span>

            </div>

            {/*全面选*/}
            <div className={"lookup"}>
                    <span className={"lookup-check-all"}>
                        <Checkbox indeterminate={indeterminate} checked={CheckboxStatus} onChange={changeAllCheckbox}><span>全选</span></Checkbox>
                    </span>
                <span className={"lookup-course-name"}>
                        课程名称
                    </span>
                <span className={"lookup-course-deadline"}>
                        学期或课程有效期
                    </span>
                <span className={"lookup-price"}>
                        单价（元）
                    </span>
            </div>
            {/*全选*/}
            <div className={"organization-check-all"}>
                    <span className={"organization"}>
                        <Checkbox checked={CheckboxStatus} onChange={changeAllCheckbox}><span>机构</span></Checkbox>
                    </span>
                <span className={"organization-name"}>
                        <a href="#">撩课-王顺子</a>
                    </span>

            </div>
            <div className={"course-order"}>
                <div className={"course-order-item"}>
                    {
                        cartData.map((item) => {

                            return (
                                <div key={item.id} className={"course-order-item-item"}>
                                    <div className={"check-all"}>
                                        <Checkbox checked={CheckboxStatus} onChange={()=>{onChange(item.id)}}></Checkbox>
                                    </div>
                                    <div className={"course-order-item-img"}>
                                        <a href="#">
                                            <img src={BaseURL + item.img_url} alt=""/>

                                        </a>


                                    </div>
                                    <div className={"course-title"}>
                                        <a href="#">
                                            {
                                                item.course_title
                                            }
                                        </a>
                                    </div>
                                    <div className={"valid-time"}>
                                        永久有效
                                    </div>
                                    <div className={"course-price"}>
                                        {
                                            item.price === 0 ? "免费" : "￥"+item.price
                                        }

                                    </div>
                                    <div className={"delete-icon"}>

                                        {/*onClick发送网络请求*/}
                                        <span onClick={()=>{
                                            _removeMyCart(item.id)
                                        }} className={"iconfont"}>&#xe633;</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={"total"}>
                    <div className={"total-position"}>
                        <span>该机构小计：¥ 0.00</span>
                    </div>

                </div>

            </div>
            <div className={"settle-accounts"}>
                <div className={"check-all2"}>
                    <Checkbox checked={CheckboxStatus} onChange={changeAllCheckbox}><span>全选</span></Checkbox>
                </div>
                <div className={"about-price"}>
                    <div className={"about-price-box"}>
                            <span>
                                合计：
                            </span>
                            <span>
                                ¥
                                {
                                    cartData.reduce((a,b)=>{
                                        return a+b.price
                                    },0)
                                }

                            </span>
                    </div>
                    <div className={"course-describe"}>
                        (若购买享有优惠，相应金额将在订单结算页面减扣)
                    </div>

                </div>
                <div className={"pay-button"}>
                    <span>去结算</span>
                </div>

            </div>
        </>
    )
}

