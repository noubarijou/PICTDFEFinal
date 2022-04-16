import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FormAddProd } from "../../components/Forms/FormAddProd";
import { FormDelProd } from "../../components/Forms/FormDelProd";
import { FormMngUsers } from "../../components/Forms/FormMngUsers";
import { FormModProd } from "../../components/Forms/FormModProd";
import { ModalAdmin } from "../../components/Modal/ModalAdmin";

export const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Alucar | Admin</title>
      </Helmet>
      <main>
        <Typography variant="h5" align="center" margin="dense">
          Administração de Recursos
        </Typography>

        <Grid container spacing={3} direction="column" alignItems="center">
            <Grid item xs>
            <ModalAdmin conteudoForm={"Adicionar Produto"}><FormAddProd/></ModalAdmin>
            </Grid>
            <Grid item xs>
            <ModalAdmin conteudoForm={"Modificar Produto"}><FormModProd /></ModalAdmin>
            </Grid>
            <Grid item xs>
            <ModalAdmin conteudoForm={"Remover Produto"}><FormDelProd /></ModalAdmin>
            </Grid>
            <Grid item xs>
            <ModalAdmin conteudoForm={"Gerenciar Usuários"}><FormMngUsers/></ModalAdmin>
            </Grid>
        </Grid>
      </main>
    </>
  );
};
