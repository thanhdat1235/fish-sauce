import axios from "axios";
import { FIND_BLOG_BY_CAT, FIND_BY_SLUG, GET_ALL_CAT, GET_ALL_PRODUCT } from "../urlApi";
import axiosService from "../../../config/axios/axios.config";

const blogService = {
    getAllCat: async () => {
        return axiosService()({
            url: GET_ALL_CAT,
            method: "GET",
        })
    },

    findBlogByCat: async (catID: string | string[]) => {
        return axiosService()({
            url: `${FIND_BLOG_BY_CAT}${catID}`,
            method: "GET"
        })
    }
}

export default blogService;