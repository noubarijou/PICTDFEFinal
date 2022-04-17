import {useState, useEffect} from 'react';
import api from '../../services/api';

export const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        const getUsers = async () => {
            try {
                const response = await api.get('/clientes', {
                    signal: controller.signal
                });
                console.log(response.data)
                isMounted && setUsers(response.data);
            }catch (err) {
                console.error(err);
            }
        }
        getUsers();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

  return (
    <>
        <main>
            <h2>Users List</h2>
            {
                users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>Sem usuários para mostrar</p>
            }
        </main>
    </>
  )
}
