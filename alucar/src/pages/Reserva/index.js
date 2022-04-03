import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Requisitos } from "../../components/Requisitos";
import { CardAdicionais } from "../../components/Cards/CardAdicionais";
import { Rating } from "../../components/Rating";
import {useAxios} from "../../hooks/useAxios";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { ButtonToClick } from '../../components/Buttons';
/* icones - font awesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import CircularProgress from '@mui/material/CircularProgress';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { SelecionarHorarios } from "../../components/Listas/ListaHorarios";
import {Calendario} from '../../components/Calendarios';
import { format } from 'date-fns'


export const Reserva = () => {
  const loggedInUser = localStorage.getItem('credenciais');
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const cidades = useAxios(`/cidades`);
  const detalhes = useAxios(`/carro`);
  const regras = require("../../assets/regras.json");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [cidade, setCidade] = useState();
  const [dados, setDados] = useState([]);
  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  useEffect(() => {
    setDetalhe(detalhesId);
    window.scrollTo(0, 0);
  }, [detalhesId]);
  console.log(loggedInUser);


  const pesquisaCidade = JSON.parse(localStorage.getItem("dadosCidade"));
  const pesquisaRange = JSON.parse(localStorage.getItem("dadosRange"));
  const pesquisaStartDate = format(new Date(JSON.parse(localStorage.getItem("dadosStartDate"))), "dd/MM/yyyy");
  const pesquisaEndDate = format(new Date(JSON.parse(localStorage.getItem("dadosEndDate"))), "dd/MM/yyyy");

  const valorTotal = parseFloat(localStorage.getItem("adicionais"));
  


 

  return (
    <>
      <main>
        <Helmet>
          <title>Reserva</title>
        </Helmet>
          <Box p={3}>
            <Typography variant="h5" align="center" margin="dense">
              Confirme seus dados
            </Typography>
          </Box>
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs>
            <TextField
              disabled
              id="nome"
              label="Nome"
              type="text"
              placeholder="Digite seu nome"
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              id="sobrenome"
              label="Sobrenome"
              type="text"
              placeholder="Digite seu sobrenome"
            />
          </Grid>
          <Grid item xs>
            <TextField
              disabled
              id="email"
              label="Email"
              type="email"
              placeholder="Digite seu email"
            />
          </Grid>
        <Grid item xs>
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
                    <div key={item.cidadesId}>
                      <option
                      id={item.cidadesId}
                        data-value={item.value}
                        value={`${item.cidadesNome}, ${item.estado}`}
                      />
                    </div>
                  );
                })}
              </datalist>
            </Grid>
            <SelecionarHorarios />
            <Calendario value={dateRange} setValue={setDateRange}/>
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
                .filter((itens, index) => itens.carroId === parseInt(detalhesId))
                .map((e) => {
                  return (
                    <div key={e.carroId} id={e.carroId}>
                      <div className="carro__categoria">
                        <h1>{e.categorias.categoriasNome}</h1>
                      </div>
                      <div className="carro__nome">
                        <p className="btn-large">{e.modelo} ou similar </p>
                        <Rating rating={e.rating} />
                      </div>
                      <div className="carro__info">
                        <figure className="carro__img">
                          <img
                            src={e.imagens.urlImagem}
                            alt={e.imagens.titulo}
                          />
                        </figure>
                      </div>
                      <div className="carro__info_final">
                        <p>{cidade}</p>
                        <div className="linha"></div>
                        {pesquisaStartDate === '' ? (<p>Check in {startDate}</p>):(<p>Check in {pesquisaStartDate}</p>)}
                        <div className="linha"></div>
                        {pesquisaEndDate === '' ? (<p>Check out {endDate}</p>):(<p>Check out {pesquisaEndDate}</p>)}
                        <div className="linha"></div>
                        <p>{`Total R$${valorTotal}`}</p>
                      </div>
                    </div>
                  );
                })}
            </>
          ) : (
            <CircularProgress />
          )}
          </article>
          <ButtonToClick classes={"success-btn"} urlTo={`/minhasreservas/`}>Reservar</ButtonToClick>
          <article className="detalhes__requisitos">
            <h2>Requisitos para Alugar</h2>
            {regras.map((regra) => {
              return (
                <div className="requisitos" key={regra.id}>
                  <Requisitos id={regra.id} title={regra.title} regra={regra.descricao} />
                </div>
              )
            })}
          </article>
        </Grid>
      </main>
    </>
  );
};
