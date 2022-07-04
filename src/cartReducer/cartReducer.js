import { ADD_TO_CART, CLEAR_CART, DECREMENT_PRODUCT, REMOVE_FROM_CART } from "./actionTypes";

const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const isProduct = state.cart.find(product => product.id === action.payload.id)
            return {
                ...state,
                cart: isProduct ? state.cart.map(product => product.id === action.payload.id ? { ...product, qty: product.qty + 1 } : product) : [...state.cart, { ...action.payload, qty: 1 }]
            }
        case DECREMENT_PRODUCT:
            return {
                ...state,
                cart: action.payload.qty > 1 ? state.cart.map(product => product.id === action.payload.id ? { ...product, qty: product.qty - 1 } : product) : state.cart.filter(product => product.id !== action.payload.id)
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}
export default cartReducer;