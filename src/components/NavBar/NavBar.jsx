import CartWidget from "../CartWidget/CartWidget";

function NavBar({ cartCount }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Indumentaria Lazaro
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
              <li className="nav-item dropdown">
                <button>Clientes</button>
              </li>
              <CartWidget cartCount={cartCount} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
