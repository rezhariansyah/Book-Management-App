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
      console.log('batas',action.payload.data);
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
