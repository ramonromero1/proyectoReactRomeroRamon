import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/Firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useNotification } from "../hooks/useNotification";

const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const { setNotification } = useNotification();

  useEffect(() => {
    setLoading(true);
    const collectionRef = category
      ? query(collection(db, "productos"), where("category", "==", category))
      : collection(db, "productos");

    getDocs(collectionRef)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((err) => {
        setNotification("error", `No es posible cargar los productos`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h3 className="text-primary fw-bold text-center animate__animated animate__pulse animate__infinite">
          Cargando productos...
        </h3>
      </div>
    );
  }

  return (
    <div>
      <h1
        className="text-center my-4 fw-bold display-4 text-secondary"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {greetings}
      </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
