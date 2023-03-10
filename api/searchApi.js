import ajax from "../tools/ajax";

export const getSeriesCourses = (key) => ajax("/series-courses-search?keyword="+key)

