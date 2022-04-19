import {
    Paper,
    Box,
    Grid,
    Typography,
    Button,
    TextField,
  } from "@material-ui/core";
  

export const FormModProd = () => {
  return (
    <>
    <Box>
        <Paper>
        <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={3}>
            <Grid item xs>
          <Typography variant="h4" align="center" margin="dense">
            Modificar Produto
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
        <Button
                variant="contained"
                className="butaum"
              >
                Abre Nested Modal com Form
              </Button>
        </Grid>
        </Paper>
    </Box>
    </>
  )
}
