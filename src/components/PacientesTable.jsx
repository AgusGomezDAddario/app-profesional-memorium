import React from 'react';
import "./PacientesTable.css"
import CollapsibleTable from './TableCollapse';

export const PacientesTable = () => {

    return (
        <div className="container">
            <h1 className="h1">Bienvenido a su<br/> sitio web de Memorium</h1>
            <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
            <CollapsibleTable />
        </div>
    )
}