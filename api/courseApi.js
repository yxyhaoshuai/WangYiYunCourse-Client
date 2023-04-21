import ajax from "../tools/ajax";

export const getCourseOutline = (id) => ajax("/api/client/course/outline/"+id)
export const addUserFavoriteOne = (course_id, student_id) => ajax("/course/introduction/insertfavorite", {course_id,student_id}, "post")
export const addCar = (courses_id, students_id) => ajax("/course/introduction/insertcart", {courses_id, students_id}, "post")


// courseMain页面
export const getProgressBar = (student_id,course_id,) => ajax(`/mystudylater?student_id=${student_id}&course_id=${course_id}`)


