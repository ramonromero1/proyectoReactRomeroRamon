import { CartProvider } from "./components/Context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { NotificationProvider } from "./components/Context/NotificationContex";

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings={"Lista de productos"} />}
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<h1>:404 not found</h1>} />
          </Routes>
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
