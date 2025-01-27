import CategoriaServices from "../../../services/CategoriaServices";
import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { DNA } from "react-loader-spinner";
import CardCategorias from "../cardcategorias/CardCategorias";


const ListaCategorias = () => {
    const categoriaServices = new CategoriaServices();

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const buscarCategorias = async () => {
        try{
            await categoriaServices.getAllCategorias(setCategorias);
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
        {categorias.length === 0 && (
            <DNA
                visible={true}
                height={200}
                width={200}
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto" 
            />
        )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
        
}

export default ListaCategorias;