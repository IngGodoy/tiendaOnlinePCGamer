import Item from "./item.jsx";
import "./itemListContainer.css"

const ItemList = ({ productos }) => {
  return (
    <div id="contenedorProductos">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
