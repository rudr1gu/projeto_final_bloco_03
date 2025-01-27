import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import ListaCategorias from './components/categorias/listarcategorias/ListarCategorias'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import Contato from './pages/contato/Contato'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrarcategoria" element={<FormCategoria />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          <Route path="/editarcategoria/:id" element={<FormCategoria />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
</>
  )
}

export default App
