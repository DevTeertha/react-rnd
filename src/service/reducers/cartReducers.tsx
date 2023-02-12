import { ADD_TO_CART } from "../constants/cartConstants";

const INITIAL_CART_STATE = {
    cart: [],
}

const cartReducer = (state = INITIAL_CART_STATE, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
          return {
            ...state,
            carts: [...state.cart, action.payload]
          };
        default:
          return state;
      }
}
export default cartReducer;