import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePacientes } from "../../pacientesInfo/usePacientes.js";
import "./Chart.css";

export const SimpleCharts = () => {
  const { id } = useParams();
  const pacientes = usePacientes();
  const [pacienteProfile, setPacienteProfile] = useState(null);

  useEffect(() => {
    const pacienteEncontrado = pacientes.find((paciente) => paciente.id === id);
    if (pacienteEncontrado) {
      setPacienteProfile(pacienteEncontrado);
    }
  }, [id, pacientes]);

  if (!pacienteProfile || !pacienteProfile.historial) {
    return <div>Loading...</div>;
  }

  return (
    <div className="chart-container">
      <BarChart
        xAxis={[
          {
            id: "desempeño_aciertos",
            data: ["Juego 1", "Juego 2", "Juego 3", "Juego 4", "Juego 5"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [
              pacienteProfile.historial[0].aciertos,
              pacienteProfile.historial[1].aciertos,
              pacienteProfile.historial[2].aciertos,
              pacienteProfile.historial[3].aciertos,
              pacienteProfile.historial[4].aciertos,
            ],
          },
        ]}
        width={700}
        height={500}
        colors={["#00FF00"]}
        barLabel="value"
      />

      <BarChart
        xAxis={[
          {
            id: "desempeño_errores",
            data: ["Juego 1", "Juego 2", "Juego 3", "Juego 4", "Juego 5"],
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: [
              pacienteProfile.historial[0].errores,
              pacienteProfile.historial[1].errores,
              pacienteProfile.historial[2].errores,
              pacienteProfile.historial[3].errores,
              pacienteProfile.historial[4].errores,
            ],
          },
        ]}
        width={700}
        height={500}
        colors={["#FF0000"]}
        barLabel="value"
      />
    </div>
  );
};
