import { useContext } from "react";
import CartContext from "../../cartReducer/cartContext/CartContext";
import ProductSummary from "../../components/ProductSummary";
import { allProducts } from "../../utilities/allProducts";
import './allProducts.css';

const AllProducts = () =>{

    return (
        <>
            {allProducts.map(product => <ProductSummary key={product.id} product={product}/>)}
        </>
    )
}
export default AllProducts;