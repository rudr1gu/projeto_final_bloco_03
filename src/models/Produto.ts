import Categoria from "./Categoria";

interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    categoria: Categoria;
}

export default Produto;