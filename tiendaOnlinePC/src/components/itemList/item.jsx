import { Link } from "react-router-dom";
import "./item.css"
const Item = ({ id, precio, stock, img, nombre, descripcion }) => {
  return (
    <article className="card">
      <h2>{nombre}</h2>
      <img src={img} alt={descripcion}/>
      <section>
        <p>Precio: {precio} $(ARG)</p>
        <p>Unidades Disponibles: {stock}</p>
      </section>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </article>
  );
};
export default Item;
