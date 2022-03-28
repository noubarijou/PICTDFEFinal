import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../../components/TextField";
import { Helmet } from "react-helmet-async";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { CardAdicionais } from "../../components/CardAdicionais";
import { Rating } from "../../components/CardCarro/components/Rating";
import { Spinner } from "react-bootstrap";
import { Requisitos } from "../../components/Requisitos";

export const Reserva = () => {
  const { width } = useWindowDimensions();
  const cidades = useAxios(`/cidades`);
  const detalhes = useAxios(`/carro`);
  const regras = require("../../assets/regras.json");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [cidade, setCidade] = useState();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  useEffect(() => {
    setDetalhe(detalhesId);
    window.scrollTo(0, 0);
  }, [detalhesId]);
  /* localStorage.setItem("dadosCidade", JSON.stringify(cidade));
  localStorage.setItem("dadosRange", JSON.stringify(dateRange)); */
  const pesquisaCidade = localStorage.getItem("dadosCidade");
  const pesquisaRange = localStorage.getItem("dadosRange");
  const pesquisaStartDate = localStorage.getItem("dadosStartDate");
  const pesquisaEndDate = localStorage.getItem("dadosEndDate"); 
  const valorTotal = parseFloat(localStorage.getItem("adicionais"));
  
  return (
    <>
      <main>
        <Helmet>
          <title>Reserva</title>
        </Helmet>
        <h3>Confirme seus dados</h3>
        <div className="linha"></div>
        <Formik>
          <Form method="post">
            <TextField
              label="Nome"
              name="firstName"
              type="text"
              placeholder="Digite seu nome"
              disabled
            />
            <TextField
              label="Sobrenome"
              name="lastName"
              type="text"
              placeholder="Digite seu sobrenome"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Digite seu email"
              disabled
            />
            <div>
              <label htmlFor="where">
                <FontAwesomeIcon icon={faLocationDot} /> Onde quer retirar o
                carro:
              </label>
              <input
                type="text"
                id="where"
                placeholder="Informe uma cidade"
                list="cidades"
                onChange={(event) => setCidade(event.target.value)}
                required
              />
              <datalist id="cidades">
                {cidades.map((item) => {
                  return (
                    <div key={item.cidades_id}>
                      <option
                        data-value={item.value}
                        value={`${item.cidades_nome}, ${item.estado}`}
                      />
                    </div>
                  );
                })}
              </datalist>
            </div>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              monthsShown={width > 768 ? 2 : 1}
              selectsRange
              selectsDisabledDaysInRange
              inline
            />
            <h3>Selecione o horario de retirada</h3>
            <input
              type="text"
              id="times"
              list="horarios"
              placeholder="Escolha o horario"
              required
            />
            <datalist id="horarios">
              <option value="09:00" />
              <option value="09:30" />
              <option value="10:00" />
              <option value="10:30" />
              <option value="11:00" />
              <option value="11:30" />
              <option value="12:00" />
              <option value="12:30" />
              <option value="13:00" />
              <option value="13:30" />
              <option value="14:00" />
              <option value="14:30" />
              <option value="15:00" />
              <option value="15:30" />
              <option value="16:00" />
              <option value="16:30" />
              <option value="17:00" />
              <option value="17:30" />
              <option value="18:00" />
              <option value="18:30" />
              <option value="19:00" />
              <option value="19:30" />
              <option value="20:00" />
            </datalist>
          </Form>
        </Formik>
        <CardAdicionais
          id={1}
          title="Proteção Básica"
          descricao="Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo."
          valor={9.9}
        />
        <CardAdicionais
          id={2}
          title="Proteção Premium"
          descricao="Proteção Básica + Redução de Coparticipação + Benefício AluCar: Proteção contra Terceiros-ALI, sem custo adicional."
          valor={24.9}
        />
        <CardAdicionais
        id={3}
        title="Desprotegido"
        descricao="Não, estou disposto a correr os riscos sem a proteção do veículo."
        valor={0.0}
        />
        <article className="detalhe__carro">
          {detalhes[detalhesId] ? (
            <>
              {detalhes
                .filter((itens, index) => itens.carro_id === parseInt(detalhe))
                .map((e) => {
                  return (
                    <div key={e.carro_id} id={e.carro_id}>
                      <div className="carro__categoria">
                        <h1>{e.categorias.categorias_nome}</h1>
                      </div>
                      <div className="carro__nome">
                        <p className="btn-large">{e.modelo} ou similar </p>
                        <Rating rating={e.rating} />
                      </div>
                      <div className="carro__info">
                        <figure className="carro__img">
                          <img
                            src={e.imagens.url_imagem}
                            alt={e.imagens.titulo}
                          />
                        </figure>
                      </div>
                      <div className="carro__info_final">
                        <p>{cidade}</p>
                        <div className="linha"></div>
                        {pesquisaStartDate === null ? (<p>Check in {startDate}</p>):(<p>Check in {pesquisaStartDate}</p>)}
                        <div className="linha"></div>
                        {pesquisaEndDate === null ? (<p>Check out {endDate}</p>):(<p>Check out {pesquisaEndDate}</p>)}
                        <div className="linha"></div>
                        <p>{`Total R$${valorTotal}`}</p>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <Spinner />
          )}
          </article>
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
        
      </main>
    </>
  );
};
