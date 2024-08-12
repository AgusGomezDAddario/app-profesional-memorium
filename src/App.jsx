import React from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { HomePage } from './components/HomePage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthenticatorTheme } from './components/auth/LoginThemeCustom.jsx';

Amplify.configure(awsConfig);

export default function App () {
  return (
          <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<AuthenticatorTheme />}></Route>
                    </Routes>
                </Router>
              <Router />
          </div>
      );
}

