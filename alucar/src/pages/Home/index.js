import './style.scss'
import { Helmet } from 'react-helmet'
import { ModalPesquisa } from '../../components/ModalPesquisa'
import {CardCarro} from '../../components/CardCarro'

export const Home = () => {
    return (
        <>
            <Helmet>
                <title>AluCar | Home</title>
            </Helmet>
            <main>
                <ModalPesquisa />
                <h1>Bem vindx à AluCar</h1>
                <CardCarro />
            </main>

        </>
    )
}