import { React } from "react";
import "./PacientesTable.css";
import { CollapsibleTable } from "./TableCollapse";
import { TemporaryDrawer } from "./material-ui/Drawer";
import { View } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import { AudioPlayer } from "./AudioInstrucciones";
import { FilterProvider } from "../contexts/filters";

export const PacientesTable = () => {
  return (
    <View>
      <div className="container">
        <Header />
        <TemporaryDrawer />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "block" }}>
            <h1 className="h1">Bienvenido a su sitio web de Memorium</h1>
            <h2 className="h2">Aquí tiene el historial de sus pacientes</h2>
          </div>
          <AudioPlayer audioSrc="https://mybuckets3appprofesionalesmemorium.s3.us-east-2.amazonaws.com/instructivo_home_pacientes.mp3" />
        </div>
        <FilterProvider>
          <CollapsibleTable />
        </FilterProvider>
      </div>
    </View>
  );
};
