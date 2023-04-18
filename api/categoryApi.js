import ajax from "../tools/ajax";

export const getCategoryNav =(id) => ajax("/categorys_detail_nav/" + id)

export const getCategoryAd =(id) => ajax("/categorys_detail_ad/" + id)



export const getOpenCourseAll =(id) => ajax("/open_course_all/" + id)

export const getOpenCoursePart =(id) => ajax("/open_course_part/" + id)



