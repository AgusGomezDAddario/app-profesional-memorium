import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const SelectVariants = ({ clasificacion, setClasificacion }) => {
  const handleChange = (event) => {
    setClasificacion(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="simple-select-clasification">Clasificacion</InputLabel>
        <Select
          labelId="simple-select-clasification"
          id="simple-select-clasification-id"
          value={clasificacion}
          onChange={handleChange}
          label="Clasificacion"
        >
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <MenuItem value={"mejorando"}>Mejorando</MenuItem>
          <MenuItem value={"iniciando"}>Iniciando</MenuItem>
          <MenuItem value={"empeorando"}>Empeorando</MenuItem>
          <MenuItem value={"consulta"}>Consulta</MenuItem>
          <MenuItem value={"en_alta"}>En Alta</MenuItem>
          <MenuItem value="no_iniciado">No Iniciado</MenuItem>          
        </Select>
      </FormControl>
    </div>
  );
}
