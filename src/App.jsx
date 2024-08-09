import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { Welcome } from './components/HomePage.jsx'

Amplify.configure(awsConfig);

export default function App () {
  return (
          <div className="App">
              <Welcome />
          </div>
      );
}

