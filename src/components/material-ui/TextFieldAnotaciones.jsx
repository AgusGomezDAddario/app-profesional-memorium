import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState, useRef } from "react";
import { Button } from "@mui/material";

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
  const [anotacionFinal, setAnotacionFinal] = useState("");
  const anotacionRef = useRef("");

  const clearAnotacion = () => {
    anotacionRef.current.value = "";
  };

  const obtenerAnotacion = () => {
    setAnotacionFinal(anotacionRef.current.value);
  };

  const imprimirAnotacion = () => {
    console.log(anotacionFinal);
    clearAnotacion();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <TextFieldCustom
        label="Anotación"
        id="anotaciones-pacientes"
        multiline
        rows={4}
        inputRef={anotacionRef}
        variant="outlined"
        onChange={obtenerAnotacion}
      />
      <Button
        variant="text"
        sx={{ color: "white" }}
        onClick={imprimirAnotacion}
      >
        Enviar
      </Button>
    </div>
  );
};
