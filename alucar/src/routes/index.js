import { BrowserRouter, Routes, Route, useParams } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CriarConta } from "../pages/CriarConta";
import { Sobre } from "../pages/Sobre";
import { Ajuda } from "../pages/Ajuda";
import { Produto } from "../pages/Produto";
import { MinhasReservas } from "../pages/MinhasReservas"
import { DisponibilidadeCategoria } from "../pages/DisponibilidadeCategoria";
import { DisponibilidadePesquisa } from "../pages/DisponibilidadePesquisa";
import { MinhaConta } from '../pages/MinhaConta';
import { Reserva } from "../pages/Reserva";
import { NotFound } from "../pages/NotFound";

import FiltroContext from "../context/FiltroContext";

import { Teste } from '../pages/Teste';
import { SandBox } from "../pages/SandBox";
import { Lojin } from '../pages/Teste/Lojin';
import { Register } from '../pages/Teste/Register';
import { Admin } from "../pages/Admin";

/* import * as serviceWorker from './serviceWorker'; */

const RouteList = () => {

    return (
        <BrowserRouter>
            <HelmetProvider>
                <FiltroContext>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/criarconta" element={<CriarConta />} />
                        <Route path="/sobre" element={<Sobre />} />
                        <Route path="/ajuda" element={<Ajuda />} />
                        <Route path="/detalhes/:detalhesId" element={<Produto />} />
                        <Route path="/minhasreservas" element={<MinhasReservas />} />
                        <Route path="/disponibilidade/:detalhesId" element={<DisponibilidadeCategoria />} />
                        <Route path="/disponibilidade" element={<DisponibilidadePesquisa />} />
                        <Route path="/minhaconta" element={<MinhaConta />} />
                        <Route path="/teste" element={<Teste />} />
                        <Route path="/reserva/:detalhesId" element={<Reserva />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={<NotFound />} />
                        {/* Não esquecer de tirar depois */}
                        <Route path="sandbox" element={<SandBox />} />
                        <Route path="/lojin" element={<Lojin />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/teste" element={<Teste />} />
                    </Routes>
                    <Footer />
                </FiltroContext>
            </HelmetProvider>
        </BrowserRouter>
    )
};

export default RouteList;