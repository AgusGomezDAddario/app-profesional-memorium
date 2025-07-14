import { React } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { usePacientes } from "../pacientesInfo/usePacientes.js";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { SimpleCharts } from "./material-ui/Chart.jsx"; 
import { BasicTabs } from "./material-ui/PaginationUserProfile.jsx"; 

export const ProfilePaciente = () => {
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
    return <p style={{ color: "white", fontSize: "2rem" }}>Cargando...</p>;
  }

  if (error) {
    return <p style={{ color: "white", fontSize: "2rem" }}>Error: {error.message}</p>;
  }

  return (
    <div className="p-4">
      <p style={{ color: "white", fontSize: "3rem", marginTop: "0.7rem" }}>
        {pacienteProfile.nombre}
      </p>
      <Divider style={{ backgroundColor: "white" }} />
      <p style={{ color: "white", fontSize: "1.8rem", marginTop: "0.3rem" }}>
        Edad: {pacienteProfile.edad}
      </p>
      <p style={{ color: "white", fontSize: "1.8rem", marginTop: "0.3rem" }}>
        Desempeño: {pacienteProfile.desempenoGlobal}%
      </p>
      <BasicTabs patientIdFromProfile={pacienteProfile.id} />
      <div
        style={{
          width: "fit-content",
          marginLeft: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <Link to="/pacientes" style={{ textDecoration: "none" }}>
          <span
            className="volver-pacientes-btn"
            style={{
              color: "#2f5496",
              fontSize: "0.9rem",
              marginTop: "0.3rem",
              display: "flex",
              fontFamily: "Gentium Plus",
              border: "2px solid white",
              padding: "1.5rem",
              borderRadius: "1.1rem",
              width: "11rem",
              justifyContent: "center",
              backgroundColor: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = "#2f5496";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(47,84,150,0.18)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#2f5496";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            Volver a Pacientes
          </span>
        </Link>
      </div>
      <SimpleCharts />
    </div>
  );
};
