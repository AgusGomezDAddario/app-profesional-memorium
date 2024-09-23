import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
import './platform_carusel/css/embla.css';
import image from '../images/image_brain.png';
import { Link } from "react-router-dom";
import { BasicStack } from "./material-ui/StackGames";

export const Games = () => {
  return (
    <div>
      <h1 className="plataforma-text">Conozca los juegos disponibles en Memorium</h1>
      <Divider style={{ backgroundColor: "white" }} />
      <Link to="/" style={{ textDecoration: "none" }}>
            <a
              style={{
                color: "white",
                fontSize: "1.2rem",
                marginTop: "0.3rem",
                marginLeft: "1.5rem",
                display: "flex",
                fontFamily: "Gentium Plus",
              }}
            >
              Volver a Inicio
            </a>
          </Link>
        <BasicStack />
      <img src={image} className="imagen_central" alt="Imagen de cerebro con un celular" />
    </div>
  );
};
