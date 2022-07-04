import { Link } from "react-router-dom";

const CartEmpty = () =>{
    return (
        <>
            <div className="col-6 mx-auto text-center">
                <div><i className="bi bi-cart4" style={{fontSize : '5rem'}}></i></div>
                <h2>Cart is empty!</h2>
                <Link to='/products' className="btn btn-warning">Products</Link>
            </div>
        </>
    )
}
export  default CartEmpty;