import ajax from "../tools/ajax";

export const addUserFavoriteOne = (course_id, student_id) => ajax("/course/introduction/insertfavorite", {course_id,student_id}, "post");
export const addCar = (courses_id, students_id) => ajax("/course/introduction/insertcart", {courses_id, students_id}, "post");


// courseMain页面
export const getProgressBar = (student_id,course_id,) => ajax(`/mystudylater?student_id=${student_id}&course_id=${course_id}`);

//视频播放页
export const getCourseOutline = (courseId,student_id) => ajax("/outline?courseId="+courseId+"&student_id="+student_id);

export const getCourseOutlineTwo = (courseId) => ajax("/outline/two?courseId="+courseId);


export const isHaveBought = (course_id,student_id) => ajax("/is_have_bought",{course_id,student_id},"post");




