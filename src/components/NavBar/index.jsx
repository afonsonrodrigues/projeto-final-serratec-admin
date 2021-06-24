import { Link } from 'react-router-dom'
import './estilos.css'

const NavBar = () => {

  const Itens = () => {
    
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria">Categorias</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/produto">Produtos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pedido">Pedidos</Link>
          </li>
        </>
      )
  }

  return (
    <nav className="navbar">
      <div>
        <ul>
          {Itens()}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar