import React, { useEffect } from 'react';
import "./PacientesTable.css";
import CollapsibleTable from './TableCollapse';
import TemporaryDrawer from './material-ui/Drawer';

export const PacientesTable = () => {

    return (
        <>
            <TemporaryDrawer />
            <div className="container">
                <h1 className="h1">Bienvenido a su sitio web de Memorium</h1>
                <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
                <CollapsibleTable />
            </div>
        </>
    )
}