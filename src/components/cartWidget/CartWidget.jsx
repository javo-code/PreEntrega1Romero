import carritoIco from './carrito-blanco.png'
import './estilosCarrito.css';

function CartWidget() {

return (
  <div className='contendor-icono-carrito' >
    <button className='boton-carrito'>
      <img
        className='icono-carrito'
        src={carritoIco}
        alt='icono carrito'
      />
      <div className='contador-carrito'>
        5
      </div>
    </button>
  </div>
)
}

export default CartWidget;