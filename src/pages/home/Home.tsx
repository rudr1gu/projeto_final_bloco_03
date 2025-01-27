import { Link } from "react-router-dom";
import ListaCategorias from "../../components/categorias/listarcategorias/ListarCategorias";

const Home = () => {

    return (
        <>
        <section className="bg-sky-700 flex justify-center h-full" >
            <div className='container grid grid-cols-2 text-white'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold text-white'>
                        Seja Bem Vindo(a) GenFarm!
                    </h2>
                    <p className='text-xl'>
                        Encontre seu medicamento aqui!
                    </p>

                    <div className="flex justify-around gap-4">
                        <div className="flex justify-around gap-4">
                            <Link to="/categorias">Categorias</Link>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/10154/10154271.png"
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
        </section>
        <ListaCategorias />
    </>
    );

}

export default Home;