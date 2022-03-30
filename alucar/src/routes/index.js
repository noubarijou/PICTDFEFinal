import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CriarConta } from "../pages/CriarConta";
import { Sobre } from "../pages/Sobre";
import { Ajuda } from "../pages/Ajuda";
import { Detalhes } from "../pages/Produto";
import { MinhasReservas } from "../pages/MinhasReservas"
import { DisponibilidadeCategoria } from "../pages/DisponibilidadeCategoria";
import { MinhaConta } from '../pages/MinhaConta';
import { Teste } from '../pages/Teste';
import { Reserva } from "../pages/Reserva";
import { DisponibilidadePesquisa } from "../pages/DisponibilidadePesquisa";

const RouteList = () => {
    
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/criarconta" element={<CriarConta />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/ajuda" element={<Ajuda />} />
                    <Route path="/detalhes/:detalhesId" element={<Detalhes />} />
                    <Route path="/minhasreservas" element={<MinhasReservas />} />
                    <Route path="/disponibilidade/:detalhesId" element={<DisponibilidadeCategoria />} />
                    <Route path="/disponibilidade" element={<DisponibilidadePesquisa />} />
                    <Route path="/minhaconta" element={<MinhaConta />} />
                    <Route path="/teste" element={<Teste />} />
                    <Route path="/reserva" element={<Reserva />} />
                    {/* <Route path="/categorias" element={<Categorias />} /> */}
                </Routes>
                <Footer />
            </HelmetProvider>
        </BrowserRouter>
    )
};

export default RouteList;