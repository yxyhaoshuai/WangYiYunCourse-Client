import ajax from "../tools/ajax";

export const getCategoryList1 = () => ajax("/class_list1")
export const getCategoryList2 = () => ajax("/class_list2")
export const getLunBoList = () => ajax("/ad")
export const getHomeCourseList = () => ajax("/home_course_list")
export const getHomeSeriesCourseList = () => ajax("/home_series_course")

export const getMyInterestArray = (id) => ajax("/interest_recommend/"+id)

export const setMyInterestArray = (interest_array,student_id) => ajax("/set_interest",{interest_array,student_id},"post")

export const getLeftMiniAd = () => ajax("/home_mini_ad")





