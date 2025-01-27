import { useNavigate, useParams } from "react-router-dom";
import CategoriaServices from "../../../services/CategoriaServices";
import { ChangeEvent, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

const FormCategoria = () => {

    const navigate = useNavigate();
    const categoriaServices = new CategoriaServices();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    const buscarPorId = async (id: string) => {
        try {
            await categoriaServices.getCategoriaById(Number(id), setCategoria);
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    const atualizarEstado = (e: ChangeEvent<HTMLInputElement>) => {
        setCategoria({ ...categoria, [e.target.name]: e.target.value });
    }

    const retornar = () => {
        navigate('/categorias');
    }

    const gerarNovaCategoria = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await categoriaServices.updateCategoria(categoria, setCategoria);
            } catch (error: any) {
                console.log(error);
            }
        } else {
            try {
                await categoriaServices.createCategoria(categoria, setCategoria);
            } catch (error: any) {
                console.log(error);
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da Categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva aqui sua categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-sky-400 
                               hover:bg-sky-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                    {isLoading ?
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>

                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;