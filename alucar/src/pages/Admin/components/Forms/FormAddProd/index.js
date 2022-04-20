import {useState} from 'react';
import api from "../../../../../services/api";
import {useNavigate, Link} from "react-router-dom";
import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

export const FormAddProd = () => {
  const navigate = useNavigate();
  const goBack = navigate(-1);
  const [modelo, setModelo] = useState("");
  const [valor, setValor] = useState("");
  const [placa, setPlaca] = useState("");
  const [rating, setRating] = useState("");
  const [unidades, setUnidades] = useState("");
  const [categoria, setCategoria] = useState("");
  const [portas, setPortas] = useState("");
  const [assentos, setAssentos] = useState("");
  const [ar, setAr] = useState("");
  const [combustivel, setCombustivel] = useState("");
  const [cambio, setCambio] = useState("");
  const [motor, setMotor] = useState("");
  const [cor, setCor] = useState("");
  const [success, setSuccess] = useState();

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/carro/cadastrar",
        JSON.stringify({
        modelo, placa, rating, valor, unidades, categoria, portas, assentos, ar, combustivel, cambio, motor, cor
        }),
        {
          headers: { "Content-Type": "application/json" },

        }
      );
      setSuccess(true);
  } catch (err) {
      if (!err?.response) {
        setErrMsg("Erro de conexão com o servidor");
      } else if (err.response.status === 409) {
        setErrMsg("Produto já cadastrado");
      } else {
        setErrMsg("Infelizmente, você não pôde cadastrar o produto. Por favor, tente novamente mais tarde.");
      }
    }
  }  
  return (
    <>
    <main>
      <form onSubmit={handleSubmit}>
    <Box >
        <Paper>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-around"
        spacing={1}
      >
        <Grid item xs>
          <Typography variant="h4" align="center" margin="dense">
            Adicionar Produto
          </Typography>
        </Grid>
        <Grid item xs>
            {<TextField
            required
            id="outlined-required"
            helperText="Modelo"
            label="Ex: Peugeot 208"
            variant="outlined"
            onChange={(e) => setModelo(e.target.value)}
            value={modelo}
            />}
            {/* <label htmlFor='modelo'>Modelo: </label>
            <input type='text' id='modelo' /> */}
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Valor"
            label="Ex: 80"
            variant="outlined"
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Placa"
            label="Ex: QUA1J60"
            variant="outlined"
            onChange={(e) => setPlaca(e.target.value)}
            value={placa}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Rating"
            label="Ex: 4"
            variant="outlined"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            />
        </Grid>
      {  <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Unidades disponíveis"
            label="Ex: 22"
            variant="outlined"
            onChange={(e) => setUnidades(e.target.value)}
            value={unidades}
            />
        </Grid>}
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Categoria"
            label="Ex: Compacto"
            variant="outlined"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Quantidade de Portas"
            label="Ex: 4"
            variant="outlined"
            onChange={(e) => setPortas(e.target.value)}
            value={portas}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Quantidade de Assentos"
            label="Ex: 5"
            variant="outlined"
            onChange={(e) => setAssentos(e.target.value)}
            value={assentos}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Ar condicionado"
            label="Ex: Sim"
            variant="outlined"
            onChange={(e) => setAr(e.target.value)}
            value={ar}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Combustível"
            label="Ex: Flex"
            variant="outlined"
            onChange={(e) => setCombustivel(e.target.value)}
            value={combustivel}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Cambio"
            label="Ex: Manual"
            variant="outlined"
            onChange={(e) => setCambio(e.target.value)}
            value={cambio}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Motor"
            label="Ex: 1.6"
            variant="outlined"
            onChange={(e) => setMotor(e.target.value)}
            value={motor}
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Cor"
            label="Ex: Prata"
            variant="outlined"
            onChange={(e) => setCor(e.target.value)}
            value={cor}

            />
        </Grid>
        <Button onClick={handleSubmit}
                variant="contained"
                className="butaum"
              >
                Adicionar
              </Button>
              <br />
              <Link to="/admin">
        <Button 
                variant="contained"
                className="butaum"
              >
                Voltar
              </Button>
              </Link>
      </Grid>
      </Paper>
      </Box>
      </form>
      </main>
    </>
  );
};
