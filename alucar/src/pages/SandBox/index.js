import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Paper, Box, Grid, TextField, Typography, Button} from '@material-ui/core';

export const SandBox = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Nome obrigatório"),
        lastName: Yup.string().required("Sobrenome obrigatório"),
        email: Yup.string().email("Email inválido [ex: email@email.com]").required("Email obrigatório"),
        mensagem: Yup.string().required("Mensagem obrigatória")
    });
    const {register, handleSubmit, formState:{errors}} = useForm({ resolver: yupResolver(validationSchema) });
    const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };
  return (
      <main>
    <Fragment>
        <Paper>
            <Box p={2}>
                <Typography variant="h6" align="center" margin="dense">Entre em contato</Typography>
            </Box>
        </Paper>
    </Fragment>
    </main>
  )
}
