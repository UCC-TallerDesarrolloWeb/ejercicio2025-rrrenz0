import React, { useMemo } from "react";
import { useCart } from "../context/CartContext.jsx";
import { productos } from "../data/products.js";
import { formatPrice } from "../utils/format.js";

const Cart = () => {
    const { items, removeIndex, clear } = useCart();


    const { rows, total } = useMemo(() => {
    const listProd = [];
    const listCant = [];


    items.forEach((id) => {
    const idx = listProd.indexOf(id);
    if (idx === -1) {
    listProd.push(id);
    listCant.push(1);
    } else {
    listCant[idx] += 1;
    }
    });

    let sum = 0;
const rows = listProd.map((pid, i) => {
const p = productos[pid];
const subtotal = p.precio * listCant[i];
sum += subtotal;
return { idx: i, p, cant: listCant[i], subtotal };
});


return { rows, total: sum };
}, [items]);


return (
<main className="item4">
{rows.map(({ idx, p, cant, subtotal }) => (
<div key={idx} className="row">
<h3>{p.nombre}</h3>
<p>{formatPrice(p.precio)}</p>
<p>Cantidad: {cant}</p>
<button type="button" onClick={() => removeIndex(idx)}>Eliminar Producto</button>
</div>
))}

{rows.length > 0 && (
<>
<p>Total = {formatPrice(total)}</p>
<button type="button" onClick={clear}>Vaciar Carrito</button>
</>
)}


{rows.length === 0 && <p>El carrito está vacío.</p>}
</main>
);
}

export default Cart;