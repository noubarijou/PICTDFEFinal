import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Rating } from "../../components/CardCarro/components/Rating";
import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap';
import { Mapa } from '../../components/Mapa/';
import { Reservar } from "../../components/BotaoReserva";
import { Link } from "react-router-dom";
/* import addDays from 'date-fns/addDays'; */
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Requisitos } from "../../components/Requisitos";
import { CardCaracteristica } from "../../components/CardCaracteristica";
import { CardAdicionais } from "../../components/CardAdicionais";
const location = {
  address: 'Av. Domingos Odália Filho, 301 - Centro, Osasco',
  lat: -23.5329081,
  lng: -46.774591,
}
export const Detalhes = () => {
  const { width } = useWindowDimensions();

  const detalhes = require("../../assets/detalhes.json");
  const regras = require("../../assets/regras.json");
  /* const detalhes = useAxios(`/caracteristicas`); */
  /* const regras = useAxios(`/regras`) */

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  useEffect(() => {
    setDetalhe(detalhesId);
    window.scrollTo(0, 0)
  }, [detalhesId])

  return (
    <>
      <Helmet>
        <title>Alucar | Detalhes</title>
      </Helmet>
      <main>
        <article className="detalhe__carro">
          {detalhes[detalhesId] ? (
            <>
              {detalhes.filter((item, index) => item.id === parseInt(detalhe)).map((e) => {
                return (
                  <div key={e.id} id={e.id}>
                    <div className="carro__categoria">
                      <h1>{e.categoria}</h1>
                    </div>
                    <div className="carro__nome">
                      <p className="btn-large">{e.modelo} ou similar </p>
                      <Rating rating={e.rating} />
                    </div>
                    <div className="carro__info">
                      <figure className="carro__img">
                        <img src={e.img} alt={e.modelo} />
                      </figure>
                      <article className="carro__slogan">
                        <h2> Ideal para quem busca o aluguel de um carro com economia e praticidade.</h2>
                      </article>
                      <p className="body-small info__aviso">
                        *Este modelo é apenas uma sugestão do grupo que também possui as
                        mesmas características acima.
                      </p>
                      <p className="body-small info__aviso">
                        **Garantimos reseva por grupo, não por modelo e final de placa de
                        acordo com a disponibilidade da loja
                      </p>
                      <div className="carro__caracteristica">
                        <h2>Categoria {e.categoria} oferece</h2>
                        <div className="caracteriscas__card">
                          <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={e.cambio} />
                          <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={(e.arCondicionado) ? "Ar condicionado" : null} />
                          <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${e.quantidadeAssentos} ${(e.quantidadeAssentos <= 1) ? "assento" : "assentos"}`} />
                          <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={e.motor} />
                          <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${e.quantidadePortas} ${(e.quantidadePortas <= 1) ? "porta" : "portas"}`} />
                        </div>
                      </div>
                      <CardAdicionais id={1} title="Proteção Básica" descricao="Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo." valor={9.90} />
                      <div>
                        <h4>Proteção Básica</h4>
                        <p>Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo</p>
                        <p>R$9,90/Diária</p>
                        <button className="header__btn primary-btn btn-large">Adicionar</button>
                      </div>
                      <div>
                        <h4>Proteção Premium</h4>
                        <p>Proteção Básica + Redução de Coparticipação + Benefício AluCar: Proteção contra Terceiros-ALI, sem custo adicional</p>
                        <p>R$24,90/Diária</p>
                        <button className="header__btn primary-btn btn-large">Adicionar</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (<Spinner />)}
          <div className="detalhes__datePicker">
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={(width > 768 ? 2 : 1)}
              selectsRange
              selectsDisabledDaysInRange
              inline />
          </div>
          <Link to={`/disponibilidade`}>
            <Reservar />
          </Link>
          <div className="detalhe__mapa">
            <Mapa location={location} zoomLevel={17} />
          </div>
          <article className="detalhes__requisitos">
            <h2>Requisitos para Alugar</h2>
            {regras.map((regra) => {
              return (
                <div className="requisitos" key={regra.id}>
                  <Requisitos title={regra.title} regra={regra.descricao} />
                </div>
              )
            })}
          </article>
        </article>
      </main>
    </>
  );
};
