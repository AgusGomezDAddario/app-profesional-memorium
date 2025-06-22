import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfilePaciente } from './components/ProfilePaciente.jsx';
import { PacientesTable } from './components/PacientesTable.jsx';
import { ConozcaLaPlataforma } from './components/ConozcaLaPlataforma.jsx';
import { Games } from './components/Games.jsx';
import HomePageContent from './components/Home.jsx';

export const App = () => {
  return (
          <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePageContent />} />
                        <Route path="/pacientes" element={<PacientesTable />} />
                        <Route path="/profile-paciente/:id" element={<ProfilePaciente />} />
                        <Route path="/plataforma" element={<ConozcaLaPlataforma />} />
                        <Route path="/juegos" element={<Games />} />
                    </Routes>
                </Router>
              <Router />
          </div>
      );
}
