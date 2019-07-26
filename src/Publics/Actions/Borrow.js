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

// DELETE LOAN WITH UPDATE BOOK
export const returnLoan = (idBorrow) => {
    return {
        type : "RETURN_LOAN",
        payload : Axios.delete(urlApi + `/borrow/${idBorrow}`)
    }
}