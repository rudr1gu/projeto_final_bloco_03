import baseApi from "./baseApi";

class ProdutoServices {
    getAllProdutos = async (setDados: Function) => {
        const response = await baseApi.get("/produtos");
        setDados(response.data);
    }
}

export default ProdutoServices;