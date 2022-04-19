import {useState, useEffect} from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import {useNavigate, useLocation} from 'react-router-dom'
/* import api from '../../services/api';*/

export const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/clientes', {
                    signal: controller.signal
                });
                console.log(response.data)
                isMounted && setUsers(response.data);
            }catch (err) {
                console.error(err);
                navigate('/login', {state: {from: location}, replace: true})
            }
        }
        getUsers();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [axiosPrivate, navigate, location]);

  return (
    <>
        <main>
            <h2>Users List</h2>
            {
                users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.clienteNome}</li>)}
                    </ul>
                ) : <p>Sem usuários para mostrar</p>
            }
        </main>
    </>
  )
}
