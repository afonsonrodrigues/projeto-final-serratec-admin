import { Link } from "react-router-dom";
import "./estilos.css";
import imagem from "../../assets/img/produto.jpeg";
const CardProdutos = () => {
    return (
        <div class="card">
            <img src={imagem} class="card-img-top" alt="imagemProduto"></img>
            <div class="card-body">
                <h5 class="card-title">Nome Produto</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Preço</li>
            </ul>
            <div class="card-body">
                <Link to={`/detalhes/`}>Ver detalhes</Link>
                {/* <Link to={`/produtos/${props.id}`}>Ver detalhes</Link> */}
            </div>
            <button class="btn btn-warning">Adiconar ao Carrinho</button>
        </div>
    );
};

export default CardProdutos;
