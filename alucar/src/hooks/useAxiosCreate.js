import {useState, useEffect} from 'react';
import axios from 'axios';

const baseURL = 'http://184.72.115.9:8080';

export const useAxiosCreate = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get(`${baseURL}/clientes`).then((response)=>{
            setPost(response.data);
    });
    }, []);
    const createUser = () => {
        axios
            .post(`${baseURL}/clientes/`, {
                clienteNome: `${post.clienteNome}`,
                clienteSobrenome: 'lastName',
                clienteEmail: 'email',
                senha: 'password',
            })
            .then((response) => {
                setPost(response.data);
            });

    }
  return (
    <>

    </>
  )
}
