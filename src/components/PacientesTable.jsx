import React from 'react';
import "./PacientesTable.css";
import CollapsibleTable from './TableCollapse';
import TemporaryDrawer from './material-ui/Drawer';
import { View } from '@aws-amplify/ui-react';
import { Header } from './Header';

export const PacientesTable = () => {
    return (
        <View>
            <div className="container">
                <Header />
                <TemporaryDrawer />
                <h1 className="h1">Bienvenido a su sitio web de Memorium</h1>
                <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
                <CollapsibleTable />
            </div>
        </View >
    )
}