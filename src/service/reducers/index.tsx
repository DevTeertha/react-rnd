import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducers';


const rootReducer = combineReducers({
    productsReducer,
    cartReducer
})

export default rootReducer;