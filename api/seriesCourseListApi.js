import ajax from "../tools/ajax";
export const getSeriesCourseCardList = (page_num=1,page_size=9) => ajax("/all-series-ourse?page_num="+page_num+"&"+"page_size="+page_size)

export const getSeriesCourseTotal = () => ajax("/all-series-ourse-total")