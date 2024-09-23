import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { obtenerTiemposDePaciente } from "../../pacientesInfo/usePacientes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Chart.css';

export const BasicLineChart = ({ juego }) => {
  const [tiempos, setTiempos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const tiemposObtenidos = obtenerTiemposDePaciente(id, juego);
    setTiempos(tiemposObtenidos);
  }, [id]);

  return (
    <div style={{marginTop: '2rem', borderRadius: '20px'}}>
      <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 0, md: 4 }}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <div className="chart-container">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21, 22, 23, 24, 25,
                ],
              },
            ]}
            series={[
              {
                data: tiempos,
                color: "#2f5496",
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </Box>
    </Stack>
    </div>
  );
};
