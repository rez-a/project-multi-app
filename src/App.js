import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./cartReducer/cartContext/CartProvider";
import Header from "./components/Header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home";
import RouterPosts from "./pages/posts/RouterPosts";
import AllProducts from "./pages/products/AllProducts";
import Todos from "./pages/todos/Todos";
import RouterUsers from "./pages/users/RouterUsers";
import TodoProvider from "./todoReducer/todoContext/TodoProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
        </CartProvider>
        <div className="container my-5">
          <div className="row g-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/*" element={<RouterUsers />} />
              <Route path="/posts/*" element={<RouterPosts />} />
              <Route path="/todos" element={
                <TodoProvider>
                  <Todos />
                </TodoProvider>
              } />
              <Route path="/products" element={
                <CartProvider>
                  <AllProducts />
                </CartProvider>
              } />
              <Route path="/cart" element={
                <CartProvider>
                  <Cart />
                </CartProvider>
              } />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
