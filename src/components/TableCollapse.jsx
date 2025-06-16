import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import "./Table.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { SelectFiltrado } from "./FilterPacientes.jsx";
import { SelectVariants } from "./material-ui/SelectClasfication.jsx";
import { useFilter } from "../contexts/filters";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function Paciente({ paciente }) {

  useEffect(() => {
    if (!paciente.historial || paciente.historial.length === 0) {
      setClasificacion("no_iniciado");
    }
  }, [paciente.historial]);

  const [open, setOpen] = useState(false);
  const [clasificacion, setClasificacion] = useState("");
  const { filtrado } = useFilter();

  function getColor() {
    if (clasificacion === "no_iniciado") {
      return "#9e8a8b";
    } else if (clasificacion === "mejorando") {
      return "#d4edda";
    } else if (clasificacion === "iniciando") {
      return "#fff3cd";
    } else if (clasificacion === "empeorando") {
      return "#f8d7da";
    } else if (clasificacion === "consulta") {
      return "#cce5ff";
    } else if (clasificacion === "en_alta") {
      return "#d6d8d9";
    } else {
      return "#fff";
    }
  }

  return (
    <>
      {filtrado === "" || filtrado === clasificacion ? (
        <React.Fragment>
          <TableRow
            sx={{
              "& > *": { borderBottom: "unset" },
              backgroundColor: getColor(),
            }}
          >
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
            <TableCell align="center">
              <SelectVariants
                clasificacion={clasificacion}
                setClasificacion={setClasificacion}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography
                    sx={{ fontSize: "1.4rem", fontFamily: "Gentium Plus" }}
                    gutterBottom
                    component="div"
                  >
                    Historial
                  </Typography>
                  <div className="table-historial">
                    <Table size="small" aria-label="purchases">
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
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paciente.historial &&
                          paciente.historial.map((historial, index) => (
                            <TableRow key={index}>
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {historial.juego}
                              </TableCell>
                              <TableCell align="center">
                                {historial.aciertos}
                              </TableCell>
                              <TableCell align="center">
                                {historial.errores}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <Stack>
                      <Link to={`/profile-paciente/${paciente.id}`}>
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: "#2f5496" }}
                        >
                          Más
                        </Button>
                      </Link>
                    </Stack>
                  </div>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </React.Fragment>
      ) : null}
    </>
  );
}

Paciente.propTypes = {
  paciente: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired,
    desempenoGlobal: PropTypes.number.isRequired,
    historial: PropTypes.arrayOf(
      PropTypes.shape({
        juego: PropTypes.string.isRequired,
        aciertos: PropTypes.number.isRequired,
        errores: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

function CollapsibleTable() {
  const { pacientesDataFirebase, loading, error } = usePacientes();
  const { filtrado, setFiltrado } = useFilter();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("nombre");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedPacientes = useMemo(
    () =>
      Array.isArray(pacientesDataFirebase)
        ? pacientesDataFirebase.slice().sort(getComparator(order, orderBy))
        : [],
    [pacientesDataFirebase, order, orderBy]
  );

  if (loading) return <div><p style={{color: 'white'}}>Cargando...</p></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <SelectFiltrado filtrado={filtrado} setFiltrado={setFiltrado} />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" className="table">
          <TableHead className="header">
            <TableRow>
              <TableCell />
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
                align="center"
                sortDirection={orderBy === "nombre" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "nombre"}
                  direction={orderBy === "nombre" ? order : "asc"}
                  onClick={(event) => handleRequestSort(event, "nombre")}
                  style={{ color: "white" }}
                  sx={{
                    color: "white",
                    "& .MuiTableSortLabel-icon": { color: "white !important" },
                  }}
                >
                  Nombre
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
                align="center"
                sortDirection={orderBy === "edad" ? order : false}
              >
                <TableSortLabel
                  active={orderBy === "edad"}
                  direction={orderBy === "edad" ? order : "asc"}
                  onClick={(event) => handleRequestSort(event, "edad")}
                  style={{ color: "white" }}
                  sx={{
                    color: "white",
                    "& .MuiTableSortLabel-icon": { color: "white !important" },
                  }}
                >
                  Edad
                </TableSortLabel>
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
                align="center"
              >
                Desempeño(%)
              </TableCell>
              <TableCell
                sx={{
                  color: "white",
                  fontSize: "1.2rem",
                  fontFamily: "Gentium Plus",
                }}
                align="center"
              >
                Clasificación
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedPacientes.map((paciente) => (
              <Paciente key={paciente.id} paciente={paciente} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CollapsibleTable;
