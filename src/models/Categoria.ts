import Produto from "./Produto";

interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    produtos: Produto[];
}

export default Categoria;