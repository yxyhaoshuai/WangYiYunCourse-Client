import ajax from "../tools/ajax";

export const getNetSchoolInformation =(netSchoolId) => ajax("/provider/"+netSchoolId)

//首页的
export const getNetSchoolCourseListHome =(netSchoolId) => ajax("/provider/course/list/home?id="+netSchoolId)

//课程的
// method传入create_time或者avg_score
export const getNetSchoolCourseListCourse =(netSchoolId,page_num=1,page_size=10,method="avg_score") => ajax(`/provider/course/list?id=${netSchoolId}&page_num=${page_num}&page_size=${page_size}&method=${method}`)

export const getNetSchoolTeacherList =(netSchoolId) => ajax("/provider/course/instructor/" + netSchoolId)
export const getNetSchoolAd =(netSchoolId) => ajax("/provider/course/instructor/lunbo/"+netSchoolId)

export const getCourseListCount =(netSchoolId) => ajax("/provider/course/count/"+netSchoolId)