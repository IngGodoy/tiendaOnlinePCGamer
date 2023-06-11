import "./App.css";
import NavBar from "./components/navBar/navBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDatailContainer from "./components/itemDatailContainer/itemDatailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Equipos GAMER - Productos  destacados"} />}/>
          <Route path="/category/:categoryId" element={ <ItemListContainer greeting={"Productos filtrados"} />}/>
          <Route path="/item/:itemId" element={<ItemDatailContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
