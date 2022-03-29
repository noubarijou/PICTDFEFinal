import { useState } from "react";
import {useAxios} from "../../hooks/useAxios";
import axios from "axios";
import { CardCategoria } from "../../components/CardCategoria";

export const Teste = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const cidades = useAxios(`/clientes`);
  const categorias = useAxios(`/categorias`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", response.data);
    console.log(response.data);
  };
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  /*  console.log(cidades) */
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {categorias.map((item) => {
        return (
          <div key={item.categorias_id}>
            <CardCategoria
              id={item.categorias_id}
              imagem={item.urlImgModelo}
              categoria={item.categoriasNome}
              preco={item.preco}
            />
          </div>
        );
      })}
    </main>
  );
};
