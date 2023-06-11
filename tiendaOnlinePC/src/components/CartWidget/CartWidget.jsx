import "./imgCarrito.css"
import imgCarrito from "./imgCarrito/img/carrito.png"
const CartWidget=()=>{
    return(
        <div>
            <img src={imgCarrito} alt="imagen carrito de compras" id="carritoCompras"/>
            <div id="contador">0</div>
        </div>
    )
}
export default CartWidget