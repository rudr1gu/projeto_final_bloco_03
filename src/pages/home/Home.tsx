import { useEffect, useState } from "react";
import Produto from "../../models/Produto";
import ProdutoServices from "../../services/ProdutoServices";

const Home = () => {

    const [produtos, setProdutos] = useState<Produto[]>([]);

    const produtosServices = new ProdutoServices();

    const buscarProdutos = async () => {
        try{
            await produtosServices.getAllProdutos(setProdutos);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <>
            <div className="w-screen flex justify-center">
                <div>
                    <div className="max-w-7xl flex flex-col items-center">
                        <h2>Seja Bem Vindo(a)!</h2>
                        <p>a Farmacia blabla...</p>
                    </div>

                    <div className="max-w-7xl flex flex-col items-center">
                        <h2>Produtos</h2>
                        <p>Produtos em destaque...</p>
                        <ul>
                            {produtos.map((produto) => (
                                <li key={produto.id}>
                                    <p>{produto.nome}</p>
                                    <p>{produto.preco}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Home;