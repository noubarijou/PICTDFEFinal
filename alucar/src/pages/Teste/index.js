import { useState } from "react";
import useAxios from "../../hooks/useAxios";

export const Teste = () => {
  const [cidade, setCidade] = useState();
  const cidades = useAxios(`/cidades`);
  
  return (
    
    <main>
    
      <input
        list="cidades"
        type="text"
        id="where"
        onChange={(event) => setCidade(event.target.value)}
        required
      />
      <datalist id="cidades">
        {cidades.map((cidade) => {
            console.log(cidade)
          return (
            <div key={cidade.cidades_id}>
              <option
                data-value={cidade.value}
                value={`${cidade.cidades_nome}, ${cidade.estado}`}
              />
            </div>
          );
        })}
      </datalist>
    </main>
  );
};
