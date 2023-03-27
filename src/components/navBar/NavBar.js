import logo from '../../img/logo.png';
import './navBar.css'
import CartWidget from '../cartWidget/CartWidget'

function NavBar() {
  return (
    <nav className='navBar'>

      <div className='contenedor-logo' >
        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina'
        />
      </div>

      <div className='contenedor-navBar' >
        <ul class='menu'>
          <li><a href='#ref'>BOMBAS DE INFUSION</a></li>
          <li><a href='#ref'>NUTRICION</a></li>
          <li><a href='#ref'>DESCARTABLES</a></li>
          <li><a href='#ref'>INGRESAR</a></li>
        </ul>
        
      </div>
      <CartWidget />
    </nav>
  )
} 

export default NavBar;

