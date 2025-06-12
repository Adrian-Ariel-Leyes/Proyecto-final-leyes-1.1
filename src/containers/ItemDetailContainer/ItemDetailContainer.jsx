import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "products", itemId);
    getDoc(docRef)
      .then(res => {
        setProduct({ id: res.id, ...res.data() });
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;