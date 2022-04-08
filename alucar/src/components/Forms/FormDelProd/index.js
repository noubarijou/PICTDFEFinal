    import {
    Paper,
    Box,
    Grid,
    Typography,
    Button,
    TextField,
  } from "@material-ui/core";
  

export const FormDelProd = () => {
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
            Remover Produto
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
                Remover Produto
              </Button>
        </Grid>
        </Paper>
    </Box>
    </>
  )
}
