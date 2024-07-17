import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, stock, price }) => {
  return (
    <div className="d-flex justify-content-center">
      <article
        className="card shadow-sm"
        style={{ maxWidth: "600px", margin: "20px" }}
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
            <ItemCount stock={stock} />
          </p>
        </div>
      </article>
    </div>
  );
};

export default ItemDetail;
