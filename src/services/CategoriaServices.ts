import Categoria from "../models/Categoria";
import baseApi from "./baseApi";

class CategoriaServices {
    getAllCategorias = async (setDados: Function) => {
        const response = await baseApi.get("/categorias");
        setDados(response.data);
    }

    createCategoria = async (categoria: Categoria, setDados: Function) => {
        const response = await baseApi.post("/categorias", categoria);
        setDados(response.data);
    }

    updateCategoria = async (categoria: Categoria, setDados: Function) => {
        const response = await baseApi.put("/categorias", categoria);
        setDados(response.data);
    }

    deleteCategoria = async (id: number) => {
        await baseApi.delete(`/categorias/${id}`);
    }

}

export default CategoriaServices;