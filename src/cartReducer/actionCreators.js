import { ADD_TO_CART, DECREMENT_PRODUCT  , REMOVE_FROM_CART , CLEAR_CART} from "./actionTypes";

export function addToCardAction(product){
    return{
        type : ADD_TO_CART,
        payload : product
    }
}
export function decrementProductAction(product){
    return{
        type : DECREMENT_PRODUCT,
        payload : product
    }
}
export function removeFromCartAction(productId){
    return{
        type : REMOVE_FROM_CART,
        payload : productId
    }
}
export function clearCartAction(){
    return{
        type : CLEAR_CART,
    }
}