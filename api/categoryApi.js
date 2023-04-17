import ajax from "../tools/ajax";

export const getCategoryNav =(id) => ajax("/categorys_detail_nav/" + id)
