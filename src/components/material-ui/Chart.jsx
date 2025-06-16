import * as React from "react";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from '@mui/x-charts/BarChart';
import { useParams } from "react-router-dom";
import { usePacientes } from "../../pacientesInfo/usePacientes.js";
import "./Chart.css";

export const SimpleCharts = () => {
  const { id } = useParams();
  const { pacientesDataFirebase, loading, error } = usePacientes();
  const [pacienteProfile, setPacienteProfile] = useState(null);
  const [itemData, setItemData] = useState();
  const [axisData, setAxisData] = useState();

  useEffect(() => {
    if (Array.isArray(pacientesDataFirebase)) {
      const pacienteEncontrado = pacientesDataFirebase.find(
        (paciente) => paciente.id === id
      );
      if (pacienteEncontrado) {
        setPacienteProfile(pacienteEncontrado);
      }
    }
  }, [id, pacientesDataFirebase]);

  if (loading || !pacienteProfile || !pacienteProfile.historial) {
    return <div style={{color: 'white'}}>Cargando...</div>;
  }

  const barChartsParams = {
    series: [
      {
        id: "aciertos",
        data: pacienteProfile.historial.map(h => h.aciertos),
        label: "Aciertos",
        stack: "total",
        color: "#1ce418",
        highlightScope: {
          highlight: "item",
        },
      },
      {
        id: "errores",
        data: pacienteProfile.historial.map(h => h.errores),
        label: "Errores",
        stack: "total",
        color: "#e72f2f",
        highlightScope: {
          highlight: "item",
        },
      },
    ],
    xAxis: [
      {
        data: ["Memory Game", "Numerium", "Contrarium", "Orderium", "Abecedarium"],
        scaleType: "band",
        id: "axis1",
      },
    ],
    height: 500,
    width: 700,
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <div className="chart-container">
          <BarChart
            {...barChartsParams}
            onItemClick={(event, d) => setItemData(d)}
            onAxisClick={(event, d) => setAxisData(d)}
          />
        </div>
      </Box>
    </Stack>
  );
};