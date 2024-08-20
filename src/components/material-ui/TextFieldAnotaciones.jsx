import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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
  return (
    <TextFieldCustom
      label="Anotación"
      id="anotaciones-pacientes"
      multiline
      rows={4}
    />
  );
};
