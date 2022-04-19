import { useState } from "react"

export const useShowModal = () => {
    const [showModal, setShowModal] = useState(false);

    function handleClose(e) {
        e.preventDefault();
        setShowModal(!showModal);
    }
    
    return [handleClose, showModal]
}