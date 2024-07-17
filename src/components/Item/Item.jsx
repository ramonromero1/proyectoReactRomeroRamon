import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, category, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <article className="card h-100 shadow-sm">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "150px", overflow: "hidden" }}
        >
          <img
            src={img}
            className="img-fluid"
            alt={name}
            style={{ maxHeight: "100%" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Categoría: {category}</p>
          <h6 className="card-subtitle mb-2 text-muted">${price}</h6>
          <Link to={`/detail/${id}`} className="btn btn-primary">
            Ver Detalle
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Item;
