import { useState, useEffect } from "react";
import {
  getProductos,
  getProductosCategotia,
} from "../../asyncMock/asyncMock.js";
import ItemList from "../itemList/itemList.jsx";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();
  //modificar el title en funcion del componente que se muestre
  useEffect(() => {
    document.title = categoryId
      ? `categoria ${categoryId}`
      : `Productos destacados`;
    return () => {
      document.title = "Tienda Online PC GAMER";
    };
  }, [categoryId]);
  //mostrar todos los productos y en caso de seleccionar una categoria cambiar los productos
  useEffect(() => {
    const funcionAsincrona = categoryId ? getProductosCategotia : getProductos;
    funcionAsincrona(categoryId)
      .then((respuestaProductos) => {
        setProductos(respuestaProductos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <main>
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </main>
  );
};
export default ItemListContainer;
