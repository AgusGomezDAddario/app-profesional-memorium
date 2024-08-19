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
import './Table.css';

export default function DenseTable() {
  const { id } = useParams();
  const pacientes = usePacientes();
  const [pacienteProfile, setPacienteProfile] = useState(null);

  useEffect(() => {
    pacientes.forEach((paciente) => {
      if (paciente.id === id) {
        setPacienteProfile(paciente);
      }
    });
  }, [pacientes, id]);

  return (
    <div>
      {pacienteProfile ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead className='header'>
              <TableRow>
                <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Juego</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Aciertos</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Errores</TableCell>
                <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Rendimiento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pacienteProfile.historial &&
                pacienteProfile.historial.map((historial, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row" align="center">
                      {historial.juego}
                    </TableCell>
                    <TableCell align="center">{historial.aciertos}</TableCell>
                    <TableCell align="center">{historial.errores}</TableCell>
                    <TableCell align="center">9999</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
