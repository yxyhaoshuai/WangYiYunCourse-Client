import ajax from "../tools/ajax";

export const getCategoryNav =(id) => ajax("/categorys_detail_nav/" + id)

export const getCategoryAd =(id) => ajax("/categorys_detail_ad/" + id)



export const getOpenCourseAll =(id) => ajax("/open_course_all/" + id)

export const getOpenCoursePart =(id) => ajax("/open_course_part/" + id)


export const getSonAndCourse =(classOneId) => ajax("/categorys_children_categorys/" + classOneId)

export const getSonAndCourse_son =(classOneId) => ajax("/categorys_children_categorys_son/" + classOneId)


export const getClassTwoCourses =(classTwoId,orderBy) => ajax(`/class-two-course?id=${classTwoId}&orderBy=${orderBy}`)





