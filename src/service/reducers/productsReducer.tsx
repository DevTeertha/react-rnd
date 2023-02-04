import {
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../constants/productsConstant";

const initialState = {
  isLoading: false,
  products: [],
  error: null,
};

const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        isLoading: false,
        products: action.payload,
        error: null,
      };
    case GET_PRODUCTS_FAILED:
      return {
        isLoading: false,
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
