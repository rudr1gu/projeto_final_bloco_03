const CardProdutos = () => {
    return (
        <div className="card">
        <img src="https://via.placeholder.com/300" alt="Produto" />
        <div className="card-body">
            <h5 className="card-title">Nome do Produto</h5>
            <p className="card-text">Descrição do Produto</p>
            <a href="#" className="btn btn-primary">Ver Produto</a>
        </div>  
        </div>
    );
}

export default CardProdutos;