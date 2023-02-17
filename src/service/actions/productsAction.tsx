import axios from "axios";
import { 
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS
} from "../constants/productsConstant";

export const getAllProducts = () => async(dispatch:any) => {
    dispatch({ type: GET_PRODUCTS_REQUEST })
    
    try {
        const res = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: res.data })
    }
    catch (error:any) {
        dispatch({ type: GET_PRODUCTS_FAILED, payload: error.message })        
    }
}