import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";

export const getAllBorrow= () => {
    return {
        type : "GET_ALL_BORROW",
        payload : Axios.get(urlApi + '/borrow/allBorrow')
    }
}

export const addLoan = (data) => {
    return {
        type : "ADD_LOAN",
        payload : Axios.post(urlApi +'/borrow', data)
    }
}