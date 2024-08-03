import React from 'react';
import './App.css';
import { Bienvenida } from './components/Bienvenida.jsx';
import { BasicTable } from './components/Table.jsx';

export default function App() {

  return (
      <div className="App">
        <div className='WelcomeTable'>
          <Bienvenida />
          <BasicTable />
        </div>
      </div>
  );
}

