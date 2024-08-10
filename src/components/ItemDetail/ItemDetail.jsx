import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../Context/CartContext";
import { useNotification } from "../hooks/useNotification";

const ItemDetail = ({ id, name, img, category, description, stock, price }) => {
  const { addItem, estasEnElCarrito } = useCart();

  const { setNotification } = useNotification();

  const handleAdd = (count) => {
    const productObj = {
      id,
      name,
      price,
      quantity: count,
    };

    addItem(productObj);
    setNotification("success", `Se agregaron ${count} de ${name}`);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <article
        className="card shadow-sm bg-dark text-white"
        style={{ width: "300px", margin: "20px" }}
      >
        <img
          src={img}
          className="card-img-top"
          alt={name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <p className="card-text">
            <strong>Categoría:</strong> {category}
          </p>
          <p className="card-text">{description}</p>
          <h2 className="card-subtitle mb-2 text-muted">${price}</h2>
          <p className="card-text">
            <strong>Stock disponible:</strong>
          </p>
          <h3 className="display-4">{stock}</h3>
          {estasEnElCarrito(id) ? (
            <Link to="/Cart" className="btn btn-primary mt-3">
              Finalizar la compra
            </Link>
          ) : (
            <div className="mt-3">
              <ItemCount stock={stock} onAdd={handleAdd} />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
