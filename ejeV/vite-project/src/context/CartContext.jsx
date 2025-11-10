import { createContext, useContext, useEffect, useMemo, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
const [items, setItems] = useState(() => {
    try {
        return JSON.parse(localStorage.getItem("carrito")) ?? [];
    } catch {
        return [];
    }
});


useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
}, [items]);


const value = useMemo(
    () => ({
        items,
        add: (id) => setItems((prev) => [...prev, id]),
        removeIndex: (idx) =>
        setItems((prev) => prev.filter((_, i) => i !== idx)),
        clear: () => setItems([]),
        count: items.length,
    }),
    [items]
);


return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export const useCart = () => useContext(CartContext);