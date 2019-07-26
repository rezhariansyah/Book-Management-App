const initialState = {
  loanList: null,
  isLoading: false,
  isFulfilled: false,
  isRejected: false
};

const Loan = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_BORROW_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "GET_ALL_BORROW_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_BORROW_FULFILLED":
      console.log(action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        loanList: action.payload.data.result
      };
    // ADD LOAN
    case "ADD_LOAN_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "ADD_LOAN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "ADD_LOAN_FULFILLED":
      console.log(action.payload.data.result);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        loanList: [...state.loanList, action.payload.data.result]
      };
    // RETURN LOAN
    case "RETURN_LOAN_PENDING":
      return {
        ...state,
        isLoading: true,
        isFulfilled: false,
        isRejected: false
      };
    case "RETURN_LOAN_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "RETURN_LOAN_FULFILLED":
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        loanList: action.payload.data.result
      };
    default:
      return state;
  }
};

export default Loan;
