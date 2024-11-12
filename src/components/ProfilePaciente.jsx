import { React } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePacientes } from "../pacientesInfo/usePacientes.js"; // Importa la función aquí
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { PacientesAnotaciones } from "./PacientesAnotaciones.jsx";
import { AnotacionProvider } from "../contexts/anotaciones.jsx";
import { SimpleCharts } from "./material-ui/Chart.jsx";
import { BasicTabs } from "./material-ui/PaginationUserProfile.jsx";
import { SimpleBackdrop } from "./material-ui/Loader.jsx";

export const ProfilePaciente = () => {
  const { id } = useParams();
  const { pacientesDataFirebase, loading, error } = usePacientes();
  const [pacienteProfile, setPacienteProfile] = useState(null);

  useEffect(() => {
    if (Array.isArray(pacientesDataFirebase)) {
      const pacienteEncontrado = pacientesDataFirebase.find((paciente) => paciente.id === id);
      if (pacienteEncontrado) {
        setPacienteProfile(pacienteEncontrado);
      }
    }
  }, [id, pacientesDataFirebase]);

  if (loading) return <SimpleBackdrop />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {pacienteProfile ? (
        <div>
          <p style={{ color: "white", fontSize: "3rem", marginTop: "0.7rem" }}>
            {pacienteProfile.nombre}
          </p>
          <Divider style={{ backgroundColor: "white" }} />
          <p
            style={{ color: "white", fontSize: "1.8rem", marginTop: "0.3rem" }}
          >
            Edad: {pacienteProfile.edad}
          </p>
          <p
            style={{ color: "white", fontSize: "1.8rem", marginTop: "0.3rem" }}
          >
            Desempeño: {pacienteProfile.desempenoGlobal}%
          </p>
          <BasicTabs />
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginTop: "0.3rem",
                marginLeft: "1.5rem",
                display: "flex",
                fontFamily: "Gentium Plus",
              }}
            >
              Volver a Pacientes
            </span>
          </Link>
          <AnotacionProvider>
            <PacientesAnotaciones />
          </AnotacionProvider>
          <SimpleCharts />,
        </div>
      ) : (
        // <p style={{color: 'white'}}>Cargando...</p>
        <SimpleBackdrop />
      )}
    </div>
  );
};