import ajax from "../tools/ajax";

export const getSeriesCourses =(id) => ajax("/order?id="+id)