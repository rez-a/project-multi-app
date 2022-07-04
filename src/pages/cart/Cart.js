import { useContext } from 'react';
import CartContext from '../../cartReducer/cartContext/CartContext';
import CartEmpty from '../../components/CartEmpty';
import CartSummary from '../../components/CartSummary';
import './cart.css';
const Cart = () => {
    const { cart , clearCart } = useContext(CartContext);
    const handleClearCart = () =>{
        clearCart();
    }
    console.log(cart)
    return (
        <>
            <div className="col">
                {cart.length > 0 ? (
                    <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th className='text-center' scope="col">Price</th>
                            <th className='text-center' scope="col">Quantity</th>
                            <th className='text-center' scope="col">Subtotal</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    {cart.map(product => <CartSummary key={product.id} product={product}/>)}
                    <tfoot>
                        <tr>
                            <td><button onClick={handleClearCart} className='btn btn-dark'>Clear Cart</button></td>
                            <td></td>
                            <td></td>
                            <th><p className='mb-0'>Total : {cart.reduce((total , product)=>{
                                return total + (product.price * product.qty);
                            } , 0)}</p></th>
                            <td><button className='btn btn-success'>Checkout</button></td>
                        </tr>
                    </tfoot>
                </table>
                ) : <CartEmpty />}
            </div>
        </>
    )
}
export default Cart;