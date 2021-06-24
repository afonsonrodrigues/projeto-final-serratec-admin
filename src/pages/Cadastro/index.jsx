import http from '../../http'
import { useState } from "react"

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const efetuarCadastro = (evento) => {
    evento.preventDefault()
    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    http.post('auth/register', usuario)
      .then(response => console.log(response.data))
      .catch(erro => {
        console.log('Algo deu errado')
        console.log(erro)
      })
  }

  return (
    <div className="row  justify-content-center">
      <div className="col-md-6">
        <h1>Cadastre-se</h1>
        <form onSubmit={efetuarCadastro}>
          <div className="form-group">
            <label>Nome</label>
            <input className="form-control" value={nome} onChange={(evento) => setNome(evento.target.value)} required />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input className="form-control" value={email} onChange={(evento) => setEmail(evento.target.value)} required type="email" />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input className="form-control" value={senha} onChange={(evento) => setSenha(evento.target.value)} required type="password" />
          </div>
          <button className="btn btn-outline-dark btn-block">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )

}

export default Cadastro