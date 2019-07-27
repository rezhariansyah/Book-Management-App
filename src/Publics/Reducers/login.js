const initialState = {
  userLogin: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false
};

const Login = (state = initialState, action) => {
  switch (action.type) {
    case `LOGIN_USER_PENDING`:
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false
      };
    case `LOGIN_USER_REJECTED`:
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case `LOGIN_USER_FULFILLED`:
      console.log(action.payload.data.result);
      const token = action.payload.data.result.token;
      const id_user = action.payload.data.result.id_user;
      const fullname = action.payload.data.result.fullname;
      const status = action.payload.data.result.status;
      const role = action.payload.data.result.role;
      localStorage.setItem("token", token);
      localStorage.setItem("id_user", id_user);
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("status", status);
      localStorage.setItem("role", role);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userLogin: action.payload.data,
        token: action.payload.data
      };
    default:
      return state;
  }
};

export default Login;
