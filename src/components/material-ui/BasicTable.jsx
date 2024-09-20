import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead className='header'>
          <TableRow>
          <TableCell sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Número de Partida </TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Aciertos</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Errores</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Tiempo</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Facilitaciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
