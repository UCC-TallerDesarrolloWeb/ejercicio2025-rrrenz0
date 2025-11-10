import { productos } from '@data/products';
import "@styles/Store.scss";
import { useState } from 'react';
import Modal from '../components/Modal';
import { formatPrice } from '../utils/format';

const Store = () => {
    const [selected, setSelected] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const showModal = (prod) => {
        setSelected(prod);
        setIsOpen(true);
    }

    const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
  };

  const isLogginIn = localStorage.getItem("isLoggedIn") === "true";

    const agregarProducto = (prod) => {
        alert(`Producto para agregar ${prod.nombre}`);
    }


    return (
        <>
            <div className="catalogo">
            { productos.map((prod, id) => (
                <div className="card-prod" key={id}>
                    <img src={`../../public/products/${prod.imagen}`} alt={prod.nombre} />
                    <h3>{prod.nombre}</h3>
                    <p>{formatPrice(prod.precio)}</p>
                    <button onClick={() => showModal(prod)}>Ver Detalle</button>
                     {isLogginIn && (
                        <button onClick={() => agregarProducto(prod)}>Agregar al carrito</button>
                    )}
                    
                </div>
            )) 
            }
            </div>

            {selected && (
                <Modal
                    open={isOpen}
                    titulo={selected.nombre}
                    descripcion={selected.description}
                    precio={formatPrice(selected.precio)}
                    onClose={closeModal}
                />
            )}
        </>
    )

}

export default Store;