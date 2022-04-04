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
<<<<<<< HEAD
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
=======
                    <div>
                        <div>
                            <img src={vector} alt="check" width={'150px'} />
                        </div>
                        <div>
                            <h5> Produto adicionado Sucesso!</h5>
                            <button></button>
                        </div>
                        <div><button onClick={hundleModal}>Ok</button></div>
>>>>>>> 3566b2b69cd94b6411eb2a728d642098a544e461
                    </div>        
            </Modal>
        </div>
        
     );
}

export default ModalCriaProd;