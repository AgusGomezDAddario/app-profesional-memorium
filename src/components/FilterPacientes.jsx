import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["Gentium Plus"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "white",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export const SelectFiltrado = ({ filtrado, setFiltrado }) => {
  const handleChange = (event) => {
    setFiltrado(event.target.value);
  };

  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <h2 className="h2">Filtrado de pacientes</h2>
      <FormControl sx={{ m: 1, minWidth: "170px" }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={filtrado}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value="mejorando">Mejorando</MenuItem>
          <MenuItem value="iniciando">Iniciando</MenuItem>
          <MenuItem value="empeorando">Empeorando</MenuItem>
          <MenuItem value="consulta">Consulta</MenuItem>
          <MenuItem value="en_alta">En Alta</MenuItem>          
          <MenuItem value="no_iniciado">No Iniciado</MenuItem>          
        </Select>
      </FormControl>
    </div>
  );
}
