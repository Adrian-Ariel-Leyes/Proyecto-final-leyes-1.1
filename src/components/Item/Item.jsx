import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ product }) => {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
      <p>Disponibilidad: {product.stock > 0 ? "En stock" : "Sin stock"}</p>
        <Link to={`/item/${product.id}`} className="btn">
            Ver Detalles
        </Link>
    </div>
    );
}