import ajax from "../tools/ajax";


export const getCourseIntroduction = (id) => ajax("/course/introduction/"+id)

export const getCourseDetailCrumbs = (id) => ajax("/course/introduction/crumbs/"+id)


export const getCourseOutline = (id) => ajax("/course/introduction/course_item/"+id)