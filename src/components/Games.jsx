import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
import "./platform_carusel/css/embla.css";
import image from "../images/image_brain.png";
import { Link } from "react-router-dom";
import { BasicStack } from "./material-ui/StackGames";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export const Games = () => {
  return (
    <div>
      <h1 id="h1-texto-grande">Conozca los juegos disponibles en Memorium</h1>
      <SportsEsportsIcon sx={{ fontSize: "5rem", color: "white" }} />
      <Divider style={{ backgroundColor: "white" }} />
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
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            Volver a Inicio
          </span>
        </Link>
      </div>
      <BasicStack />
      <img
        src={image}
        className="mx-auto my-8 w-full max-w-md rounded-xl shadow-lg border-2 border-white animate-fade-in-up"
        alt="Imagen de cerebro con un celular"
      />
    </div>
  );
};
