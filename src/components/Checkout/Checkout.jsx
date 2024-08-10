import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/Firebase/firebase";
import { useNotification } from "../hooks/useNotification";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderCreated, setOrderCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
  });
  const [error, setError] = useState("");
  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const objOrder = {
        buyer: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          email: formData.email,
        },
        items: cart,
        totalQuantity,
        total,
        date: new Date(),
      };
      const ids = cart.map((item) => item.id);

      const productRef = collection(db, "productos");
      const productsAddedFromFireStore = await getDocs(
        query(productRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFireStore;
      const outOfStock = [];
      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDB = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const productQuantity = productAddedToCart?.quantity;

        if (stockDB >= productQuantity) {
          batch.update(doc.ref, { stock: stockDB - productQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        <h3>El id de su orden es ({orderAdded.id})</h3>;
        setOrderCreated(true);
        clearCart();
      } else {
        <h1>Hay productos que están fuera de stock</h1>;
      }
    } catch (error) {
      <h1>Error al crear la orden: (error);</h1>;
      setError("Hubo un error al crear la orden. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>Formulario de Envio</h1>
        <form onSubmit={createOrder}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                backgroundColor: "gray",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Generar Orden
            </button>
          </div>
        </form>
        {loading && (
          <div className="alert alert-info mt-3" role="alert">
            Se está generando la orden...
          </div>
        )}
        {orderCreated && (
          <div className="alert alert-success mt-3" role="alert">
            La orden fue creada correctamente.
          </div>
        )}
        {error && (
          <div className="alert alert-danger mt-3" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
