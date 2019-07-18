const initialState = {
  bookList: [],
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Book = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BOOKS_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_BOOKS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_BOOKS_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data
      };
    case "GET_ALL_NOVEL_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_NOVEL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_NOVEL_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data
      };
    default:
      return state;
  }
};

export default Book;
