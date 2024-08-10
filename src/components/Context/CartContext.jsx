import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const estasEnElCarrito = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (productoToAdd) => {
    if (!estasEnElCarrito(productoToAdd.id)) {
      setCart((prev) => [...prev, productoToAdd]);
    } else {
      console.error("El producto ya está en el carrito");
    }
  };

  const getTotal = () => {
    let accu = 0;
    cart.forEach((item) => {
      accu += item.quantity * item.price;
    });
    return accu;
  };

  const getTotalQuantity = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += prod.quantity;
    });
    return accu;
  };

  const removeItem = (id) => {
    const cartUpdate = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalQuantity = getTotalQuantity();

  const obj = {
    cart,
    addItem,
    estasEnElCarrito,
    totalQuantity,
    getTotal,
    clearCart,
    removeItem,
  };
  return <CartContext.Provider value={obj}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
