import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { usePacientes } from "../hooks/usePacientes.js";
import './Table.css';

export const BasicTable = () => {
  const pacientesData = usePacientes();

  return (
    <TableContainer component={Paper}>
      <Table className='table' aria-label="simple table">
        <TableHead className='header'>
          <TableRow>
            <TableCell sx={{color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus'}}>Nombre</TableCell>
            <TableCell sx={{color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus'}} align='center'>Edad</TableCell>
            <TableCell sx={{color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus'}} align='center'>Condición</TableCell>
            <TableCell sx={{color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus'}} align='center'>Desempeño</TableCell>
            <TableCell sx={{color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus'}} align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientesData.map((paciente) => (
            <TableRow
              key={paciente.dni}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {paciente.nombre}
              </TableCell>
              <TableCell align="center">{paciente.edad}</TableCell>
              <TableCell align="center">{paciente.condicion}</TableCell>
              <TableCell align="center">{paciente.desempenoGlobal}</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
