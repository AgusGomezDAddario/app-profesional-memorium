import { React, useContext } from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material/TextField";
import { Button } from "@mui/material";
import { AnotacionContext } from "../../contexts/anotaciones";

const TextFieldCustom = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontFamily: "Gentium Plus",
    },
  },
});

export const TextFieldAnotacion = () => {
  const { anotacionRef, obtenerAnotacion, anotacionFinal, clearAnotacion } =
    useContext(AnotacionContext);

  return (
    <TextFieldCustom
      label="Anotación"
      style={{ color: "white" }}
      id="anotaciones-pacientes"
      multiline
      rows={4}
      inputRef={anotacionRef}
      variant="outlined"
      InputLabelProps={{
        style: { color: "white" },
      }}
      onChange={obtenerAnotacion}
    />
  );
};

// export default TextFieldAnotacion;
