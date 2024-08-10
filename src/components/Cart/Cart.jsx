import React from "react";
import { useCart } from "../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, totalQuantity } = useCart();
  const total = getTotal();

  if (totalQuantity === 0) {
    return (
      <div className="container mt-5">
        <h1 className="text-center text-muted">No hay nada en el carrito</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h2 className="mb-0">Tu Carrito</h2>
        </div>
        <div className="card-body">
          {cart.length === 0 ? (
            <p className="text-center text-muted">Tu carrito está vacío.</p>
          ) : (
            cart.map((item) => <CartItem key={item.id} {...item} />)
          )}
          <div className="mt-4">
            <h3 className="text-muted">Total: $ {total}</h3>
          </div>
          <div className="mt-4">
            <button className="btn btn-dark">Limpiar Carrito</button>
          </div>
          <div className="mt-3 text-center">
            <Link to="/checkout" className="btn btn-secondary">
              Comprar!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
