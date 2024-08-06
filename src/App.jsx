import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { AuthenticatorTheme } from './components/auth/LoginThemeCustom.jsx';

Amplify.configure(awsConfig);

export default function App () {
  return (
          <div className="App">
              <AuthenticatorTheme />
          </div>
      );
}

