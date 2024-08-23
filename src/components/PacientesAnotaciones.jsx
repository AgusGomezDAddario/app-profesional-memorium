import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";
import { AnotacionContext } from "../contexts/anotaciones";
import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { saveAnotacionOnBD, countItemsInTable } from '../pacientesInfo/pacientesAnotaciones.js';
import { SimpleSnackbar } from "./material-ui/SnackbarAnotaciones.jsx";
import { useRef } from "react";

const PacientesAnotaciones = () => {
  const { anotacionFinal, clearAnotacion } = useContext(AnotacionContext);
  const { id } = useParams();
  const snackbarRef = useRef();

  const triggerSnackbar = () => {
    snackbarRef.current.handleClick();
  };

  const handleButtonClick = async () => {
    await generarAnotacionBD();
    triggerSnackbar();
  };

  const generarAnotacionBD = async () => {
    const paciente_dni = id;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const date_row = `${day}/${month}/${year} ${hour}:${minutes}`;
    clearAnotacion();
    const count = await countItemsInTable();
    const id_row = (count + 1).toString();
    saveAnotacionOnBD(id_row, paciente_dni, date_row, anotacionFinal);
    triggerSnackbar();
  };

  return (
    <div
      style={{
        marginTop: "1.5rem",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        display: "grid",
        // gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        <TextFieldAnotacion />
        <Button
          variant="text"
          sx={{ color: "white" }}
          onClick={handleButtonClick}
        >
          Enviar
        </Button>
      </div>
      <OutlinedCard />
      <SimpleSnackbar ref={snackbarRef} />
    </div>
  );
};

export default PacientesAnotaciones;
