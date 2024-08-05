import React from 'react';
import './App.css';
import { Bienvenida } from './components/Bienvenida.jsx';
import { CollapsibleTable } from './components/TableCollapse.jsx';

export default function App() {

  return (
      <div className="App">
        <div className='WelcomeTable'>
          <Bienvenida />
          <CollapsibleTable />
        </div>
      </div>
  );
}

