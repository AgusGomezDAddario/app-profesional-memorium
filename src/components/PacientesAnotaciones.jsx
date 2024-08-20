import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";
import { Button } from "@mui/material";

const PacientesAnotaciones = () => {
  return (
      <div
        style={{
          marginTop: "1.5rem",
          marginX: "auto",
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
        }}>
          <TextFieldAnotacion />
          <Button variant="text" sx={{color: 'white'}}>Enviar</Button>
        </div>
        <OutlinedCard />
      </div>
  );
};

export default PacientesAnotaciones;
