import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
  return (
    <div className="col-md-4 mb-3">
      <article
        className="card h-100 shadow-sm"
        style={{ maxWidth: "18rem", margin: "0 auto" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "120px", overflow: "hidden" }}
        >
          <img
            src={img}
            className="img-fluid"
            alt={name}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="card-body p-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text mb-1">Categoría: {category}</p>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
          <Link to={`/detail/${id}`} className="btn btn-sm btn-primary">
            Ver Detalle
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Item;
