import ajax from "../tools/ajax";

export const getProviderSearchResult =(keyword) => ajax("/provider-search?keyword="+keyword)