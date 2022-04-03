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
                    <div>
                        <div>
                            <img src={vector} alt="check" width={'150px'} />
                        </div>
                        <div>
                            <h5> Produto adicionado Sucesso!</h5>
                            <button></button>
                        </div>
                        <div><button onClick={hundleModal}>Ok</button></div>
                    </div>        
            </Modal>
        </div>
        
     );
}

export default ModalCriaProd;