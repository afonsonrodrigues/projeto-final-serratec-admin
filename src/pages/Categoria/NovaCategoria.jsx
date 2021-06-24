import http from "../../http"
import { useState } from "react"

const NovoServico = () => {

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  const salvar = (evento) => {
    evento.preventDefault()
    const categoria = {
      nome: nome,
      descricao: descricao
    }
    http.post('categoria', categoria)
      .then(response => {
        console.log(response.data)
      })
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <h1>Adicionar Categoria</h1>
        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} required />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input className="form-control" type="text" value={descricao} onChange={(evento) => setDescricao(evento.target.value)} required />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )
}

export default NovoServico