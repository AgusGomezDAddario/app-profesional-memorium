import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from '@mui/x-charts/BarChart';
import { useParams } from "react-router-dom";
import "./Chart.css";

export const SimpleCharts = () => {
  const [itemData, setItemData] = useState();
  const [axisData, setAxisData] = useState();
  const { id } = useParams();
  const [pacienteProfile, setPacienteProfile] = useState(null);

  if (!pacienteProfile || !pacienteProfile.historial) {
    return <div style={{color: 'white'}}>cargando...</div>;
  }

  const barChartsParams = {
    series: [
      {
        id: "aciertos",
        data: [
          pacienteProfile.historial[0].aciertos,
          pacienteProfile.historial[1].aciertos,
          pacienteProfile.historial[2].aciertos,
          pacienteProfile.historial[3].aciertos,
          pacienteProfile.historial[4].aciertos,
        ],
        label: "Aciertos",
        stack: "total",
        color: "#1ce418",
        highlightScope: {
          highlight: "item",
        },
      },
      {
        id: "errores",
        data: [
          pacienteProfile.historial[0].errores,
          pacienteProfile.historial[1].errores,
          pacienteProfile.historial[2].errores,
          pacienteProfile.historial[3].errores,
          pacienteProfile.historial[4].errores,
        ],
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