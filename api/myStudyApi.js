import ajax from "../tools/ajax";

//获取我的学习
export const getMyCollect = (userId) => ajax("/my_collect/"+userId)

export const getMyStudy = (userId) => ajax("/mystudy/"+userId)


export const topMyCourse = (student_id,course_id) => ajax("/top-my-study-course",{course_id,student_id},"post")
