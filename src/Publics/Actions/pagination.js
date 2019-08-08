import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";

export const getPagination = (page) => {
    return {
        type : "GET_PAGINATION",
        payload : Axios.get(urlApi + `/book/test/pagination?page=${page}`)
    }
}