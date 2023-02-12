import { ADD_TO_CART } from "../constants/cartConstants"

export const addToCart = (itemData: any) =>{
    return {
        type: ADD_TO_CART,
        payload: itemData
    }
}
// export const removeToCart = (data: any) =>{
//     return {
//         data: data,
//         type: "Remove-To-Cart"
//     }
// }