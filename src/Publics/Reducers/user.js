const initialState = {
  userList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_LOADING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "REGISTER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        userList: [...state.userList, action.payload.data]
      };
    default:
      return state;
  }
};

export default user;
