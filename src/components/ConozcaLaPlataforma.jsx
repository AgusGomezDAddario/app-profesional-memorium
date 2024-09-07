import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
import EmblaCarousel from './platform_carusel/js/EmblaCarousel';
import './platform_carusel/css/embla.css';

const OPTIONS = {}
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const ConozcaLaPlataforma = () => {
  return (
    <div>
      <h1 className="plataforma-text">Conozca nuestra plataforma</h1>
      <h2 className="plataforma-text">
        A continuación, le mostraremos de qué manera aprovechar al máximo
        Memorium
      </h2>
      <Divider style={{ backgroundColor: "white" }} />
      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </div>
  );
};
