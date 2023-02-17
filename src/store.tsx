import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./service/reducers/index";


const store = createStore(rootReducer, applyMiddleware(thunk))
console.log(store.getState())
export default store;

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import productsReducer from "./service/reducers/productsReducer";

// const store = createStore(productsReducer, applyMiddleware(thunk))

// export default store;
