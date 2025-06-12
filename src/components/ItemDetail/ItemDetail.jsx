import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>

      {added ? (
        <p>Producto agregado al carrito ✅</p>
      ) : (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;