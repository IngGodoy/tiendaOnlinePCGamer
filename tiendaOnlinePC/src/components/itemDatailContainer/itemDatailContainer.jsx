import { getProductosId } from "../../asyncMock/asyncMock.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDatail from "./itemDatail.jsx";
import "./itemDatailContainer.css"
const ItemDatailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState({});
  useEffect(() => {
    getProductosId(itemId)
      .then((respuesta) => {
        setProducto(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return <div id="contenedor"><ItemDatail {...producto} /></div>;
};
export default ItemDatailContainer;
