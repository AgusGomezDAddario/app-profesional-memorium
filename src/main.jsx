import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App.jsx';
// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

