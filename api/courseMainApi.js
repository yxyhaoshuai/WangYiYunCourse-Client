import ajax from "../tools/ajax";


export const getStudentSchedule = (student_id,course_id) => ajax("/get-student-schedule?student_id="+student_id+"&course_id="+course_id)


export const addUserStudyIndex = (students_id,courses_id,student_study_index) => ajax("/set-student-schedule", {students_id,courses_id,student_study_index}, "post")


export const getNetworkSchoolInfo = (course_id) => ajax("/network-school-info/"+course_id)
