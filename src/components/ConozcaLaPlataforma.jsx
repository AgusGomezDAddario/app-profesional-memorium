import { React } from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
import { EmblaCarousel } from "./platform_carusel/js/EmblaCarousel";
import "./platform_carusel/css/embla.css";
import image from "../images/image_brain.png";
import { Link } from "react-router-dom";

const OPTIONS = {};
const SLIDE_COUNT = 8;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const ConozcaLaPlataforma = () => {
  return (
    <div>
      <h1 className="plataforma-text">Conozca nuestra plataforma</h1>
      <h2 className="plataforma-text">
        A continuación, le mostraremos de qué manera aprovechar al máximo
        Memorium
      </h2>
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
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
      <img src={image} className="imagen_central" alt="Imagen de cerebro con un celular" />
    </div>
  );
};
