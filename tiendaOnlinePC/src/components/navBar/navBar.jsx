import "./navBar.css"
import imgLogo from "./imgNav/logo.png"
import CartWidget from "../CartWidget/CartWidget.jsx"
import { Link } from "react-router-dom"; 
const NavBar = () => {
  return (
    <header>
      <img src={imgLogo} alt="imagen del logo" id="logo" />
      <section class="navigation">
        <Link to="/" className="linkProductos">Incio</Link>
        <Link to="/category/laptops" className="linkProductos">Laptops</Link>
        <Link to="/category/PC" className="linkProductos">Computadoras</Link>
        <Link to="/category/articulos" className="linkProductos">Articulos Gamer</Link>
      </section>
      <div>
        <CartWidget />
      </div>
    </header>
  );
};
export default NavBar
