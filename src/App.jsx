import React from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { HomePage } from './components/HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatorTheme } from './components/auth/LoginThemeCustom.jsx';
import { UpdateUser } from './components/auth/UpdateUserAttributes.jsx';
import { ProfilePaciente } from './components/ProfilePaciente.jsx';
import { ConozcaLaPlataforma } from './components/ConozcaLaPlataforma.jsx';
import { Games } from './components/Games.jsx';

Amplify.configure(awsConfig);

export default function App() {
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
