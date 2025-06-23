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
          style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div style={{ display: "block", textAlign: "center" }}>
            <h1 className="h1">Bienvenido a su sitio web de Memorium</h1>
            <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
          </div>
        </div>
        <FilterProvider>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: "1.2rem",
              marginTop: "0.3rem",
              marginLeft: "1.5rem",
              display: "flex",
              fontFamily: "Gentium Plus",
            }}
          >
            Volver a Inicio
          </Link>
          <CollapsibleTable />
        </FilterProvider>
      </div>
    </div>
  );
};
