import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
// import EmblaCarousel from "./platform_carusel/js/EmblaCarousel";
// import "./platform_carusel/css/embla.css";
import image from "../images/image_brain.png";
import { Link } from "react-router-dom";
import { images_carrusel } from "./platform_carusel/images_carrusel";
import AudioPlayer from './AudioInstrucciones';

// const OPTIONS = {}
// const SLIDE_COUNT = 8
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
          Volver a Home Page
        </a>
      </Link>
      <div>
        {images_carrusel.map((image, index) => (
          <div key={index}>
            <img
              src={image.src}
              alt="Imagen de interfaz de Memorium App Profesional"
            />
            <h3 className="plataforma-text">{image.text}</h3>
            <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/${index}.mp3`} />
            <Divider style={{ backgroundColor: "white" }} />
          </div>
        ))}
        <img
          src={image}
          className="imagen_central"
          alt="Imagen de cerebro con un celular"
        />
      </div>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS}/> */}
    </div>
  );
};
