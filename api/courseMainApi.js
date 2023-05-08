import ajax from "../tools/ajax";


export const getStudentSchedule = (student_id,course_id) => ajax("/get-student-schedule?student_id="+student_id+"&course_id="+course_id)


export const addUserStudyIndex = (students_id,courses_id,student_study_index) => ajax("/set-student-schedule", {students_id,courses_id,student_study_index}, "post")


export const getNetworkSchoolInfo = (course_id) => ajax("/network-school-info/"+course_id)


export const getCourseMainSeries = (course_id) => ajax("/get-series-course-info/"+course_id)


export const addComment = (course_id,student_id,content,score) => ajax("/course/introduction/insertcomment", {course_id,student_id,content,score}, "post")

export const getCourseMainCommentList = (course_id,page_num=1,page_size=20) => ajax(`/course/commentList?id=${course_id}&page_num=${page_num}&page_size=${page_size}`)


export const getCourseMainCommentListCount = (course_id) => ajax("/course/commentListCount/"+course_id)

export const getCourseMainCommentListLimit5 = (course_id) => ajax("/course/commentListLimit5/"+course_id)

export const getUserIs_comment = (course_id,student_id) => ajax(`/course/is_comment?cid=${course_id}&uid=${student_id}`)


