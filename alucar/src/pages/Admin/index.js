import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet-async";

export const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Alucar | Admin</title>
      </Helmet>
      <main>
        <Typography variant="h5" align="center" margin="dense">
          Administração dos Recursos
        </Typography>

        <Grid container spacing={3} direction="row" alignItems="center">
            <Grid item xs>
          <Box p={4} elevation={4}>
              <Paper>
                <Typography variant="h6" align="center" margin="dense">
                  Remover Produto
                </Typography>
              </Paper>
          </Box>
            </Grid>
            <Grid item xs>
          <Box p={4} elevation={4}>
              <Paper>
                <Typography variant="h6" align="center" margin="dense">
                  Modificar Produto
                </Typography>
              </Paper>
          </Box>
            </Grid>
            <Grid item xs>
          <Box p={4} elevation={4}>
              <Paper>
                <Typography variant="h6" align="center" margin="dense">
                  Remover Produto
                </Typography>
              </Paper>
          </Box>
            </Grid>
            <Grid item xs>
          <Box p={4} elevation={4}>
              <Paper>
                <Typography variant="h6" align="center" margin="dense">
                  Gerenciar Usuários
                </Typography>
              </Paper>
          </Box>
            </Grid>
        </Grid>
      </main>
    </>
  );
};
