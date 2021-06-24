import http from '../../http'

import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

const Servicos = () => {

  const [categorias, setCategorias] = useState([])

  const obterCategorias = () => {
    http.get('categorias')
      .then(response => setCategorias(response.data))
  }

  useEffect(() => {
    obterCategorias()
  }, [])

  const excluir = (categoria) => {
    http.delete('categoria/' + categoria.id)
      .then(response => obterCategorias())
  }

  return (
    <div>
      <h1>Categorias</h1>
      <Link className="btn btn-sm btn-outline-primary mb-3" to="/categoria/novo">+ categorias</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          {categorias.map(categoria => <tr key={categoria.id}>
            <td>{categoria.id}</td>
            <td>{categoria.nome}</td>
            <td>{categoria.descricao}</td>
            <td>
              <Link className="btn btn-sm btn-outline-info" to={`/categoria/${categoria.id}`}>editar</Link>
              <button type="button" className="ml-2 btn btn-sm btn-outline-danger" onClick={() => { excluir(categoria) }}>excluir</button>
            </td>
          </tr>)}
        </tbody>
      </table>
      <ul>

      </ul>
    </div>
  )
}

export default Servicos