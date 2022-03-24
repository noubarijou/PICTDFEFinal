import {Helmet} from 'react-helmet-async'
import useAxios from '../../hooks/useAxios'

export const Disponibilidade = () => {
  const detalhes = useAxios(`/carro/`);
  return (
    <>
    <Helmet>
        <title>AluCar | Disponibilidade</title>
    </Helmet>
    <main>
        <h2>Modelos disponíveis na categoria </h2>
        
        <div></div>
    </main>
    </>
  )
}
