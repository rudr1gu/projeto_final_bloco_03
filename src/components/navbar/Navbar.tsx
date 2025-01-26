import { Link } from "react-router-dom";

const Navbar =() =>{
    return(
        <nav className="w-full flex justify-center py-4 bg-sky-900 text-white">
        <div className="container flex justify-between text-lg">
            <h1><Link to="/home">Farmacia </Link> <i className='bx bxs-band-aid'></i></h1>
            <div>
                <ul className="flex gap-5">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/home">Produtos</Link></li>
                    <li><Link to="/home">Contato</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;