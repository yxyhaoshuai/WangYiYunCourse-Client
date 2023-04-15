import ajax from "../tools/ajax";

const _USERKEY = "_USERKEY"

//注册接口
export const register = (account, password) => ajax("/register", {account, password}, "post")


//登录接口
export const login = (account, password) => ajax("/login", {account, password}, "post")


//写入用户信息
export const saveUser = (user) => {
    import("storejs").then(({default: store}) => {
        store.set(_USERKEY, user)
    })
}

//获取用户信息
export const getUser = async () => {
    let {default: store} = await import("storejs")
    return store.get(_USERKEY) || {}
}


//判断是否已登录
export const isLogin = async () => {
    let userInfo = await getUser()
    return userInfo.id !== undefined
}

//退出登录
export const removeUser = () => {
    import("storejs").then(({default: store}) => {
        store.remove(_USERKEY)
    })
}


export const updateUserStudyHistory = (user_id, course_id, outline_id,is_finish) => ajax("/api/client/user/update_study_history", {user_id, course_id, outline_id,is_finish}, "post")


export const getOtherData = (student_id) => ajax("/other_people_data", {student_id}, "post")