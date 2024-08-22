import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";
import { AnotacionContext } from "../contexts/anotaciones";
import { Button } from "@mui/material";
import { useContext } from "react";
import { ddbDocClient, PutCommand, ScanCommand } from '../dinamodb.js';
import { useParams } from "react-router-dom";


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
  const { id } = useParams();
  
  const generarAnotacionBD = async () => {
    const paciente_dni = id;
    const date_row = new Date().toDateString();
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

async function countItemsInTable() {
  try {
      const params = {
          TableName: "patient_annotations",
      };
      const data = await ddbDocClient.send(new ScanCommand(params));
      return data.Count;
  } catch (err) {
      console.error("Error al contar los items:", err);
      return null;
  }
};

export default PacientesAnotaciones;
