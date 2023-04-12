import ajax from "../tools/ajax";
export const getSeriesCourse = (id) => ajax("/seriesCourse?id="+id)
export const getSeriesCourseList = (id) => ajax("/seriesCourse/course-list?id="+id)
export const addUserFavorite = (courseIdArray, student_id) => ajax("/course/introduction/insertfavorites", {courseIdArray,student_id}, "post")