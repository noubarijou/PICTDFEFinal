import './style.scss'
import { Helmet } from 'react-helmet-async'
import { ModalPesquisa } from '../../components/ModalPesquisa'
import {Categorias} from '../Categorias'


export const Home = () => {
    return (
        <>
            <Helmet>
                <title>AluCar | Home</title>
            </Helmet>
            <main>
                <ModalPesquisa />
                <h1>Bem vindx à AluCar</h1>
                <Categorias />
            </main>

        </>
    )
}