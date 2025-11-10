import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../utils/format.js";

const ProductCard = ({ prod, onDetail }) => {
    const { add } = useCart();


    return (
        <div className="card">
            <img src={`/images/${prod.imagen}`} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{formatPrice(prod.precio)}</p>
            <div className="actions">
                <button type="button" onClick={() => onDetail(prod)}>Ver Detalle</button>
                <button type="button" onClick={() => add(prod.__id)}>Agregar al Carrito</button>
            </div>
        </div>
    );
}

export default ProductCard;