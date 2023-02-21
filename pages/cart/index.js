import Navibar from "../../components/naviBar";
import Coverlogin from "../../components/coverlogin";
import Fixedfield from "../../components/fixedfield";
import React, {useState} from "react";
import Wangyiyunfooter from "../../components/wangyiyunfooter";
import {Checkbox} from "antd";

require("./index.less")
export default function ProviderSearch() {
    const [showCoverLogin, setshowCoverLogin] = useState(false)
    const _loginShow = () =>{
        setshowCoverLogin(!showCoverLogin)

    }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <>
            <Navibar _loginShow={_loginShow}/>
            {
                showCoverLogin ? <Coverlogin _loginShow={_loginShow}/> : ''
            }
            <Fixedfield/>
            <div className={"cart-bx bx"}>
                <div className={"my-cart"}>
                    <span>
                        我的购物车

                    </span>
                    <span>
                        共4门课程
                    </span>

                </div>
                <div className={"lookup"}>
                    <span className={"lookup-check-all"}>
                        <Checkbox onChange={onChange}><span>全选</span></Checkbox>
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
                <div className={"organization-check-all"}>
                    <span className={"organization"}>
                        <Checkbox onChange={onChange}><span>机构</span></Checkbox>
                    </span>
                    <span className={"organization-name"}>
                        <a href="#">撩课-王顺子</a>
                    </span>

                </div>
                <div className={"course-order"}>
                    <div className={"course-order-item"}>
                        <div className={"course-order-item-item"}>
                            <div className={"check-all"}>
                                <Checkbox onChange={onChange}></Checkbox>
                            </div>
                            <div className={"course-order-item-img"}>
                                <a href="#">
                                    <img src="/assets/images/sz.png" alt=""/>

                                </a>


                            </div>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-GUI编程-PyQt5
                                </a>
                            </div>
                            <div className={"valid-time"}>
                                永久有效
                            </div>
                            <div className={"course-price"}>
                                299.00

                            </div>
                            <div className={"delete-icon"}>
                                <span className={"iconfont"}>&#xe633;</span>
                            </div>
                        </div>
                        <div className={"course-order-item-item"}>
                            <div className={"check-all"}>
                                <Checkbox onChange={onChange}></Checkbox>
                            </div>
                            <div className={"course-order-item-img"}>
                                <a href="#">
                                    <img src="/assets/images/sz.png" alt=""/>

                                </a>


                            </div>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-GUI编程-PyQt5
                                </a>
                            </div>
                            <div className={"valid-time"}>
                                永久有效
                            </div>
                            <div className={"course-price"}>
                                299.00

                            </div>
                            <div className={"delete-icon"}>
                                <span className={"iconfont"}>&#xe633;</span>
                            </div>
                        </div>
                        <div className={"course-order-item-item"}>
                            <div className={"check-all"}>
                                <Checkbox onChange={onChange}></Checkbox>
                            </div>
                            <div className={"course-order-item-img"}>
                                <a href="#">
                                    <img src="/assets/images/sz.png" alt=""/>

                                </a>


                            </div>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-GUI编程-PyQt5
                                </a>
                            </div>
                            <div className={"valid-time"}>
                                永久有效
                            </div>
                            <div className={"course-price"}>
                                299.00

                            </div>
                            <div className={"delete-icon"}>
                                <span className={"iconfont"}>&#xe633;</span>
                            </div>
                        </div>
                        <div className={"course-order-item-item"}>
                            <div className={"check-all"}>
                                <Checkbox onChange={onChange}></Checkbox>
                            </div>
                            <div className={"course-order-item-img"}>
                                <a href="#">
                                    <img src="/assets/images/sz.png" alt=""/>

                                </a>


                            </div>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-GUI编程-PyQt5
                                </a>
                            </div>
                            <div className={"valid-time"}>
                                永久有效
                            </div>
                            <div className={"course-price"}>
                                299.00

                            </div>
                            <div className={"delete-icon"}>
                                <span className={"iconfont"}>&#xe633;</span>
                            </div>
                        </div>
                        <div className={"course-order-item-item"}>
                            <div className={"check-all"}>
                                <Checkbox onChange={onChange}></Checkbox>
                            </div>
                            <div className={"course-order-item-img"}>
                                <a href="#">
                                    <img src="/assets/images/sz.png" alt=""/>

                                </a>


                            </div>
                            <div className={"course-title"}>
                                <a href="#">
                                    撩课-Python-GUI编程-PyQt5
                                </a>
                            </div>
                            <div className={"valid-time"}>
                                永久有效
                            </div>
                            <div className={"course-price"}>
                                299.00

                            </div>
                            <div className={"delete-icon"}>
                                <span className={"iconfont"}>&#xe633;</span>
                            </div>
                        </div>

                    </div>
                    <div className={"total"}>
                        <div className={"total-position"}>
                            <span>该机构小计：¥ 0.00</span>
                        </div>

                    </div>

                </div>
                <div className={"settle-accounts"}>
                    <div className={"check-all2"}>
                        <Checkbox onChange={onChange}><span>全选</span></Checkbox>
                    </div>
                    <div className={"about-price"}>
                        <div className={"about-price-box"}>
                            <span>
                                合计：
                            </span>
                            <span>
                                ¥ 0.00
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

            </div>
            <Wangyiyunfooter/>
        </>
    )
}

