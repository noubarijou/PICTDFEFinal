import { Helmet } from "react-helmet-async";
import { useAxios } from "../../hooks/useAxios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Requisitos } from "../../components/Requisitos";
import { CardAdicionais } from "../../components/Cards/CardAdicionais";
import { Rating } from "../../components/Rating";
import { ButtonToClick } from "../../components/Buttons";
/* import { ControlledOpenSelect } from "../../components/Listas/ListaCidades"; */
import { ControlledOpenSelect } from "../../components/Listas/ListaHorarios";
import CircularProgress from '@mui/material/CircularProgress';
import { Calendario } from "../../components/Calendarios";

export const Teste = () => {
  const pedidos = useAxios("/clientes");
  const [isSubmitSuccess, setIsSubmitSuccess] = useState();
  const cidades = useAxios(`/cidades`);
  const detalhes = useAxios(`/carro`);
  const regras = require("../../assets/regras.json");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const loggedInUser = localStorage.getItem("credenciais");
  const [cidade, setCidade] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedInUser) {
      setIsSubmitSuccess(true);
    }
  }, [loggedInUser]);

  const { detalhesId } = useParams();
  const [detalhe, setDetalhe] = useState();
  useEffect(() => {
    setDetalhe(detalhesId);
    window.scrollTo(0, 0);
  }, [detalhesId]);
  const pesquisaCidade = localStorage.getItem("dadosCidade");
  const pesquisaRange = localStorage.getItem("dadosRange");
  const pesquisaStartDate = localStorage.getItem("dadosStartDate");
  const pesquisaEndDate = localStorage.getItem("dadosEndDate");
  const valorTotal = parseFloat(localStorage.getItem("adicionais"));

  console.log(isSubmitSuccess);
  console.log(pedidos);
  console.log(loggedInUser);

  return (
    <>
      <Helmet>
        <title>AluCar | Teste</title>
      </Helmet>
      <main>
        <Paper>
          <Box p={3}>
            <Typography variant="h4" align="center" margin="dense">
              Confirme seus dados
            </Typography>
          </Box>
        </Paper>
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
          <ControlledOpenSelect />
          <Calendario value="" setValue={""} />
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
                .filter((itens, index) => itens.carroId === parseInt(detalhe))
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
            <CircularProgress/>
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
