import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/NavBar'
import Pagina404 from './pages/Pagina404'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import Produtos from './pages/Produtos'
import NovoProduto from './pages/Produto/NovoProduto'
import EditaProduto from './pages/Produto/EditaProduto'
import Servicos from './pages/Servicos'
import NovoServico from './pages/Servico/NovoServico'
import EditaServico from './pages/Servico/EditaServico'
import { useState } from 'react'

function App() {

  const [token, setToken] = useState('')
  const onLogin = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken('')
  }

  return (
    <BrowserRouter>
      <Navbar token={token} aoLogout={logout}/>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/login">
            <Login onLogin={onLogin}/>
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
          <Route exact path="/servicos">
            <Servicos />
          </Route>
          <Route exact path="/servicos/novo">
            <NovoServico />
          </Route>
          <Route exact path="/servicos/:id">
            <EditaServico />
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