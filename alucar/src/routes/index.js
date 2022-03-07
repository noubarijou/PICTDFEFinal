import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CriarConta } from "../pages/CriarConta";
import { Sobre } from "../pages/Sobre";
import { Ajuda } from "../pages/Ajuda";
import {Categorias} from "../pages/Categorias";

const RouteList = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/criarconta" element={<CriarConta />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/ajuda" element={<Ajuda />} />
                <Route path="/categorias" element={<Categorias />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
};

export default RouteList;