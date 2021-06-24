import http from "../../http"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const EditaProduto = () => {

  const { id } = useParams()
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')

  useEffect(() => {
    http.get('produtos/' + id)
      .then(response => {
        setNome(response.data.nome)
        setPreco(response.data.preco)
      })
  }, [id])

  const salvar = (evento) => {
    evento.preventDefault()
    const produto = {
      nome: nome,
      preco: preco,
      id: id
    }
    http.put('produtos/' + id, produto)
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
        <h1>Editar produto</h1>
        <form onSubmit={salvar}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={(evento) => setNome(evento.target.value)} required />
          </div>
          <div className="form-group">
            <label>Preço</label>
            <input className="form-control" type="number" step="0.01" value={preco} onChange={(evento) => setPreco(evento.target.value)} required />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Salvar
          </button>
        </form>
      </div>
    </div>
  )

}

export default EditaProduto