import { useState } from "react";
import "./itemCount.css"
const ItemCount = ({ stock, inicial, buttonAgregar }) => {
  const [contador, setcontador] = useState(inicial);
  const incrementar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
      stock--;
    } else {
      alert("no hay mas stock disponible del producto");
    }
  };
  const decrementar = () => {
    if (contador > 0) {
      setcontador(contador - 1);
      stock++;
    } else {
      alert("no hay productos agregados");
    }
  };
  return (
    <div>
      <section>
        <div className="btnCount">
          <button onClick={incrementar}>+</button>
          <p>{contador}</p>
          <button onClick={decrementar}>-</button>
        </div>
      </section>
      <button onClick={() => buttonAgregar(contador)}>Agregar producto</button>
    </div>
  );
};
export default ItemCount;
