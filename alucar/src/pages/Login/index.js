import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {useAxios} from "../../hooks/useAxios";
import * as Yup from "yup";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button
} from '@material-ui/core';

export const Login = () => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState();
  const login = useAxios(`/clientes`);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email inválido [ex: email@email.com]")
      .required("Email obrigatório"),
    password: Yup.string()
      .min(6, "Senha deve conter no mínimo 6 caracteres")
      .required("Senha obrigatória"),
  });
  const credentials = {
    user: {
      id: 1,
      username: "usuario@dh.com.br",
      password: "umaboasenha",
      nome: "Digital",
      sobrenome: "House",
      displayname: "DH",
    },
  };
  const {register, handleSubmit, formState: {errors} } = useForm({resolver:yupResolver(validationSchema)})
  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("credenciais", JSON.stringify(data));
    const formdata = localStorage.getItem("credenciais");
    if ((
      data.email !== credentials.user.username ||
      data.password !== credentials.user.password
    )) {
      setIsSubmitSuccess(false);
    } else {
      setIsSubmitSuccess(true);
      navigate("/");
      window.location.reload();
      console.log(isSubmitSuccess)
    }
  }
  return (
    <>
      <Helmet>
        <title>AluCar | Login</title>
      </Helmet>
      <main>
          {isSubmitSuccess ? (
            navigate("/")) : (
            <Paper>
              <Box px={3} py={2}>
                <Typography variant="h4" align="center" margin="dense">
                  Entre em sua conta
                </Typography>
                <Grid container spacing={1} direction="column" alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <TextField
                    required
                      name="email"
                      label="Email"
                      id="email"
                      variant="outlined"
                      fullWidth
                      margin="dense"
                      {...register('email')}
                      error={errors.fullname?true:false}
                      />
                      <Typography variant="inherit" color="textSecondary">{errors.email?.message}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="password"
                      label="Senha"
                      id="password"
                      variant="outlined"
                      type="password"
                      fullWidth
                      margin="dense"
                      {...register('password')}
                      error={errors.password?true:false}
                      />
                      <Typography variant="inherit" color="textSecondary">{errors.password?.message}</Typography>
                  </Grid>
                <Box mt={3}>
                  <Button
                    variant="contained"
                    style={{backgroundColor: '#FBC02D', color: 'black'}}
                    onClick={handleSubmit(onSubmit)}
                  >Entrar</Button>
                </Box>
                </Grid>
              </Box>
            </Paper>)}
      </main>
    </>
  );
};
