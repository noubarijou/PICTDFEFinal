import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export const ControlledOpenSelect = () => {
  const [horario, setHorario] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setHorario(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} style={{color: 'black'}} onClick={handleOpen}>
            Selecione o horário de retirada
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Horário</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={horario}
          label="Horario"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecionar hora</em>
          </MenuItem>
          <MenuItem value={9}>09:00</MenuItem>
          <MenuItem value={9.30}>09:30</MenuItem>
          <MenuItem value={10}>10:00</MenuItem>
          <MenuItem value={10.30}>10:30</MenuItem>
          <MenuItem value={11}>11:00</MenuItem>
          <MenuItem value={11.30}>11:30</MenuItem>
          <MenuItem value={12}>12:00</MenuItem>
          <MenuItem value={12.30}>12:30</MenuItem>
          <MenuItem value={13}>13:00</MenuItem>
          <MenuItem value={13.30}>13:30</MenuItem>
          <MenuItem value={14}>14:00</MenuItem>
          <MenuItem value={14.30}>14:30</MenuItem>
          <MenuItem value={15}>15:00</MenuItem>
          <MenuItem value={15.30}>15:30</MenuItem>
          <MenuItem value={16}>16:00</MenuItem>
          <MenuItem value={16.30}>16:30</MenuItem>
          <MenuItem value={17}>17:00</MenuItem>
          <MenuItem value={17.30}>17:30</MenuItem>
          <MenuItem value={18}>18:00</MenuItem>
          <MenuItem value={18.30}>18:30</MenuItem>
          <MenuItem value={19}>19:00</MenuItem>
          <MenuItem value={19.30}>19:30</MenuItem>
          <MenuItem value={20}>20:00</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
