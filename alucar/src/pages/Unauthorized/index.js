import {useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async'

export const Unauthorized = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
  return (
    <>
    <Helmet>
        <title>Alucar | Não autorizado</title>
    </Helmet>
    <>
        <h1>Acesso não autorizado</h1>
        <p>Você não tem permissão para acessar esta página.</p>
        <button onClick={goBack}>Voltar</button>
    </>
    </>
  )
}
