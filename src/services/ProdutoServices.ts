import Produto from "../models/Produto";
import baseApi from "./baseApi";

class ProdutoServices {
    getAllProdutos = async (setDados: Function) => {
        const response = await baseApi.get("/produtos");
        setDados(response.data);
    }

    getProdutoById = async (id: number, setDados: Function) => {
        const response = await baseApi.get(`/produtos/${id}`);
        setDados(response.data);
    }

    createProduto = async (produto: Produto, setDados: Function) => {
        const response = await baseApi.post("/produtos", produto);
        setDados(response.data);
    }

    updateProduto = async (produto: Produto, setDados: Function) => {
        const response = await baseApi.put("/produtos", produto);
        setDados(response.data);
    }

    deleteProduto = async (id: number) => {
        await baseApi.delete(`/produtos/${id}`);
    }
}

export default ProdutoServices;