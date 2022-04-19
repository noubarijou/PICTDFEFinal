import api from '../services/api';
import useAuth from './useAuth';


export const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try{
            const response = await api('/logout', {
                withCredentials: true
            });
        }catch (err) {
            console.error(err);
        }
    }

  return logout;
}
