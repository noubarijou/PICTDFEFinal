import "./style.scss";
import {useState} from "react";
import Modal from 'react-modal';
import vector from './img/Vector.png';

Modal.setAppElement('#root')

 const ModalCriaProd =() => {
    const [modalVisible, setModalVisible] = useState (false);

    function hundleModal(){
        if(modalVisible===false){
            setModalVisible(true);
        }else{
           setModalVisible(false) 
        }
        
    }
        return ( 
        
        <div className="container">
            <button className="modalButton" onClick={hundleModal}>Modal</button>
            <Modal
            isOpen = {modalVisible}
            onRequestClose = {hundleModal}>
                    <div className="modalDiv">
                        <div className="imageModal">
                            <img src={vector} alt="check" />
                        </div>
                        <div>
                            <h5> Produto adicionado Sucesso!</h5>
                            
                        </div>
                        <div className="buttonModal">
                            <button onClick={hundleModal}>Ok</button>
                            <button onClick={hundleModal}>Voltar</button>
                        </div>
                    </div>        
            </Modal>
        </div>
        
     );
}

export default ModalCriaProd;