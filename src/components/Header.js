import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../cartReducer/cartContext/CartContext';

const Header = () => {
    const {cart} = useContext(CartContext);
    console.log(cart)
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand text-dark" to='/'>Multi App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className={navData => navData.isActive ? "nav-link active text-dark" : "nav-link text-muted"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/users' className={navData => navData.isActive ? "nav-link active text-dark" : "nav-link text-muted"}>Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/posts' className={navData => navData.isActive ? "nav-link active text-dark" : "nav-link text-muted"}>Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/todos' className={navData => navData.isActive ? "nav-link active text-dark" : "nav-link text-muted"}>Todos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/products' className={navData => navData.isActive ? "nav-link active text-dark" : "nav-link text-muted"}>Products</NavLink>
                        </li>
                    </ul>
                    <Link to='/cart' className='d-flex align-items-center'><span className="badge bg-primary rounded-pill">{cart.length}</span><i className="bi bi-cart4 fs-3"></i></Link>
                </div>
            </div>
        </nav>
    )
}
export default Header;