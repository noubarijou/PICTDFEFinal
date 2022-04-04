import React, { useState, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useAxiosPost } from "../../hooks/useAxios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
/* import { TextField } from "../../components/TextField"; */
import { useForm, Controller } from "react-hook-form";
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";

export const CriarConta = () => {
  const cadastro = useAxiosPost(`/clientes`);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Nome obrigatório"),
    lastName: Yup.string().required("Sobrenome obrigatório"),
    email: Yup.string()
      .email("Email inválido [ex: email@email.com]")
      .required("Email obrigatório"),
    password: Yup.string()
      .min(6, "Senha deve conter no mínimo 6 caracteres")
      .required("Senha obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Senha não confere")
      .required("Confirmação de senha obrigatória"),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data) => {
    
    console.log(JSON.stringify(data, null, 2));
    if (data) {
      /* UseAxiosPost(`/cliente`, data) */
      navigate("/login");
    }
  };
  return (
    <>
      <Helmet>
        <title>AluCar | Criar Conta</title>
      </Helmet>
      <main>
        <Fragment>
          <Paper elevation={0}>
            <Box px={3} py={2}>
              <Typography variant="h6" align="center" margin="dense">
                Crie sua conta
              </Typography>
              <form noValidate>
                <Grid
                  container
                  spacing={1}
                  direction="column"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      variant="outlined"
                      id="firstName"
                      name="firstName"
                      label="Nome"
                      fullWidth
                      margin="dense"
                      {...register("firstName")}
                      error={errors.firstName ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.firstName?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      variant="outlined"
                      id="lastName"
                      name="lastName"
                      label="Sobrenome"
                      fullWidth
                      margin="dense"
                      {...register("lastName")}
                      error={errors.lastName ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.lastName?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      variant="outlined"
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      margin="dense"
                      {...register("email")}
                      error={errors.email ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.email?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="off"
                      required
                      variant="outlined"
                      id="password"
                      name="password"
                      label="Senha"
                      type="password"
                      fullWidth
                      margin="dense"
                      {...register("password")}
                      error={errors.password ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.password?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="off"
                      required
                      variant="outlined"
                      id="confirmPassword"
                      name="confirmPassword"
                      label="Confirme sua senha"
                      type="password"
                      fullWidth
                      margin="dense"
                      {...register("confirmPassword")}
                      error={errors.confirmPassword ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.confirmPassword?.message}
                    </Typography>
                  </Grid>
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      style={{backgroundColor: '#FBC02D', color: 'black'}}
                      onClick={handleSubmit(onSubmit)}
                    >
                      Criar Conta
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Box>
          </Paper>
        </Fragment>
      </main>
    </>
  );
};
