import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const ModalAdmin = ({children, conteudoForm}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);}
  const handleClose = () => setOpen(false);

  return (
    <>
        <button
          className="btn-large secondary-btn filtro__btn filtro--filtrar"
          onClick={handleOpen}
        >
          {conteudoForm}
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {children}
          </Box>
        </Modal>
    </>
  );
};
