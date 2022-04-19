import {Outlet} from 'react-router-dom';
import {useState, useEffect} from 'react';
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';

export const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth, persist} = useAuth();


    useEffect(() => {
        let isMounted = true;
        const verifyRefreshtoken = async () => {
        try{
            await refresh();
        }catch (err) {
            console.error(err);
        }
        finally {
            isMounted && setIsLoading(false);
        }
    }
    !auth?.accessToken && persist ? verifyRefreshtoken() : setIsLoading(false);
}, []);
        return (
            <>
            {isLoading ? <p>Loading...</p> : <Outlet />}
            </>
        )
}