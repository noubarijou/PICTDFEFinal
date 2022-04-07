import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { CardOrdenar } from "../../Cards/CardOrdenar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowDownWideShort} from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const ModalOrdenar = () => {
  const [open, setOpen] = React.useState(false);
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
          {
            <>
              <FontAwesomeIcon icon={faArrowDownWideShort} />
              {"  "}Ordenar
            </>
          }
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <CardOrdenar />
          </Box>
        </Modal>
    </>
  );
};
