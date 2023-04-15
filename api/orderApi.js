import ajax from "../tools/ajax";

export const getSeriesCourses =(id) => ajax("/order/series?id="+id)
export const getOrderCourses =(id) => ajax("/order/course?id="+id)
