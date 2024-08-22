import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";
import { AnotacionContext } from "../contexts/anotaciones";
import { Button } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { saveAnotacionOnBD, countItemsInTable } from '../pacientesInfo/pacientesAnotaciones.js';

const PacientesAnotaciones = () => {
  const { anotacionFinal, clearAnotacion } = useContext(AnotacionContext);
  const { id } = useParams();

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
  };

  return (
    <div
      style={{
        marginTop: "1.5rem",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
          onClick={generarAnotacionBD}
        >
          Enviar
        </Button>
      </div>
      <OutlinedCard />
    </div>
  );
};

export default PacientesAnotaciones;
