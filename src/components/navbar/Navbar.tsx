import { Link } from "react-router-dom";

const Navbar =() =>{
    return(
        <nav className="w-full flex justify-center py-4 bg-sky-900 text-white">
        <div className="container flex justify-between text-lg">
            <h1><Link to="/home"> GenFarm </Link> <i className='bx bx-plus-medical' ></i></h1>
            <div>
                <ul className="flex gap-5">
                    <li><Link to="/home">Home <i className='bx bxs-home-smile' ></i></Link></li>
                    <li><Link to="/home">Produtos <i className='bx bxs-shopping-bag' ></i></Link></li>
                    <li><Link to="/" >Categorias <i className='bx bx-list-ul'></i></Link></li>
                    <li><Link to="/home">Contato <i className='bx bxs-phone' ></i></Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;