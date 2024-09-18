import React from "react";
import "./ConozcaLaPlataforma.css";
import Divider from "@mui/material/Divider";
// import EmblaCarousel from "./platform_carusel/js/EmblaCarousel";
// import "./platform_carusel/css/embla.css";
import image from "../images/image_brain.png";
import { Link } from "react-router-dom";
// import { images_carrusel } from "./platform_carusel/images_carrusel";
import AudioPlayer from './AudioInstrucciones';
import platform1 from '../images/platform_1.png';
import platform2 from '../images/platform_2.png';
import platform3 from '../images/platform_3.png';
import platform4 from '../images/platform_4.png';
import platform5 from '../images/platform_5.png';
import platform6 from '../images/platform_6.png';
import platform7 from '../images/platform_7.png';
import platform8 from '../images/platform_8.png';

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

      <div id="Imagen 1">
        <img
          src={platform1}
          alt="Platform 1"
        />
        <h3 className="plataforma-text">Bienvenido a Memorium. Esta es nuestra plataforma diseñada para profesionales de la salud que buscan monitorear y mejorar la memoria de trabajo de sus pacientes. Aquí, podrás gestionar tratamientos y explorar los juegos especializados que hemos creado para ayudar a tus pacientes a mejorar su memoria.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/0.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />
      
      <div id="Imagen 2">
        <img
          src={platform2}
          alt="Platform 2"
        />
        <h3 className="plataforma-text">Esta es la pantalla principal de Memorium. Desde aquí puedes navegar fácilmente entre tres secciones clave: `Mis pacientes` para gestionar la información de tus pacientes, `Conocer Plataforma` para familiarizarte con las herramientas disponibles, y `Juegos disponibles` para conocer los juegos diseñados para entrenar la memoria.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/1.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />
    
      <div id="Imagen 3">
        <img
          src={platform3}
          alt="Platform 3"
        />
        <h3 className="plataforma-text">Para gestionar a tus pacientes, primero necesitas iniciar sesión en Memorium. Si ya tienes una cuenta, simplemente introduce tus credenciales. Si aún no estás registrado, puedes crear una cuenta rápidamente para comenzar a usar nuestras herramientas.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/2.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />

      <div id="Imagen 4">
        <img
          src={platform4}
          alt="Platform 4"
        />
        <h3 className="plataforma-text">En la sección `Mis pacientes` podrás ver una lista completa de todos los pacientes asignados a tu cuidado. Aquí podrás revisar su información personal, como nombre, edad, y también ver sus resultados en los diferentes juegos de memoria.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/3.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />

      <div id="Imagen 5">
        <img
          src={platform5}
          alt="Platform 5"
        />
        <h3 className="plataforma-text">Al hacer clic en un paciente, podrás ver detalles específicos sobre su rendimiento en los juegos de memoria. Esto incluye datos como los puntajes en cada juego y un historial completo de su progreso. Esta información te permitirá evaluar de manera detallada su evolución.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/4.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />

      <div id="Imagen 6">
        <img
          src={platform6}
          alt="Platform 6"
        />
        <h3 className="plataforma-text">Memorium te permite asignar estados específicos a cada paciente para que puedas tener una visión clara de su progreso. Las clasificaciones incluyen `Mejorando`, `En tratamiento`, `Empeorando`, `Consulta`, y `En alta`. Esto te ayudará a organizar y priorizar la atención que brindas.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/5.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />

      <div id="Imagen 7">
        <img
          src={platform7}
          alt="Platform 7"
        />
        <h3 className="plataforma-text">Para hacer tu trabajo más eficiente, puedes filtrar a tus pacientes según el estado de clasificación que les hayas asignado. También puedes ordenarlos por nombre o edad, lo que te permitirá encontrar rápidamente la información que necesitas.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/6.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />

      <div id="Imagen 8">
        <img
          src={platform8}
          alt="Platform 8"
        />
        <h3 className="plataforma-text">En esta pantalla, verás gráficos detallados que muestran el rendimiento de tus pacientes en los juegos de memoria. Además, puedes agregar anotaciones sobre sus progresos o cualquier observación relevante, lo que te permitirá hacer un seguimiento más completo de su evolución.</h3>
        <AudioPlayer audioSrc={`https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/7.mp3`} />
      </div>
      <Divider style={{ backgroundColor: "white" }} />
    </div>
  );
};
