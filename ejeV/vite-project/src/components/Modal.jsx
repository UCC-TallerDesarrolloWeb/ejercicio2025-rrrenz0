import { useEffect, useRef } from "react";

const Modal = ({open, titulo, descripcion, precio, onClose}) => {
 const ref = useRef(null);
 //useRef te permite guardar una referencia estable entre renders.
 //algo que no cambia cuando el componente se vuelve a renderizar.

 useEffect(() => {
  //useEffect sirve para ejecutar efectos secundarios después de que React renderiza el componente.
    const dlg = ref.current;
    if (!dlg) return;

    if (open && !dlg.open) dlg.showModal();//montar el componente
    if (!open && dlg.open) dlg.close(); //desmontarlo
  }, [open]);

  return (
    <dialog ref={ref} className="modal" onClose={onClose}>
      <h2>Detalle del Producto</h2>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      <p>{precio}</p>
      <button type="submit" onClick={onClose}>Cerrar</button>
    </dialog>
  )

}

export default Modal;