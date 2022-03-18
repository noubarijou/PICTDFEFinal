import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Rating } from "../../components/CardCarro/components/Rating";
import DatePicker from 'react-datepicker';
import {useState} from 'react';
import "react-datepicker/dist/react-datepicker.css";
/* import CardCarro from "../../components/CardCarro";
 */
export const Detalhes = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const detalhes = require("../../assets/detalhes.json");
  return (
    <>
      <Helmet>
        <title>Alucar | Detalhes</title>
      </Helmet>
      <main>
         
      <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
    />
          
      
      {detalhes.map((item) => {
        return (
          <div key={item.id} id={item.id}>
              <h1>{item.categoria}</h1>
            <span>
              {item.modelo} ou similar <Rating rating={item.rating}/>
            </span>
            <img src={item.img} alt={item.modelo} />
            <h3>
              Ideal para quem busca o aluguel de um carro com economia e
              praticiidade
            </h3>
            <p>
              *Este modelo é apenas uma sugestão do grupo que também possui as
              mesmas características acima.
            </p>
            <p>
              **Garantimos reseva por grupo, não por modelo e final de placa de
              acordo com a disponibilidade da loja
            </p>
            <h2>Categoria Econômica oferece</h2>
            <div>
              {item.cambio} {item.arCondicionado} {item.quantidadeAssentos}{" "}
              {item.motor} {item.quantidadePortas}
            </div>
            <div>
                <h4>Proteção Básica</h4>
                <p>Proteção contra roubo, furto, incêndio, perda total, danos e/ou avarias causados exclusivamente ao veículo</p>
                <p>R$9,90/Diária</p>
                <button className="header__btn primary-btn btn-large">Adicionar</button>
            </div>
            <div>
                <h4>Proteção Premium</h4>
                <p>Proteção Básica + Redução de Coparticipação + Benefício AluCar: Proteção contra Terceiros-ALI, sem custo adicional</p>
                <p>R$24,90/Diária</p>
                <button className="header__btn primary-btn btn-large">Adicionar</button>
            </div>
            <button className="btn success-btn btn-large">Reservar</button>
          </div>
        );
      })}
      {/* <article className="card__detalhes">
                    <div className="card__img">
                        <img src={imagem} alt={"aoba"}/>
                    </div>
                </article> */}
                </main>
    </>
  );
};
