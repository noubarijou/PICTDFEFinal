import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useAxios } from "../../../hooks/useAxios";

export const ControlledOpenSelect = () => {
  const [cidade, setCidade] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCidade(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const cidades = useAxios(`/cidades`);
  return (
    <div>
      <Button sx={{ display: "block", mt: 2 }} onClick={handleOpen}>
        Onde quer retirar o carro?
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Cidades</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={cidade}
          label="cidade"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Escolha a cidade</em>
          </MenuItem>
          {cidades.map((item) => {
            return (
              <div key={item.cidadesId}>
                <MenuItem
                  id={item.cidadesId}
                  data-value={item.value}
                  value={`${item.cidadesId}`}
                >
                  {`${item.cidadesNome}, ${item.estado}`}
                </MenuItem>
              </div>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
