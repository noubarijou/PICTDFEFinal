import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
  const [reserva, setReserva] = useState(true);
  const pedidos = useAxios('/pedido');
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleNavigate = () => {
    navigate(from, { replace: true })
  }
  
  return (
    <>
      <Helmet>
        <title>Alucar | Minhas Reservas</title>
      </Helmet>
      <>
        <Typography variant="h6" align="center" margin="dense">
          Minhas Reservas
        </Typography>
        {reserva ? (
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
    </>
  );
};
