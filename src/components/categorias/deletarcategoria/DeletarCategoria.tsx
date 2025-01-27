import { useNavigate, useParams } from "react-router-dom";
import CategoriaServices from "../../../services/CategoriaServices";
import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { RotatingLines } from "react-loader-spinner";

const DeletarCategoria = () => {

    const navigate = useNavigate();
    const categoriaService = new CategoriaServices();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    const buscarPorId = async (id: string) => {
        try {
            await categoriaService.getCategoriaById(Number(id), setCategoria);
        }  catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    const deletarCategoria = async () => {
        setIsLoading(true);
        try {
            await categoriaService.deleteCategoria(Number(id));
        } catch (error: any) {
            console.log(error);
        }
        setIsLoading(false);
        retornar();
    }

    const retornar = () => {
        navigate('/categorias');
    }

    return (

        <section className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-sky-600 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-sky-400 
                                   hover:bg-sky-600 flex items-center justify-center'
                                   onClick={deletarCategoria}>
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </section>
    )


}

export default DeletarCategoria;