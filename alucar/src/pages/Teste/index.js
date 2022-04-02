import { Helmet } from "react-helmet-async";
import {useAxios} from "../../hooks/useAxios";
import {CardFiltros} from '../../components/CardFiltros/index';
import {CardOrdenar} from '../../components/CardOrdenar/';
export const Teste = () => {
  const pedidos = useAxios('/pedido');
  return (
    <>
      <Helmet>
        <title>AluCar | Teste</title>
      </Helmet>
      <main>
      <CardFiltros />
     
     <button type="submit" className="btn-large">Aplicar</button>
      </main>
    </>
  );
};
