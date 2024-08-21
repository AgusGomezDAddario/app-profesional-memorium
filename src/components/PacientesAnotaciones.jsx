import React from "react";
import { OutlinedCard } from "./material-ui/CardAnotaciones.jsx";
import { TextFieldAnotacion } from "./material-ui/TextFieldAnotaciones.jsx";


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
          <TextFieldAnotacion />
        <OutlinedCard />
      </div>
  );
};

export default PacientesAnotaciones;
