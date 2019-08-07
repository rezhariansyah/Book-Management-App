import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";

export const getAllBorrow = () => {
  let data = {
    id_user: localStorage.id_user,
    role: localStorage.role
  };
  return {
    type: "GET_ALL_BORROW",
    payload: Axios.post(urlApi + "/borrow/allBorrow", data, {
      headers: {
        authorization: "welcometoapp",
        "x-access-token": localStorage.token,
        "x-control-user": localStorage.id_user
      }
    })
  };
};

export const addLoan = data => {
  return {
    type: "ADD_LOAN",
    payload: Axios.post(urlApi + "/borrow", data)
  };
};

// DELETE LOAN WITH UPDATE BOOK
export const returnLoan = idBorrow => {
  return {
    type: "RETURN_LOAN",
    payload: Axios.delete(urlApi + `/borrow/${idBorrow}`)
  };
};
