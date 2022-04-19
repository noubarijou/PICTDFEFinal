import { BrowserRouter, Routes, Route } from "react-router-dom"
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
import { Admin } from "../pages/Admin";
import { Unauthorized } from "../pages/Unauthorized";
/* import {RequireAuth} from '../services/authServices/RequireAuth';*/
/* import {PersistLogin} from '../services/authServices/PersistLogin'; */
/* import * as serviceWorker from './serviceWorker'; */
const ROLES = {
    'User': "CLIENTE",
    'Editor': "MODERADOR",
    'Admin': "ADMIN"
}

const RouteList = () => {

    return (
        <BrowserRouter>
            <HelmetProvider>
                <FiltroContext>
                    <Header />
                    <main>
                        <Routes>
                            {/* Rotas abertas */}
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/criarconta" element={<CriarConta />} />
                            <Route path="/sobre" element={<Sobre />} />
                            <Route path="/ajuda" element={<Ajuda />} />
                            <Route path="/detalhes/:detalhesId" element={<Produto />} />
                            <Route path="/disponibilidade/:detalhesId" element={<DisponibilidadeCategoria />} />
                            <Route path="/disponibilidade" element={<DisponibilidadePesquisa />} />
                            <Route path="/unauthorized" element={<Unauthorized />} />
                            <Route path="*" element={<NotFound />} />
                            {/* Rotas protegidas por autenticação */}
                            {/* <Route element={<PersistLogin />}> */}
                            {/* <Route element={<RequireAuth allowedRoles={{}}/>} > */}
                            <Route path="/minhaconta" element={<MinhaConta />} />
                            <Route path="/minhasreservas" element={<MinhasReservas />} />
                            <Route path="/reserva/:detalhesId" element={<Reserva />} />
                            {/*     </Route>    */}
                            {/*                             <Route element={<RequireAuth allowedRoles={{}}/>} > */}
                            <Route path="/minhaconta" element={<MinhaConta />} />
                            <Route path="/admin" element={<Admin />} />
                            {/*     </Route>    */}
                            {/*     </Route>    */}
                            {/* Não esquecer de tirar depois */}
                            <Route path="/teste" element={<Teste />} />
                            <Route path="sandbox" element={<SandBox />} />
                        </Routes>
                    </main>
                    <Footer />
                </FiltroContext>
            </HelmetProvider>
        </BrowserRouter>
    )
};

export default RouteList;