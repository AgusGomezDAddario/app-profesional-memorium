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
      <h1 id="h1-texto-grande">
        Conozca los juegos disponibles en Memorium
      </h1>
      <SportsEsportsIcon sx={{ fontSize: "5rem", color: "white" }} />
      <Divider style={{ backgroundColor: "white" }} />
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
      <BasicStack />
      <img
        src={image}
        className="mx-auto my-8 w-full max-w-md rounded-xl shadow-lg border-2 border-white animate-fade-in-up"
        alt="Imagen de cerebro con un celular"
      />
    </div>
  );
};
