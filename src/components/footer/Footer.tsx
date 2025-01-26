const Footer = () => {

    return (
        <footer className="flex justify-center bg-sky-900 text-white">
            <div className="container flex flex-col items-center py-4">
                <div className="text-xl font-bold">
                    <p>
                       Desenvolvido por: Rudr1gu
                    </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2 justify-center'>
                        <a href="https://instagram.com/rudr1gu" className=""><i className='bx bxl-instagram-alt'></i></a>
                        <a href="https://github.com/rudr1gu"><i className='bx bxl-github'></i></a>
                        <a href="https://linkedin.com/in/rudr1gu"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;