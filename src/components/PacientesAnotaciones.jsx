import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";
import { AnotacionContext } from "../contexts/anotaciones";
import { Button } from "@mui/material";
import { useContext } from "react";
import { ddbDocClient, PutCommand } from '../dinamodb.js';

const saveAnotacionOnBD = async (id_row, dni, date_row, note) => {
  try {
    const params = {
      TableName: "patient_annotations",
      Item: {
        id: id_row,
        date: date_row, 
        anotacion: note,
        paciente_dni: dni,
      },
    };
    await ddbDocClient.send(new PutCommand(params));
    console.log("Anotación guardada con éxito");
  } catch (err) {
    console.error("Error al guardar la anotación: ", err);
  }
};

const PacientesAnotaciones = () => {
  const { anotacionFinal, clearAnotacion } = useContext(AnotacionContext);

  const imprimirAnotacion = () => {
    console.log(anotacionFinal);
    clearAnotacion();
    saveAnotacionOnBD("3", 12345678, "2024-08-21T14:30:00Z", "El paciente muestra signos de mejoría...");
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
          onClick={imprimirAnotacion}
        >
          Enviar
        </Button>
      </div>
      <OutlinedCard />
    </div>
  );
};

export default PacientesAnotaciones;
