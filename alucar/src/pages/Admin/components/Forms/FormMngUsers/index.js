import {
    Paper,
    Box,
    Grid,
    Typography,
    Button,
    TextField,
  } from "@material-ui/core";
  

export const FormMngUsers = () => {
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
            Modificar Usuário
          </Typography>
        </Grid>
        <Grid item xs>
            <TextField
            required
            id="outlined-required"
            helperText="Nome"
            label="Jonas Antunes"
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