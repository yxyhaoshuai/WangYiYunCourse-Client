import ajax from "../tools/ajax";


export const getCourseIntroduction = (id) => ajax("/course/introduction/"+id)