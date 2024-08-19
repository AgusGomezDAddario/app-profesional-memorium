import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import './Table.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Paciente({ paciente }) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {paciente.nombre}
        </TableCell>
        <TableCell align="center">{paciente.edad}</TableCell>
        <TableCell align="center">{paciente.desempenoGlobal}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography sx={{fontSize: '1.4rem', fontFamily: 'Gentium Plus'}} gutterBottom component="div">
                Historial
              </Typography>
              <div className='table-historial'>
                <Table size="small" aria-label="purchases">
                  <TableHead className='header'>
                    <TableRow>
                      <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Juego</TableCell>
                      <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Aciertos</TableCell>
                      <TableCell align="center" sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }}>Errores</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {paciente.historial && paciente.historial.map((historial, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row" align="center">
                          {historial.juego}
                        </TableCell>
                        <TableCell align="center">{historial.aciertos}</TableCell>
                        <TableCell align="center">{historial.errores}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Stack>
                  <Link to={`/profile-paciente/${paciente.id}`}>
                    <Button variant="contained" sx={{backgroundColor: '#2f5496'}}>Más</Button>
                  </Link>
                </Stack>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Paciente.propTypes = {
  paciente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    desempenoGlobal: PropTypes.number.isRequired,
    historial: PropTypes.arrayOf(PropTypes.shape({
      juego: PropTypes.string.isRequired,
      aciertos: PropTypes.number.isRequired,
      errores: PropTypes.number.isRequired,
    })).isRequired,
  }).isRequired,
};
function CollapsibleTable () {
  const pacientes = usePacientes();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" className='table'>
        <TableHead className='header'>
          <TableRow>
            <TableCell />
            <TableCell sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }} align="center">Nombre</TableCell>
            <TableCell sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }} align="center">Edad</TableCell>
            <TableCell sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }} align="center">Desempeño(%)</TableCell>
            <TableCell sx={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Gentium Plus' }} align="center">Clasificación</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(pacientes).map(([dni, paciente]) => (
            <Paciente key={dni} paciente={paciente} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;