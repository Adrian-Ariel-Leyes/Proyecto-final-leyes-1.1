import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, "products");

    getDocs(productsRef)
      .then((res) => {
        const items = res.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;