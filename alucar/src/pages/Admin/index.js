import { Grid, Typography } from "@material-ui/core";
import { Helmet } from "react-helmet-async";
/* import { FormAddProd } from "./components/Forms/FormAddProd";
import { FormDelProd } from "./components/Forms/FormDelProd";
import { FormMngUsers } from "./components/Forms/FormMngUsers";
import { FormModProd } from "./components/Forms/FormModProd";
import { ModalAdmin } from "../../components/Modal/ModalAdmin";
import { Users } from './components/Users'; */
import {Link, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

export const Admin = () => {
  const {auth, setAuth} = useAuth();
  const navigate = useNavigate();
  console.log(auth?.roles)
  return (
    <>
      <Helmet>
        <title>Alucar | Admin</title>
      </Helmet>
     {/*  {auth?.roles !== "ADMIN" ? (
        navigate("/unauthorized")
      ) : (
        <> */}
        <Typography variant="h5" align="center" margin="dense">
        Administração de Recursos
      </Typography>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item xs>
          <Link to="/admin/addprod"><button>Adicionar Produto</button></Link>
          {/* <ModalAdmin conteudoForm={"Adicionar Produto"}><FormAddProd /></ModalAdmin> */}
        </Grid>
        <Grid item xs>
        <Link to="/admin/modprod"><button>Modificar Produto</button></Link>
          {/* <ModalAdmin conteudoForm={"Modificar Produto"}><FormModProd /></ModalAdmin> */}
        </Grid>
        <Grid item xs>
        <Link to="/admin/delprod"><button>Remover Produto</button></Link>
          {/* <ModalAdmin conteudoForm={"Remover Produto"}><FormDelProd /></ModalAdmin> */}
        </Grid>
        <Grid item xs>
        <Link to="/admin/mngusers"><button>Gerenciar Usuarios</button></Link>
          {/* <ModalAdmin conteudoForm={"Gerenciar Usuários"}><FormMngUsers /></ModalAdmin> */}
        </Grid>
      </Grid>
        </>
     /*    )}
    </> */
  );
};
