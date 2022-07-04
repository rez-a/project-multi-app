import { useContext } from "react";
import CartContext from "../cartReducer/cartContext/CartContext";

const CartSummary = ({ product }) => {
    const { addToCart , decrementProduct , removeFromCart} = useContext(CartContext);
    const handleAddToCart = (product) => {
        addToCart(product);
    }
    const handleDecrementProduct = (product) =>{
        decrementProduct(product);
    }
    const handleRemoveFromCart = (productId) =>{
        removeFromCart(productId);
    }
    return (
        <>
            <tbody>
                <tr>
                    <td scope="row" className="d-flex">
                        <img src={product.image} style={{ width: '110px' }} alt={product.name} />
                        <div className="desc" style={{ width: '400px' }}>
                            <h5 className="title">{product.name}</h5>
                            <p className="w-75 product-desc-cart">{product.description}</p>
                        </div>
                    </td>
                    <td className="text-center pt-5">${product.price}</td>
                    <td className="text-center pt-5"><button onClick={() => handleAddToCart(product)} className="btn btn-sm btn-dark">+</button><span className="mx-2">{product.qty}</span><button onClick={() => handleDecrementProduct(product)} className="btn btn-sm btn-dark">-</button></td>
                    <td className="text-center pt-5">${product.price * product.qty}</td>
                    <td className="text-center pt-5"><button onClick={() => handleRemoveFromCart(product.id)} className="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </>
    )
}
export default CartSummary;