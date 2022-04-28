import api from '../../services/api'
import {Users} from '../Admin/components/Users';
import useAuth from '../../hooks/useAuth';
import jwt_decode from 'jwt-decode';

export const Teste = () => {
  const {auth} = useAuth();
  console.log(auth);
  let token = auth.accessToken;
  let decoded = jwt_decode(token);
  console.log(token);
  return (
    <>      
    <main>

    </main>
    </>
  );
};
