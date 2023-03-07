import ajax from "../tools/ajax";

export const getCategoryList1 = () => ajax("/class_list1")
export const getCategoryList2 = () => ajax("/class_list2")
export const getLunBoList = () => ajax("/ad")
export const getHomeCourseList = () => ajax("/home_course_list")
export const getHomeSeriesCourseList = () => ajax("/home_series_course")

