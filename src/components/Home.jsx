import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, BookOpen, Gamepad2 } from 'lucide-react';
import "./HomePage.css";
import logo from "../images/logo_memorium_white.png";
import image from "../images/image_brain.png";

const FeatureCard = ({ title, description, to, icon: IconComponent }) => {
  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 flex flex-col"
      style={{ fontFamily: "'Gentium Plus', sans-serif" }}
    >
      <div className="flex justify-center mb-4">
        {IconComponent && <IconComponent size={48} className="text-blue-700" />}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-6 text-lg flex-1">
        {description}
      </p>
      <div className="text-center mt-auto">
        <Link
          to={to}
          className="inline-block bg-memorium text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 shadow-md hover:shadow-lg text-base"
        >
          Explorar
        </Link>
      </div>
    </div>
  );
};

const HomePageContent = () => { 
  return (
    <div className="min-h-screen bg-memorium font-inter text-gray-900 overflow-x-hidden">
      {/* Sección Hero */}
      <section className="relative flex flex-col items-center justify-center text-center p-8 md:p-16 bg-memorium text-white shadow-2xl rounded-b-3xl">
        <div className="absolute inset-0 bg-memorium opacity-90 rounded-b-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight welcome-text">
            Bienvenido a Memorium!
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-6 welcome-text">
            Tu centro de seguimiento integral para pacientes
          </h2>

          <img
            src={logo}
            alt="Memorium logo"
            className="mx-auto my-8 w-36 md:w-48 animate-fade-in"
          />

          <p className="text-lg md:text-xl mb-8 leading-relaxed font-light text-white">
            Memorium te ayuda a seguir de cerca el progreso de tus pacientes y a
            guiarlos hacia una mejora significativa en su calidad de vida a través de herramientas innovadoras y personalizadas.
          </p>
          <p className="text-base md:text-lg font-light text-white">
            Explora nuestras herramientas diseñadas para apoyar tu práctica clínica
            y facilitar el seguimiento de tratamientos, integrando lo último en tecnología cognitiva.
          </p>
        </div>
      </section>

      {/* Sección de Características/Navegación */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
            Descubre las Potencialidades de Memorium
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <FeatureCard
              title="Sección Pacientes"
              description="Siga la evolución de sus pacientes en sus tratamientos y brinde una mejor atención personalizada."
              to="/pacientes"
              icon={Users}
            />
            <FeatureCard
              title="Conozca la Plataforma"
              description="Si tiene dudas sobre cómo utilizar la plataforma, aquí encontrará la información que necesita para empezar."
              to="/plataforma"
              icon={BookOpen}
            />
            <FeatureCard
              title="Conozca los Juegos"
              description="Explore la variedad de juegos disponibles en la app móvil para el entrenamiento de la memoria de trabajo."
              to="/juegos"
              icon={Gamepad2}
            />
            {/* Funcionalidad futura */}
            <div
              className="bg-gray-200 p-6 rounded-xl shadow-lg border border-gray-300 flex flex-col opacity-60 cursor-not-allowed"
              style={{ fontFamily: "'Gentium Plus', sans-serif" }}
              title="Próximamente"
            >
              <div className="flex justify-center mb-4">
                <Brain size={48} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-500 mb-2 text-center">
                IA para Decisiones Médicas
              </h3>
              <p className="text-gray-400 text-center mb-6 text-lg flex-1">
                Próximamente: Utilice la inteligencia artificial para obtener insights y apoyar la toma de decisiones clínicas.
              </p>
              <div className="text-center mt-auto">
                <span className="inline-block bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg text-base cursor-not-allowed">
                  Próximamente
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de llamado a la acción final o imagen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-memorium text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Transformando el Cuidado de la Memoria
          </h2>
          <img
            src={image}
            alt="Imagen de cerebro con un celular"
            className="mx-auto my-8 w-full max-w-md rounded-xl shadow-lg border-2 border-white animate-fade-in-up"
          />
          <p className="text-lg md:text-xl mb-8 leading-relaxed font-light text-white">
            Descubra el universo Memorium y la variedad de herramientas que ofrecemos
            para el tratamiento y la mejora de la memoria de trabajo en adultos mayores.
            Una solución innovadora y efectiva en el campo de la salud digital.
          </p>
        </div>
      </section>

      {/* Pie de página (ejemplo simple) */}
      <footer className="py-8 bg-gray-800 text-center text-sm font-inter">
        <p className='text-white'>&copy; {new Date().getFullYear()} Gomez D'Addario. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePageContent;