import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Indumentaria Lazaro
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/category/Remeras">
                Remeras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Bermudas">
                Bermudas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Medias">
                Medias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Zapatillas">
                Zapatillas
              </Link>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
