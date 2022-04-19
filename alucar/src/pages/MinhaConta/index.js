import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

export const MinhaConta = () => {
  const user = {
    user: {
      id: 1,
      username: "usuario@dh.com.br",
      password: "umaboasenha",
      nome: "Digital",
      sobrenome: "House",
      displayname: "DH",
    },
  };
  return (
    <>
      <Helmet>
        <title>AluCar | Minha Conta</title>
      </Helmet>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        spacing={3}

      >
        <Grid item xs>
          <Typography variant="h4" align="center" margin="dense">
            Detalhes da Conta
          </Typography>
        </Grid>
        <Paper>
          <Grid item xs>
            <Box p={2} elevation={4}>
              <Typography
                variant="h6"
                align="center"
                margin="dense"

              >
                Informações Pessoais
              </Typography>
            </Box>
          </Grid>
        </Paper>

        <Grid item xs>
          <TextField
            disabled
            helperText="Nome"
            fullWidth
            id="outlined-disabled"
            label={user.user.nome}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            disabled
            helperText="Sobrenome"
            fullWidth
            id="lastName"
            label={user.user.sobrenome}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            disabled
            helperText="Email"
            fullWidth
            id="email"
            label={user.user.username}
            variant="outlined"
          />
        </Grid>
        <Grid item xs>
          <TextField
            disabled
            helperText="Iniciais (Display Name)"
            fullWidth
            id="displayName"
            label={user.user.displayname}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Link to="/minhasreservas">
            <Button
              variant="contained"
              className="butaum"
            >
              Minhas Reservas
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
