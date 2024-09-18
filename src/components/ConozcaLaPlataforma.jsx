import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
// import EmblaCarousel from "./platform_carusel/js/EmblaCarousel";
// import "./platform_carusel/css/embla.css";
import image from "../images/image_brain.png";
import { Link } from "react-router-dom";
// import { images_carrusel } from "./platform_carusel/images_carrusel";
import AudioPlayer from './AudioInstrucciones';

// const OPTIONS = {}
// const SLIDE_COUNT = 8
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export const images_carrusel = [
  {
      id: 0,
      src: '../../src/images/platform_1.png',
      text: 'Bienvenido a Memorium. Esta es nuestra plataforma diseñada para profesionales de la salud que buscan monitorear y mejorar la memoria de trabajo de sus pacientes. Aquí, podrás gestionar tratamientos y explorar los juegos especializados que hemos creado para ayudar a tus pacientes a mejorar su memoria.',
  },
  {
      id: 1,
      src: '../../src/images/platform_3.png',
      text: 'Esta es la pantalla principal de Memorium. Desde aquí puedes navegar fácilmente entre tres secciones clave: `Mis pacientes` para gestionar la información de tus pacientes, `Conocer Plataforma` para familiarizarte con las herramientas disponibles, y `Juegos disponibles` para conocer los juegos diseñados para entrenar la memoria.',
  },
  {
      id: 2,
      src: '../../src/images/platform_2.png',
      text: 'Para gestionar a tus pacientes, primero necesitas iniciar sesión en Memorium. Si ya tienes una cuenta, simplemente introduce tus credenciales. Si aún no estás registrado, puedes crear una cuenta rápidamente para comenzar a usar nuestras herramientas.',
  },
  {
      id: 3,
      src: '../../src/images/platform_4.png',
      text: 'En la sección `Mis pacientes` podrás ver una lista completa de todos los pacientes asignados a tu cuidado. Aquí podrás revisar su información personal, como nombre, edad, y también ver sus resultados en los diferentes juegos de memoria.',
  },
  {
      id: 4,
      src: '../../src/images/platform_5.png',
      text: 'Al hacer clic en un paciente, podrás ver detalles específicos sobre su rendimiento en los juegos de memoria. Esto incluye datos como los puntajes en cada juego y un historial completo de su progreso. Esta información te permitirá evaluar de manera detallada su evolución.',
  },
  {
      id: 5,
      src: '../../src/images/platform_6.png',
      text: 'Memorium te permite asignar estados específicos a cada paciente para que puedas tener una visión clara de su progreso. Las clasificaciones incluyen `Mejorando`, `En tratamiento`, `Empeorando`, `Consulta`, y `En alta`. Esto te ayudará a organizar y priorizar la atención que brindas.',
  },
  {
      id: 6,
      src: '../../src/images/platform_7.png',
      text: 'Para hacer tu trabajo más eficiente, puedes filtrar a tus pacientes según el estado de clasificación que les hayas asignado. También puedes ordenarlos por nombre o edad, lo que te permitirá encontrar rápidamente la información que necesitas.',
  },
  {
      id: 7,
      src: '../../src/images/platform_8.png',
      text: 'En esta pantalla, verás gráficos detallados que muestran el rendimiento de tus pacientes en los juegos de memoria. Además, puedes agregar anotaciones sobre sus progresos o cualquier observación relevante, lo que te permitirá hacer un seguimiento más completo de su evolución.',
  },
]

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
