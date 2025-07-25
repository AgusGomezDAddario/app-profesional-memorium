import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";
import './Chart.css';

export const BasicLineChart = ({ juego, pacienteProfile }) => {
  if (!pacienteProfile || !pacienteProfile.historial) {
    return <div style={{ color: "white" }}>Cargando...</div>;
  }

  const historialJuego = pacienteProfile.historial.find(
    (h) => h.juego === juego.toString() || h.juego === juego
  );

  const tiempos = historialJuego && historialJuego.partidas
    ? historialJuego.partidas.map((partida) => partida.tiempo)
    : [];

  return (
    <div style={{ marginTop: '2rem', borderRadius: '20px' }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 0, md: 4 }}
        sx={{ width: "100%" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <div className="chart-container">
            {tiempos.length === 0 ? (
              <div style={{ color: "#2f5496", fontSize: "1.2rem", textAlign: "center", padding: "2rem", fontFamily: 'Gentium Plus' }}>
                No hay datos de partidas para este paciente en este juego.
              </div>
            ) : (
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: tiempos.map((_, index) => index + 1),
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
            )}
          </div>
        </Box>
      </Stack>
    </div>
  );
};