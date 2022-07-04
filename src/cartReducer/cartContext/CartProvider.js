import { useReducer } from "react";
import { addToCardAction, clearCartAction, decrementProductAction, removeFromCartAction } from "../actionCreators";
import cartReducer from "../cartReducer";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
   const initialState = {
        cart : []
    }
    const [state , dispatch] = useReducer(cartReducer , initialState);

    const addToCart = (product) =>{
         dispatch(addToCardAction(product))
    }

    const decrementProduct = (product) =>{
        dispatch(decrementProductAction(product))
    }
    const removeFromCart = (productId) =>{
        dispatch(removeFromCartAction(productId));
    }
    const clearCart = () =>{
        dispatch(clearCartAction())
    }
    return (
        <>
            <CartContext.Provider value={{...state , addToCart , decrementProduct , removeFromCart , clearCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}
export default CartProvider;