import React, {Fragment} from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Paper, Box, Grid, TextField, Typography, Button} from '@material-ui/core';
import '../../index.scss';

export const Ajuda = () => {
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
    <Fragment>
        <Paper>
            <Box p={2}>
                <Typography variant="h6" align="center" margin="dense">Entre em contato</Typography>
                <Grid container spacing={2} direction="column" alignItems="center">
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                            name="firstName"
                            label="Nome"
                            id="firstName"
                            required
                            fullWidth
                            margin="dense"
                            {...register('firstName')}
                            error={errors.firstName ? true : false}
                            />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                        name="lastName"
                        label="Sobrenome"
                        id="lastName"
                        required
                        fullWidth
                        margin="dense"
                        {...register('lastName')}
                        error={errors.lastName ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                        name="email"
                        label="Email"
                        id="email"
                        required
                        fullWidth
                        margin="dense"
                        {...register('email')}
                        error={errors.email ? true : false}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                        variant="outlined"
                        name="mensagem"
                        label="Mensagem"
                        id="mensagem"
                        required
                        fullWidth
                        margin="dense"
                        {...register('mensagem')}
                        error={errors.mensagem ? true : false}
                        rows={6}
                        multiline
                        />
                    </Grid>
                <Box mt={3}>
            <Button
              variant="contained"
              style={{backgroundColor: '#FBC02D', color: 'black'}}
              onClick={handleSubmit(onSubmit)}
            >
              Enviar
            </Button>
          </Box>
                </Grid>
            </Box>
        </Paper>
    </Fragment>
  )
}