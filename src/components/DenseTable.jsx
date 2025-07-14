import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import "./Table.css";
import { calcularPorcentajeAciertosPorJuego } from "../pacientesInfo/usePacientes.js";

export default function DenseTable() {
  const { id } = useParams();
  const { pacientesDataFirebase, loading, error } = usePacientes();
  const [pacienteProfile, setPacienteProfile] = useState(null);

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

  if (loading || !pacienteProfile) {
    return <p style={{ color: "white" }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: "white" }}>Error: {error.message}</p>;
  }

  const noData =
    !pacienteProfile.historial ||
    pacienteProfile.historial.length === 0 ||
    pacienteProfile.historial.every(
      (historial) =>
        (!historial.aciertos && !historial.errores && !historial.partidas) ||
        (Array.isArray(historial.partidas) && historial.partidas.length === 0)
    );

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
                Juego
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
                Desempeño(%)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {noData ? (
              <TableRow>
                <TableCell colSpan={4} align="center" sx={{ color: "#2f5496", fontSize: "1.2rem", fontFamily: "Gentium Plus" }}>
                  No hay datos de desempeño para este paciente.
                </TableCell>
              </TableRow>
            ) : (
              pacienteProfile.historial.map((historial, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" align="center">
                    {historial.juego}
                  </TableCell>
                  <TableCell align="center">{historial.aciertos}</TableCell>
                  <TableCell align="center">{historial.errores}</TableCell>
                  <TableCell align="center">
                    {calcularPorcentajeAciertosPorJuego(historial)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}