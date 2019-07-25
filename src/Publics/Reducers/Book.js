const initialState = {
  bookList: null,
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
        bookList: action.payload.data.result
      };
    // GET NOVEL
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
        bookList: action.payload.data.result
      };
    // GET COMIC
    case "GET_ALL_COMIC_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_COMIC_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_COMIC_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data.result
      };
    // GET SCIENCE
    case "GET_ALL_SCIENCE_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_SCIENCE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_SCIENCE_FULFILLED":
      console.log(action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data.result
      };
    // GET BIOGRAPHY
    case "GET_ALL_BIOGRAPHY_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_BIOGRAPHY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_BIOGRAPHY_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data.result
      };
    // UPDATE BOOK
    case "UPDATE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "UPDATE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "UPDATE_BOOK_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data.result
      };
    // ADD BOOK
    case "ADD_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_BOOK_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: [...state.bookList, action.payload.data.result]
      };
    //DELETE BOOK
    case "DELETE_BOOK_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "DELETE_BOOK_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "DELETE_BOOK_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        bookList: action.payload.data.result
      };
    default:
      return state;
  }
};

export default Book;
