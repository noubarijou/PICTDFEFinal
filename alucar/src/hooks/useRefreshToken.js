import api from '../services/api';
import useAuth from './useAuth';

export const useRefreshToken = () => {
    const { setAuth } = useAuth;

    const refresh = async () => {
        const response = await api.get('/refresh', {
            withCredentials: false
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken)
            return {...prev, accessToken: response.data.accessToken};
        })
        return response.data.accessToken;
    }

    return refresh;

}