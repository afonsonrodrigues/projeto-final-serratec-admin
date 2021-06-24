import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import Pagina404 from './pages/Pagina404'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import NovoProduto from './pages/Produto/NovoProduto'
import EditaProduto from './pages/Produto/EditaProduto'
import Categorias from './pages/Categorias'
import NovaCategoria from './pages/Categoria/NovaCategoria'
import EditaCategoria from './pages/Categoria/EditaCategoria'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/produtos">
            <Produtos />
          </Route>
          <Route exact path="/produtos/novo">
            <NovoProduto />
          </Route>
          <Route exact path="/produtos/:id">
            <EditaProduto />
          </Route>
          <Route exact path="/categorias">
            <Categorias />
          </Route>
          <Route exact path="/categoria/novo">
            <NovaCategoria />
          </Route>
          <Route exact path="/categoria/:id">
            <EditaCategoria />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;