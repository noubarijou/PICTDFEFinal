import { BrowserRouter, Routes, Route } from "react-router-dom"
import {HelmetProvider} from 'react-helmet-async'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CriarConta } from "../pages/CriarConta";
import { Sobre } from "../pages/Sobre";
import { Ajuda } from "../pages/Ajuda";
import { Detalhe } from "../pages/Produto";
import {MinhasReservas} from "../pages/MinhasReservas"
/* import {Categorias} from "../pages/Categorias"; */

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
                <Route path="/detalhes" element={<Detalhe />} />
                <Route path="/reservas" element={<MinhasReservas />} />
                {/* <Route path="/categorias" element={<Categorias />} /> */}
            </Routes>
            <Footer />
            </HelmetProvider>
        </BrowserRouter>
    )
};

export default RouteList;