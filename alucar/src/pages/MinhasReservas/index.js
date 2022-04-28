import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {useNavigate, Link} from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { useAxios } from "../../hooks/useAxios";

export const MinhasReservas = () => {
  const navigate = useNavigate();
  const pedidos = useAxios('/pedido');
  console.log(pedidos)
  const handleNavigate = () => {
    navigate(-1);
  }
  const sucesso = 'https://alucar-t1-g4.s3.amazonaws.com/success-vector.svg';
  const [success, setSuccess] = useState(localStorage.getItem('success'));
  
  console.log(success);
  const handleClick = () => {
    window.location.reload();
    setSuccess(false);
    console.log(success);  
  }

  
  return (
    <>
      <Helmet>
        <title>Alucar | Minhas Reservas</title>
      </Helmet>
      {success ? (
        <>
      <img src={sucesso} alt="sucesso" className="sucesso"/>
      <h1 className="sucesso-msg">Reserva realizada com Sucesso</h1>
      <p>
        <Link to="/"><Button onClick={handleClick} variant="contained">Voltar para a página incial</Button></Link><br /> <br />
        <Link to="/minhasreservas"><Button variant="contained">Ver minhas reservas</Button></Link>
      </p>
        </>
      ) : (
        <>
        <Typography variant="h6" align="center" margin="dense">
          Minhas Reservas
        </Typography>
        {pedidos ? (
          <Box p={2}>
          <Grid container spacing={3}>
          {pedidos.map((pedido, i) => (
            <>
                  <Grid item xs={12} sm={6} >
                    <Paper >
                      <Box p={2} elevation={4} key={i}>
                        <Typography variant="h6" align="center" margin="dense" >
                          {pedido.carro.modelo}
                        </Typography>
                        <Box>
                          <img src={pedido.carro.imagens.urlImagem} alt={pedido.carro.modelo}></img>
                        </Box>
                        <Typography variant="inherit" color="textSecondary">
                          R$ {pedido.carro.categorias.preco},00
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </>
              ))}
              </Grid>
              </Box>
              ) : (
                <p className="btn-large">Você ainda não fez nenhuma reserva</p>
                )}
        {/* <Link to={navigate(from, { replace: true })}> */}
          <Button onClick={handleNavigate} variant="contained">Voltar</Button>
        {/* </Link> */}
      </>
        )}
    </>
  );
};
