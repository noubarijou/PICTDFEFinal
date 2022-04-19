import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Rating } from "../../components/Rating";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Mapa } from '../../components/Mapa/';
import { ButtonToClick } from '../../components/Buttons';
/* import addDays from 'date-fns/addDays'; */
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { Requisitos } from "../../components/Requisitos";
import { CardCaracteristica } from "../../components/Cards/CardCaracteristica";
import { CardAdicionais } from "../../components/Cards/CardAdicionais";
import { useAxios } from "../../hooks/useAxios";
import { CalendarStatic } from "../../components/Calendarios";

const location = {
  address: 'Av. Domingos Odália Filho, 301 - Centro, Osasco',
  lat: -23.5329081,
  lng: -46.774591,
}
export const Produto = () => {
  /* verifica o tamanho da tela */
  const { width } = useWindowDimensions();
  /* AXIOS */
  const regras = require("../../assets/jsons/regras.json");
  const detalhes = useAxios(`/carro`);

  /* Variável para guardar as datas recebidas */
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  /* Salvar no localStorage as datas*/
  localStorage.setItem("dadosRange", JSON.stringify(dateRange));
  localStorage.setItem("dadosStartDate", JSON.stringify(startDate));
  localStorage.setItem("dadosEndDate", JSON.stringify(endDate));

  /* Parametro da página, no caso o id de cada carro */
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
      <>
        <article className="detalhes__carro">
          {detalhes[detalhesId] ? (
            <>
              {detalhes.filter((item, index) => item.carroId === parseInt(detalhe)).map((e) => {
                return (
                  <div key={e.carroId} id={e.carroId}>
                    <div className="detalhe__categoria">
                      <h1>{e.categorias.categoriasNome}</h1>
                    </div>
                    <div className="detalhe__nome">
                      <p className="btn-large">{e.modelo} ou similar </p>
                      <Rating rating={e.rating} />
                    </div>
                    {width <= 992 ?
                      <>
                        <div className="detalhe__info">
                          <figure className="info__img">
                            <img src={e.imagens.urlImagem} alt={e.imagens.titulo} />
                          </figure>
                          <article className="info__slogan">
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
                            <h2>Categoria {e.categorias.categoriasNome} oferece</h2>
                            <div className="caracteriscas__card">
                              <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={e.caracteristicas.cambio} />
                              {e.arCondicionado ? <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={e.arCondicionado ? "Ar Condicionado" : null} /> : null}
                              <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${e.caracteristicas.qtdeAssento} ${(e.caracteristicas.qtdeAssento <= 1) ? "assento" : "assentos"}`} />
                              <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={e.caracteristicas.motor} />
                              <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${e.caracteristicas.qtdePorta} ${(e.caracteristicas.qtdePorta <= 1) ? "porta" : "portas"}`} />
                            </div>
                          </div>
                          <CardAdicionais id={1} title="Proteção Básica" descricao="Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo." valor={9.90} />
                          <CardAdicionais id={2} title="Proteção Premium" descricao="Proteção Básica + Redução de Coparticipação + Benefício AluCar: Proteção contra Terceiros-ALI, sem custo adicional." valor={24.90} />
                          <CardAdicionais id={3} title="Desprotegido" descricao="Não, estou disposto a correr os riscos sem a proteção do veículo." valor={0.0} />
                        </div>
                      </>
                      :
                      <>
                        <div className="detalhe__info">
                          <article className="info__principal">
                            <figure className="info__img">
                              <img src={e.imagens.urlImagem} alt={e.imagens.titulo} />
                            </figure>
                            <div className="info__caracteristica">
                              <div className="carro__caracteristica">
                                <h2>Categoria {e.categorias.categoriasNome} oferece</h2>
                                <div className="caracteriscas__card">
                                  <CardCaracteristica icon="cambio" carcteristica="Tipo de cambio" carcteristicaDescricao={e.caracteristicas.cambio} />
                                  {e.arCondicionado ? <CardCaracteristica icon="ar condicionado" carcteristica="Ar condicionado" carcteristicaDescricao={e.arCondicionado ? "Ar Condicionado" : null} /> : null}
                                  <CardCaracteristica icon="assento" carcteristica="Quantidade de assento" carcteristicaDescricao={`${e.caracteristicas.qtdeAssento} ${(e.caracteristicas.qtdeAssento <= 1) ? "assento" : "assentos"}`} />
                                  <CardCaracteristica icon="motor" carcteristica="Motor" carcteristicaDescricao={e.caracteristicas.motor} />
                                  <CardCaracteristica icon="porta" carcteristica="Quantidade de portas" carcteristicaDescricao={`${e.caracteristicas.qtdePorta} ${(e.caracteristicas.qtdePorta <= 1) ? "porta" : "portas"}`} />
                                </div>
                              </div>
                              <CardAdicionais id={1} title="Proteção Básica" descricao="Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo." valor={9.90} />
                              <CardAdicionais id={2} title="Proteção Premium" descricao="Proteção Básica + Redução de Coparticipação + Benefício AluCar: Proteção contra Terceiros-ALI, sem custo adicional." valor={24.90} />
                              <CardAdicionais id={3} title="Desprotegido" descricao="Não, estou disposto a correr os riscos sem a proteção do veículo." valor={0.0} />
                            </div>
                          </article>
                          <article className="info__slogan">
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
                        </div>
                      </>}
                  </div>
                );
              })}
            </>
          ) : (null)}
          <div className="detalhes__datePicker">
            <CalendarStatic value={dateRange} setValue={setDateRange} />
          </div>
          <ButtonToClick classes={"success-btn detalhe__btn"} urlTo={`/reserva/${detalhesId}`}>Reservar</ButtonToClick>
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
      </>
    </>
  );
};
