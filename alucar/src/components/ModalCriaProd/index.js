import "./style.scss";
import {useState} from "react";
import Modal from 'react-modal';
import vector from './img/Vector.png';

Modal.setAppElement('#root')

export const ModalCriaProd =() => {
    const [modalVisible, setModalVisible] = useState (false);

    function handleModal(){
        if(modalVisible===false){
            setModalVisible(true);
        }else{
           setModalVisible(false) 
        }
        
    }
        return ( 
        
        <div className="container">
            <button className="modalButton" onClick={handleModal}>Modal</button>
            <Modal
            isOpen = {modalVisible}
            onRequestClose = {handleModal}>
                    <div>
                        <div>
                            <img src={vector} alt="check" width={'150px'} />
                        </div>
                        <div>
                            <h5> Produto adicionado Sucesso!</h5>
                            <button></button>
                        </div>
                        <div><button onClick={handleModal}>Ok</button></div>
                    </div>        
            </Modal>
        </div>
        
     );
}

