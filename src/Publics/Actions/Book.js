import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";

export const getAllBooks = () => {
    return {
        type : "GET_ALL_BOOKS",
        payload : Axios.get(urlApi + '/book/allBooks')
    }
}

export const getAllNovel = () => {
    return {
        type : "GET_ALL_NOVEL",
        payload : Axios.get(urlApi + '/book/novel')
    }
}