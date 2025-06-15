import React from 'react';
import { HomePage } from './components/HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProfilePaciente } from './components/ProfilePaciente.jsx';
import { ConozcaLaPlataforma } from './components/ConozcaLaPlataforma.jsx';
import { Games } from './components/Games.jsx';

export const App = () => {
  return (
          <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<AuthenticatorTheme />}></Route>
                        <Route path="/update-user" element={<UpdateUser />}></Route>
                        <Route path="/profile-paciente/:id" element={<ProfilePaciente />} />
                        <Route path="/plataforma" element={<ConozcaLaPlataforma />} />
                        <Route path="/juegos" element={<Games />} />
                    </Routes>
                </Router>
              <Router />
          </div>
      );
}
