import axios from "axios";
import { FIND_BY_SLUG, GET_ALL_PRODUCT } from "../urlApi";
import axiosService from "../../../config/axios/axios.config";

const productService = {
    getAllProducts: async () => {
        return axiosService()({
            url: GET_ALL_PRODUCT,
            method: "GET",
        })
    },

    findBySlug: async (slug: string | string[]) => {
        return axiosService()({
            url: `${FIND_BY_SLUG}${slug}`,
            method: "GET"
        })
    }
}

export default productService;