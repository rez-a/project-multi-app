import { useContext } from "react"
import CartContext from "../cartReducer/cartContext/CartContext"

const ProductSummary = ({ product }) => {
    const {addToCart} = useContext(CartContext);
const handleAddToCart = async(product) =>{
    await addToCart(product)
}

    return (
        <>
            <div className="col-3">
                <div className="card">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title product-title">{product.name}</h5>
                        <p className="card-text product-desc">{product.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button onClick={()=>handleAddToCart(product)} className="btn btn-outline-success">Add To Card</button>
                            <p className="price mb-0">${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductSummary;