import ajax from "../tools/ajax";

export const getCartApi =(userid) => ajax("/my_cart/" + userid)

export const removeMyCartCartApi =(course_id,student_id) => ajax("/remove_cart",{course_id,student_id})

