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
import { MinhaConta } from '../pages/MinhaConta';
import { Teste } from '../pages/Teste';
import { Reserva } from "../pages/Reserva";
import { DisponibilidadePesquisa } from "../pages/DisponibilidadePesquisa";
import { SandBox } from "../pages/SandBox";

import {Lojin} from '../pages/Teste/Lojin';
import {Register} from '../pages/Teste/Register';
import TesteModal from "../pages/Teste/TesteModal";
/* import * as serviceWorker from './serviceWorker'; */

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
                    <Route path="/detalhes/:detalhesId" element={<Produto />} />
                    <Route path="/minhasreservas" element={<MinhasReservas />} />
                    <Route path="/disponibilidade/:detalhesId" element={<DisponibilidadeCategoria />} />
                    <Route path="/disponibilidade" element={<DisponibilidadePesquisa />} />
                    <Route path="/minhaconta" element={<MinhaConta />} />
                    <Route path="/admin" element={<Teste />} />
                    <Route path="/reserva/:detalhesId" element={<Reserva />} />
                    <Route path="sandbox" element={<SandBox />} />
                    <Route path="/lojin" element={<Lojin />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/testeModal" element={<TesteModal />} />
                    <Route path="/teste" element={<Teste />} />
                    {/* <Route path="/categorias" element={<Categorias />} /> */}
                </Routes>
                <Footer />
            </HelmetProvider>
        </BrowserRouter>
    )
};

export default RouteList;