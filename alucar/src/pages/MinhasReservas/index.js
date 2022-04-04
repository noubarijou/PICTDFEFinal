import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import {useAxios} from "../../hooks/useAxios";

export const MinhasReservas = () => {
  const [reserva, setReserva] = useState(true);
  const pedidos = useAxios('/pedido');
  return (
    <>
      <Helmet>
        <title>Alucar | Minhas Reservas</title>
      </Helmet>
      <main>
        <Typography variant="h6" align="center" margin="dense">
          Minhas Reservas
        </Typography>
        {reserva ? (
            <Box p={2}>
              <Grid container spacing={3}>
                {pedidos.map(pedido => (
                  <>
                <Grid item xs={12} sm={6}>
                  <Paper >
                  <Box p={2} elevation={4}>
                    <Typography variant="h6" align="center" margin="dense">
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
          <p>Você ainda não fez nenhuma reserva</p>
        )}
        <Link to={`/minhaconta`}>
          <Button variant="contained" style={{backgroundColor: '#FBC02D', color: 'black'}}>Voltar</Button>
        </Link>
      </main>
    </>
  );
};
