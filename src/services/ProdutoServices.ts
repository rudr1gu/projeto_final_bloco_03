import Produto from "../models/Produto";
import baseApi from "./baseApi";

class ProdutoServices {
    getAllProdutos = async (setDados: Function) => {
        const response = await baseApi.get("/produtos");
        setDados(response.data);
    }

    createProduto = async (produto: Produto, setDados: Function) => {
        const response = await baseApi.post("/produtos", produto);
        setDados(response.data);
    }
}

export default ProdutoServices;