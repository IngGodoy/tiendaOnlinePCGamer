import ItemCount from "../itemCount/itemCount";
import "./itemDatail.css";
const Item = ({ id, precio, stock, img, nombre, descripcion }) => {
  return (
    <article key={id} className="card">
      <h2>{nombre}</h2>
      <img src={img} alt={descripcion} />
      <section>
        <p>Precio: {precio}$(ARG)</p>
        <p>Unidades disponibles: {stock}</p>
      </section>
      <ItemCount
        stock={stock}
        inicial={0}
        buttonAgregar={() =>
          alert("Producto agregado al carrito de compras...")
        }
      />
    </article>
  );
};
export default Item;
