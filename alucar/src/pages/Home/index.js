import './style.scss'
import { Helmet } from 'react-helmet-async'
import { ModalPesquisa } from '../../components/ModalPesquisa'
import { CardCategoria } from '../../components/CardCategoria'
import { Carousel } from '../../components/Carousel'
import useAxios from '../../hooks/useAxios'
import { CardCarro } from '../../components/CardCarro'
import { CardMontadora } from '../../components/CardMontadora'


export const Home = () => {

    const categoria = useAxios("");
    const modelo = useAxios("");
    const montadora = useAxios("");

    if (!categoria || !categoria.length) return null;
    if (!modelo || !modelo.length) return null;
    if (!montadora || !montadora.length) return null;

    return (
        <>
            <Helmet>
                <title>AluCar | Home</title>
            </Helmet>
            <main>
                <ModalPesquisa />
                <h1>Bem vindx à AluCar</h1>
                <h2>Principais Categorias</h2>
                {/* carrossel - categoria para liberar quando a api estiver pronta */}
                {/* categoria.map((item) => {
                    const {id, imagem, categoria, preco} = item;

                    return(
                        <Carousel>
                            <CardCategoria id={id} imagem={imagem} categoria={categoria} preco={preco} />
                        </Carousel>
                    )
                }) */}
                <Carousel>
                    <CardCategoria id={1} imagem="https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png" categoria="Compactos" preco="40,00" />
                    <CardCategoria id={2} imagem="https://static.rentcars.com/imagens/carros/volkswagen_gol-2020-2021.png" categoria="Econômicos" preco="40,00" />
                    <CardCategoria id={3} imagem="https://static.rentcars.com/imagens/carros/jeep-compass.jpg" categoria="SUVs" preco="40,00" />
                    <CardCategoria id={4} imagem="https://static.rentcars.com/imagens/carros/fiat-fiorino.png" categoria="Cargos" preco="40,00" />
                </Carousel>

                <h2>Principais Modelos</h2>
                <Carousel>
                    <CardCarro id={1} imagem="https://www.toyotafd.com/wp-content/uploads/2020/08/2023-Toyota-Corolla-Exterior-1.png" modelo="Corolla" descricao="Motor 1.8 Hybrid Flex" rating={4} />
                    <CardCarro id={2} imagem="https://www.toyotafd.com/wp-content/uploads/2020/08/2023-Toyota-Corolla-Exterior-1.png" modelo="Corolla" descricao="Motor 1.8 Hybrid Flex" rating={3} />
                    <CardCarro id={3} imagem="https://www.toyotafd.com/wp-content/uploads/2020/08/2023-Toyota-Corolla-Exterior-1.png" modelo="Corolla" descricao="Motor 1.8 Hybrid Flex" rating={4} />
                    <CardCarro id={4} imagem="https://www.toyotafd.com/wp-content/uploads/2020/08/2023-Toyota-Corolla-Exterior-1.png" modelo="Corolla" descricao="Motor 1.8 Hybrid Flex" rating={2} />
                </Carousel>

                {/* modelo.map((item) => {
                    const { id, imagem, modelo, descricao, rating } = item;

                    return(
                        <Carousel>
                            <CardCarro id={id} imagem={imagem} modelo={modelo} descricao={descricao} rating={rating} />
                        </Carousel>
                    )
                }) */}
                {/* montadora.map((item) => {
                    const {id, imagem, nome} = item;

                    return(
                        <Carousel>
                            <CardMontadora id={id} imagem={imagem} nome={nome} />
                        </Carousel>
                    )
                }) */}
            </main>

        </>
    )
}