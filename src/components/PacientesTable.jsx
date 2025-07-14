import { React } from "react";
import "./PacientesTable.css";
import CollapsibleTable from "./TableCollapse";
import { FilterProvider } from "../contexts/filters";
import { Link } from "react-router-dom";

export const PacientesTable = () => {
  return (
    <div>
      <div className="container">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ display: "block", textAlign: "center" }}>
            <h1 className="h1">Bienvenido a su sitio web de Memorium</h1>
            <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
          </div>
        </div>
        <FilterProvider>
          <div
            style={{
              width: "fit-content",
              marginLeft: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
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
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#2f5496";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(47,84,150,0.18)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "#2f5496";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.08)";
                }}
              >
                Volver a Inicio
              </span>
            </Link>
          </div>
          <CollapsibleTable />
        </FilterProvider>
      </div>
    </div>
  );
};
