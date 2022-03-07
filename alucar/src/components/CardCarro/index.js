import {useState} from 'react'
import Detalhes from "../../detalhes.json"
import {DetalhesPopUp} from "../DetalhesPopUp";

export const CardCarro = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopUp = () => {
        setIsOpen(!isOpen);
    }
  return (
    <>
    <article>
        <div className="alinhadoEsquerda">
        <img className="Onix" src="https://static.rentcars.com/imagens/carros/chevrolet_onix-2020-2021.png" alt={"Chevrolet Onix"} />
        </div>
        <div className="alinhadoDireita">
        <p>Compactos</p>
        <p>Chevrolet Onix</p>
        <p>Disponível</p>
        <p>Ano 2020/21</p>
        </div>
        <div>
        <input
      type="button"
      value="Detalhes"
      onClick={togglePopUp}
    />
    {isOpen && <DetalhesPopUp
      content={<>
        <p>{Detalhes.map(detalhe => (<li key={detalhe.id}>{detalhe.img} {detalhe.categoria} {detalhe.disponibilidade} {detalhe.modelo} {detalhe.combustivel} {detalhe.descricao}</li>))}</p>
        <button>Funcionalidade XYZ</button>
      </>}
      handleClose={togglePopUp}
    />}
  
        </div>
    </article>
    </>
  )
}

