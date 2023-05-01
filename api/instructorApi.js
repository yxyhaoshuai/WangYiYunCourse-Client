import ajax from "../tools/ajax";


export const getTeacherCourse =(TeacherId) => ajax("/instructor/course/"+TeacherId)