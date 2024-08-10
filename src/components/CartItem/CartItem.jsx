import React from "react";
import { useCart } from "../hooks/useCart";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useCart();

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <article className="card mb-3">
      <header className="card-header">
        <h2 className="h5 mb-0">{name}</h2>
      </header>
      <section className="card-body">
        <p className="card-text">
          <strong>Cantidad:</strong> {quantity}
        </p>
        <p className="card-text">
          <strong>Precio:</strong> ${price.toFixed(2)}
        </p>
      </section>
      <footer className="card-footer d-flex justify-content-between align-items-center">
        <p className="mb-0">
          <strong>SubTotal:</strong> $ {price * quantity}
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleRemove(id)}
        >
          Eliminar Prenda
        </button>
      </footer>
    </article>
  );
};

export default CartItem;
