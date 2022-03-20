import "./style.scss";
import { Helmet } from "react-helmet-async";
import { Rating } from "../../components/CardCarro/components/Rating";
import DatePicker from 'react-datepicker';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import "react-datepicker/dist/react-datepicker.css";
import { Spinner } from 'react-bootstrap';
import {Mapa} from '../../components/Mapa/';
import { Reservar } from "../../components/BotaoReserva";
const location = {
  address: 'Av. Domingos Odália Filho, 301 - Centro, Osasco',
  lat: -23.5329081,
  lng: -46.774591,
}
export const Detalhes = () => {
  
  const detalhes = require("../../assets/detalhes.json");
  /* const detalhes = useAxios(`/caracteristicas`); */
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  
  const {detalhesId} = useParams();
  const [detalhe, setDetalhe] = useState();
  useEffect(()=>{
    setDetalhe(detalhesId);
  },[detalhesId])

  return (
    <>
      <Helmet>
        <title>Alucar | Detalhes</title>
      </Helmet>
      <main>
         
     
    {detalhes[detalhesId] ? (
      <>
      {detalhes.filter((item, index)=>item.id === parseInt(detalhe)).map((e) => {
        return (
          <div key={e.id} id={e.id}>
              <h1>{e.categoria}</h1>
            <span>
              {e.modelo} ou similar <Rating rating={e.rating}/>
            </span>
            <img src={e.img} alt={e.modelo} />
            <h3>
              Ideal para quem busca o aluguel de um carro com economia e
              praticidade
            </h3>
            <p>
              *Este modelo é apenas uma sugestão do grupo que também possui as
              mesmas características acima.
            </p>
            <p>
              **Garantimos reseva por grupo, não por modelo e final de placa de
              acordo com a disponibilidade da loja
            </p>
            <h2>Categoria {e.categoria} oferece</h2>
            <div>
            {"Cambio: "}{e.cambio} {" "}
            {"Ar Condicionado: "}{e.arCondicionado} {" "}
            {"Assentos: "}{e.quantidadeAssentos} {" "}
            {"Motor: "}{e.motor} {" "}
            {"Portas: "}{e.quantidadePortas}
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
          </div>
        );
      })}
      </>
      ): (<Spinner />)}
       <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
    />
    <Reservar className="btn success-btn btn-large" />
      <Mapa location={location} zoomLevel={17} />
      <h2>Requisitos para Alugar</h2>
      <p>Idade Mínima
O locatário/condutor deverá possuir idade mínima de 21 anos.

Carteira de Habilitação Nacional (CNH)
O locatário deverá apresentar seu documento de habilitação original, emitido há mais de 2 anos (CNH Definitiva), válido e dentro do prazo de vencimento.

Documento de Identidade, CPF, Passaporte
O locatário deverá apresentar seu documento RG e CPF originais e não poderá apresentar restrições de qualquer espécie junto aos órgãos de proteção ao crédito (SPC, SERASA) no momento da abertura de contrato junto a locadora. O locatário estrangeiro deverá apresentar seu documento Passaporte original e válido no momento da abertura de contrato junto a locadora.

Cartão de Crédito
O locatário deverá apresentar cartão de crédito válido, de sua titularidade, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização da caução de garantia. Não serão aceitos cartões de crédito de terceiros ou cartões não vinculados a instituições bancárias. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora.

Comprovante de Reserva
O locatário deverá apresentar à locadora uma via impressa do seu comprovante Voucher de confirmação de reserva. Este documento de confirmação assegurará ao locatário o uso de todos de serviços pré-solicitados e confirmados, assim como a disponibilidade de veículo do grupo escolhido, condições de pagamento, tarifas e descontos.

Importante
As locadoras se reservam no direito de recusar a alugar veículos a menores de idade, pessoas sem a carteira de habilitação, pessoas incapazes de demonstrar crédito para pagamento ou ainda pessoas que, na opinião da locadora, constituam um risco.</p>
                </main>
    </>
  );
};
