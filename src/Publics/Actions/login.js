import Axios from "axios";
import urlApi from "../../Support/API/urlAPI";


export const userLogin = data => {
  return {
    type: "LOGIN_USER",
    payload: Axios
      .post(urlApi + `/user/login`, data, {
        headers: {
          authorization: "ulalalalala",
          "x-token": "token",
          "x-user": "1"
        }
      })
      // .then(res => {
      //   const token = res.data.token;
      //   const id_user = res.data.id_user;
      //   const fullname = res.data.fullname;
      //   const status = res.data.status;
      //   const role = res.data.role;
      //   localStorage.setItem("token", token);
      //   localStorage.setItem("id_user", id_user);
      //   localStorage.setItem("fullname", fullname);
      //   localStorage.setItem("status", status);
      //   localStorage.setItem("role", role);
      // })
  };
};
