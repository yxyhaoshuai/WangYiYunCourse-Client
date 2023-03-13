import ajax from "../tools/ajax";

export const getSeriesCourses = (key) => ajax("/series-courses-search?keyword="+key)
export const getSearchCourses = (key) => ajax("/courses-search?keyword="+key)
