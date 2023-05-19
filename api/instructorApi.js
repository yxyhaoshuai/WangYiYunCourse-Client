import ajax from "../tools/ajax";


export const getTeacherCourse =(TeacherId) => ajax("/instructor/course/"+TeacherId)

export const getTeacherCourseName =(TeacherId) => ajax("/get-teacher-name?id="+TeacherId)