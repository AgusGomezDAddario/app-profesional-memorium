import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Table.css";

export const BasicTable = ({ game, pacienteProfile }) => {
  if (!pacienteProfile) {
    return <p style={{ color: "white" }}>Cargando...</p>;
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead className="header">
            <TableRow>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
              >
                Número de Partida
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
              >
                Aciertos
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
              >
                Errores
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
              >
                Tiempo (segundos)
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
              >
                Info. Adicional
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pacienteProfile.historial &&
              pacienteProfile.historial
                .filter((historial) => historial.juego === game.toString())
                .flatMap((historial) =>
                  historial.partidas.map((partida, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="center">{partida.aciertos}</TableCell>
                      <TableCell align="center">{partida.errores}</TableCell>
                      <TableCell align="center">{partida.tiempo}</TableCell>
                      <TableCell align="center">
                        {historial.juego === "3" || historial.juego === "4"
                          ? "Facilitaciones: " + partida.facilitaciones
                          : partida.dificultad}
                      </TableCell>
                    </TableRow>
                  ))
                )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};