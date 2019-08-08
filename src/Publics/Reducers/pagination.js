const initialState = {
  pageList: null,
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
  userList: []
};

const Page = (state = initialState, action) => {
  switch (action.type) {
    //PAGINATION
    case "GET_PAGINATION_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_PAGINATION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_PAGINATION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        pageList: action.payload.data.result
      };

    default:
      return state;
  }
};

export default Page;
