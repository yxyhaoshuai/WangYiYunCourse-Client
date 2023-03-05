import ajax from "../tools/ajax";

export const getCategoryList = () => ajax("/class_list")
export const getLunBoList = () => ajax("/ad")

