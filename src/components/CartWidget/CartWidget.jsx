import { Link } from "react-router-dom";
import cart from "../../assets/img/cart.svg";
import { useCart } from "../Context/CartContext";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <Link to="/Cart">
      <img src={cart} alt="Carrito" />
      {totalQuantity}
    </Link>
  );
}

export default CartWidget;
