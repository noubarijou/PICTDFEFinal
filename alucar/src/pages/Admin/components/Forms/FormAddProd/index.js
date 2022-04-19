import {
  Paper,
  Box,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";

export const FormAddProd = () => {
  return (
    <>
    <Box>
        <Paper>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={3}
      >
        <Grid item xs>
          <Typography variant="h4" align="center" margin="dense">
            Adicionar Produto
          </Typography>
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Modelo"
            label="Ex: Peugeot 208"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Modelo"
            label="Ex: Peugeot 208"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Valor"
            label="Ex: 80"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Placa"
            label="Ex: QUA1J60"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Rating"
            label="Ex: 4"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Unidades disponíveis"
            label="Ex: 22"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Categoria"
            label="Ex: Compacto"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Quantidade de Portas"
            label="Ex: 4"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Quantidade de Assentos"
            label="Ex: 5"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Ar condicionado"
            label="Ex: Sim"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Combustível"
            label="Ex: Flex"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Cambio"
            label="Ex: Manual"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Motor"
            label="Ex: 1.6"
            variant="outlined"
            />
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Cor"
            label="Ex: Prata"
            variant="outlined"
            />
        </Grid>
        <Button
                variant="contained"
                className="butaum"
              >
                Adicionar
              </Button>
      </Grid>
      </Paper>
      </Box>
    </>
  );
};
