import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import { usePacientes, obtenerTiemposDePaciente } from "../../pacientesInfo/usePacientes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Chart.css';

export const BasicLineChart = ({ juego }) => {
  const [tiempos, setTiempos] = useState([]);
  const { id } = useParams();
  const { pacientesDataFirebase, loading, error } = usePacientes();

  useEffect(() => {
    if (pacientesDataFirebase.length > 0) {
      const tiemposObtenidos = obtenerTiemposDePaciente(pacientesDataFirebase, id, juego);
      console.log("Tiempos obtenidos:", tiemposObtenidos); // Verifica los datos aquí
      setTiempos(tiemposObtenidos);
    }
  }, [id, pacientesDataFirebase, juego]);

  // if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
                  data: tiempos.map((_, index) => index + 1), // Muestra los índices como etiquetas
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